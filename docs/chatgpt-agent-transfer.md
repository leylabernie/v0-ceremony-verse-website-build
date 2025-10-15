# ChatGPT Agent Transfer Guide

To make it easy for another ChatGPT agent to pick up this project without requiring any setup on your machine, a machine-readable manifest is generated at `docs/chatgpt-agent-manifest.json`. This manifest lists every non-ignored file in the repository together with its byte size and last modified timestamp so the agent can verify which artifacts to load.

## How to Share with a ChatGPT Agent

1. Open the repository in the browser-based file explorer that accompanies the ChatGPT environment.
2. Provide the agent with the manifest file so it can fetch the exact set of files it needs. The manifest contains:
   - `generatedAt`: ISO timestamp of when the manifest was created.
   - `root`: Name of the repository root folder.
   - `totalFiles` / `totalBytes`: Summary statistics for quick validation.
   - `files`: An array of `{ path, bytes, modified }` objects describing each tracked file.
3. If the agent needs the raw content, you can either:
   - Upload the specific files referenced in the manifest through the ChatGPT UI file uploader, or
   - Compress the repository into an archive directly from GitHub's web interface (`Code` → `Download ZIP`) without running any local commands.

Because the manifest is stored in version control, any future updates should regenerate it by running `node scripts/generate-chatgpt-agent-manifest.mjs` inside the project. When chatting with a new agent, mention the manifest location so it can synchronize quickly.

## Requesting a ChatGPT Agent Review

When you want a ChatGPT agent to review your progress and point out follow-up work:

1. Start a new conversation with the agent and give it a short summary of the areas you would like feedback on (for example, "review the latest contact form implementation" or "audit the analytics integration").
2. Provide a link to the repository (for GitHub-hosted projects) or upload the ZIP exported from GitHub so the agent can browse the code without you running any local commands.
3. Share the `docs/chatgpt-agent-manifest.json` file in the chat. Mention that it lists every tracked file so the agent can quickly locate the relevant artifacts.
4. If the review should focus on specific files, upload those files directly or paste their contents into the conversation so the agent can annotate them inline.
5. Ask the agent for the exact feedback you need—code review comments, testing guidance, or a to-do list—so it understands the scope of the review.

Following these steps ensures the reviewing agent has the same context you do and can respond with actionable guidance without requiring you to install tooling or run commands locally.

## Troubleshooting Broken Repository Links

If you shared a repository URL and the agent reports that the link is inaccessible or broken:

1. **Verify access permissions.** Confirm the repo is public or that you have explicitly granted the agent access. For private GitHub repos, generate a shareable ZIP instead of relying on the direct link.
2. **Provide the manifest directly.** Upload `docs/chatgpt-agent-manifest.json` in the chat so the agent can inspect the file list without visiting the URL.
3. **Upload targeted files.** Drag-and-drop any high-priority files (or a ZIP exported from GitHub via `Code → Download ZIP`) into the conversation. Mention their relative paths so the agent knows where they belong.
4. **Paste critical snippets inline.** For quick reviews, paste the relevant code blocks in the chat and reference the file path and line numbers.
5. **Repeat the request.** Ask the agent to review the uploaded artifacts specifically. Clarify that the web link was unavailable and that the files in the conversation should be used instead.

These steps ensure the agent still receives the updated code even when repository links cannot be opened.

## Asking an Agent to Push Changes to GitHub (No Local Commands Required)

If you want a ChatGPT agent to push the latest commits to GitHub without installing tools or running commands on your computer, follow this playbook:

1. **Create a short-lived GitHub personal access token (PAT).** From the GitHub web UI, go to **Settings → Developer settings → Personal access tokens → Fine-grained tokens** and generate a token with `contents:write` permission for the target repository. Set an expiration date so the token automatically expires after the push.
2. **Share repository connection details with the agent.** In your chat, provide:
   - The HTTPS URL of the repository (for example, `https://github.com/your-org/your-repo.git`).
   - The PAT value. Mention that it should only be used for the current session and can be revoked immediately after the push.
3. **Ask the agent to configure the remote.** The agent will run commands like:
   ```bash
   git remote add origin https://<PAT>@github.com/your-org/your-repo.git
   git push -u origin <branch-name>
   ```
   Because the PAT is embedded in the URL, no additional credential prompts appear.
4. **Confirm the push in GitHub.** Refresh the repository page in your browser to verify that the commits (and any accompanying pull request) are now visible. Once confirmed, revoke the PAT from the GitHub settings page to keep your account secure.

This flow keeps all command-line work inside the agent environment while ensuring you maintain control over repository access.
