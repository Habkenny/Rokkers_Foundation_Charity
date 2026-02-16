import { z } from "zod";

export const donationSchema = z.object({
  amount: z
    .number()
    .min(1, "Amount must be at least $1")
    .max(100000, "Amount cannot exceed $100,000"),
  customAmount: z.string().optional(),
  frequency: z.enum(["once", "monthly", "yearly"]),
  program: z.enum(["education", "healthcare", "food-security", "general"]),
  paymentMethod: z.enum(["card", "bank", "paypal"]),
});
