import { z } from "zod"

const phoneRegex = /^(?:\+?[0-9]{1,3}[\s.-]?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/

export const contactLeadSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "Please enter at least 2 characters." })
    .max(50, { message: "First name should be under 50 characters." }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "Please enter at least 2 characters." })
    .max(50, { message: "Last name should be under 50 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid email address." })
    .max(254, { message: "Email address is too long." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Phone number is required." })
    .refine((value) => phoneRegex.test(value), {
      message: "Please enter a valid phone number.",
    }),
  weddingDate: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || !Number.isNaN(Date.parse(value)), {
      message: "Please enter a valid date.",
    }),
  planningStage: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || ["just-started", "budgeting", "booking", "final-details"].includes(value), {
      message: "Please choose a planning stage from the list.",
    }),
  estimatedBudget: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) =>
        !value ||
        ["under-75k", "75-125k", "125-200k", "200k-plus", "undecided"].includes(value),
      {
        message: "Please choose a budget range from the list.",
      },
    ),
  guestCount: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || ["under-150", "150-300", "300-500", "500-plus", "undecided"].includes(value),
      {
        message: "Please choose a guest count from the list.",
      },
    ),
  message: z
    .string()
    .trim()
    .min(20, { message: "Please share at least 20 characters so we can prepare for our call." })
    .max(2000, { message: "Message should be under 2000 characters." }),
  newsletterOptIn: z.boolean().optional().default(false),
  source: z.string().trim().optional(),
})

export type ContactLeadFormValues = z.infer<typeof contactLeadSchema>
