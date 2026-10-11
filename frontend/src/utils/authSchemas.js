import { refine, z } from "zod";

export const signupShema = z.object({
  name: z.string().trim().min(3, "Name must contain at least 3 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must contain at least 8 characters"),
  confirmPassword: z.string(),
});

refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});


export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required"),
});