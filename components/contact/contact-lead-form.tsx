"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "@/components/icons"
import { contactLeadSchema, type ContactLeadFormValues } from "@/lib/validators/contact-lead"

const planningStageOptions = [
  { value: "", label: "Where are you in the planning journey?" },
  { value: "just-started", label: "Just getting started" },
  { value: "budgeting", label: "Figuring out budget & priorities" },
  { value: "booking", label: "Booking venues & key vendors" },
  { value: "final-details", label: "Final details & timelines" },
]

const estimatedBudgetOptions = [
  { value: "", label: "Estimated total celebration budget" },
  { value: "under-75k", label: "Under $75k" },
  { value: "75-125k", label: "$75k - $125k" },
  { value: "125-200k", label: "$125k - $200k" },
  { value: "200k-plus", label: "$200k+" },
  { value: "undecided", label: "We're still deciding" },
]

const guestCountOptions = [
  { value: "", label: "Approximate guest count" },
  { value: "under-150", label: "Up to 150 guests" },
  { value: "150-300", label: "150 - 300 guests" },
  { value: "300-500", label: "300 - 500 guests" },
  { value: "500-plus", label: "500+ guests" },
  { value: "undecided", label: "We're still estimating" },
]

type SubmissionState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string }

export function ContactLeadForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ status: "idle" })
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactLeadFormValues>({
    resolver: zodResolver(contactLeadSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      weddingDate: "",
      planningStage: "",
      estimatedBudget: "",
      guestCount: "",
      message: "",
      newsletterOptIn: false,
    },
  })

  const onSubmit = handleSubmit((values) => {
    setSubmissionState({ status: "loading" })
    startTransition(async () => {
      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values, source: "contact-page" }),
        })

        const payload = await response.json().catch(() => null)

        if (!response.ok) {
          const message =
            payload?.message ??
            "We couldn't submit your consultation request right now. Please try again or call us at +1-215-341-9990."
          setSubmissionState({ status: "error", message })
          return
        }

        const message =
          payload?.message ??
          "Thank you for reaching out! Our concierge team will contact you within 24 hours with next steps."
        setSubmissionState({ status: "success", message })
        reset()
      } catch (error) {
        console.error("Failed to submit lead", error)
        setSubmissionState({
          status: "error",
          message:
            "Something went wrong while submitting the form. Please refresh the page or email hello@ceremonyverse.com.",
        })
      }
    })
  })

  const isSubmitting = submissionState.status === "loading" || isPending

  return (
    <form className="space-y-6" onSubmit={onSubmit} noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="firstName">
            First Name *
          </label>
          <Input
            id="firstName"
            type="text"
            placeholder="Your first name"
            autoComplete="given-name"
            aria-invalid={errors.firstName ? "true" : "false"}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className="w-full border-border focus:border-primary focus:ring-primary"
            {...register("firstName")}
          />
          {errors.firstName ? (
            <p id="firstName-error" className="mt-2 text-sm text-red-600">
              {errors.firstName.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="lastName">
            Last Name *
          </label>
          <Input
            id="lastName"
            type="text"
            placeholder="Your last name"
            autoComplete="family-name"
            aria-invalid={errors.lastName ? "true" : "false"}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className="w-full border-border focus:border-primary focus:ring-primary"
            {...register("lastName")}
          />
          {errors.lastName ? (
            <p id="lastName-error" className="mt-2 text-sm text-red-600">
              {errors.lastName.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="email">
          Email Address *
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full border-border focus:border-primary focus:ring-primary"
          {...register("email")}
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-sm text-red-600">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="phone">
          Phone Number *
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1-215-341-9990"
          autoComplete="tel"
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="w-full border-border focus:border-primary focus:ring-primary"
          {...register("phone")}
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-2 text-sm text-red-600">
            {errors.phone.message}
          </p>
        ) : null}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="weddingDate">
            Wedding Date (if known)
          </label>
          <Input
            id="weddingDate"
            type="date"
            aria-invalid={errors.weddingDate ? "true" : "false"}
            aria-describedby={errors.weddingDate ? "weddingDate-error" : undefined}
            className="w-full border-border focus:border-primary focus:ring-primary"
            {...register("weddingDate")}
          />
          {errors.weddingDate ? (
            <p id="weddingDate-error" className="mt-2 text-sm text-red-600">
              {errors.weddingDate.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="planningStage">
            Planning Stage
          </label>
          <select
            id="planningStage"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:ring-primary"
            aria-invalid={errors.planningStage ? "true" : "false"}
            aria-describedby={errors.planningStage ? "planningStage-error" : undefined}
            {...register("planningStage")}
          >
            {planningStageOptions.map((option) => (
              <option key={option.value || "placeholder"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.planningStage ? (
            <p id="planningStage-error" className="mt-2 text-sm text-red-600">
              {errors.planningStage.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="estimatedBudget">
            Estimated Budget
          </label>
          <select
            id="estimatedBudget"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:ring-primary"
            aria-invalid={errors.estimatedBudget ? "true" : "false"}
            aria-describedby={errors.estimatedBudget ? "estimatedBudget-error" : undefined}
            {...register("estimatedBudget")}
          >
            {estimatedBudgetOptions.map((option) => (
              <option key={option.value || "placeholder"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.estimatedBudget ? (
            <p id="estimatedBudget-error" className="mt-2 text-sm text-red-600">
              {errors.estimatedBudget.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2" htmlFor="guestCount">
            Guest Count
          </label>
          <select
            id="guestCount"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:ring-primary"
            aria-invalid={errors.guestCount ? "true" : "false"}
            aria-describedby={errors.guestCount ? "guestCount-error" : undefined}
            {...register("guestCount")}
          >
            {guestCountOptions.map((option) => (
              <option key={option.value || "placeholder"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.guestCount ? (
            <p id="guestCount-error" className="mt-2 text-sm text-red-600">
              {errors.guestCount.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="message">
          Tell Us About Your Vision *
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Share your wedding vision, cultural elements to highlight, and any questions you have for our planners."
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full border-border focus:border-primary focus:ring-primary"
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-600">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="newsletterOptIn"
          type="checkbox"
          className="mt-1 h-5 w-5 rounded border border-border text-primary focus:ring-primary"
          {...register("newsletterOptIn")}
        />
        <label htmlFor="newsletterOptIn" className="text-sm text-muted-foreground">
          Yes, keep us updated with planning tips, seasonal offers, and cultural celebration inspiration.
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
      >
        <Send className="mr-2 h-5 w-5" />
        {isSubmitting ? "Sending..." : "Get Your Free Wedding Plan"}
      </Button>

      <div aria-live="polite" className="min-h-[1.5rem] text-center text-sm">
        {submissionState.status === "success" ? (
          <p className="text-emerald-600" role="status">
            {submissionState.message}
          </p>
        ) : null}
        {submissionState.status === "error" ? (
          <p className="text-red-600" role="alert">
            {submissionState.message}
          </p>
        ) : null}
      </div>
    </form>
  )
}
