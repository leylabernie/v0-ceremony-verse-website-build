import { NextResponse } from "next/server"

import { contactLeadSchema } from "@/lib/validators/contact-lead"

const GENERIC_ERROR_MESSAGE = "We couldn't process your request right now. Please try again in a moment."

export async function POST(request: Request) {
  try {
    const rawBody = await request.json().catch(() => null)

    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json({ message: "Invalid request body." }, { status: 400 })
    }

    const parsed = contactLeadSchema.safeParse(rawBody)

    if (!parsed.success) {
      const { fieldErrors } = parsed.error.flatten()
      return NextResponse.json(
        {
          message: "Please double-check the highlighted fields.",
          errors: fieldErrors,
        },
        { status: 400 },
      )
    }

    const leadPayload = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
      source: parsed.data.source ?? "web-contact",
    }

    const webhookUrl = process.env.CONTACT_LEAD_WEBHOOK_URL

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadPayload),
        })
      } catch (error) {
        console.error("Failed to forward lead to webhook", error)
      }
    } else {
      console.info("Lead received", leadPayload)
    }

    return NextResponse.json({ message: "Thanks for reaching out! We'll be in touch within one business day." })
  } catch (error) {
    console.error("Unexpected error while creating lead", error)
    return NextResponse.json({ message: GENERIC_ERROR_MESSAGE }, { status: 500 })
  }
}
