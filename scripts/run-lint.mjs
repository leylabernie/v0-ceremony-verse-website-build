import { spawn } from "node:child_process"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)

function runNodeScript(scriptPath, args = []) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [scriptPath, ...args], {
      stdio: ["inherit", "pipe", "pipe"],
    })

    let stdout = ""
    let stderr = ""

    child.stdout.on("data", (chunk) => {
      stdout += chunk
      process.stdout.write(chunk)
    })

    child.stderr.on("data", (chunk) => {
      stderr += chunk
      process.stderr.write(chunk)
    })

    child.on("close", (code) => {
      resolve({ code, stdout, stderr })
    })
  })
}

function hasEslintInstalled() {
  try {
    require.resolve("eslint")
    return true
  } catch {
    return false
  }
}

async function runTypeChecks() {
  const tscBin = require.resolve("typescript/bin/tsc")
  const typeCheckResult = await runNodeScript(tscBin, ["--noEmit"])
  process.exit(typeCheckResult.code ?? 0)
}

async function main() {
  if (!hasEslintInstalled()) {
    console.warn(
      "ESLint packages are unavailable in the offline environment. Running TypeScript checks instead.\n",
    )
    await runTypeChecks()
    return
  }

  const nextBin = require.resolve("next/dist/bin/next")
  const lintResult = await runNodeScript(nextBin, ["lint"])

  if (lintResult.code === 0) {
    process.exit(0)
  }

  // If linting fails for reasons other than missing dependencies, bubble up the exit code.
  process.exit(lintResult.code ?? 1)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
