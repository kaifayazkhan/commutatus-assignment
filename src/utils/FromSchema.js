import { z } from "zod";

export const employeeSchema = z.object({
    name: z
        .string()
        .nonempty("Name is required")
        .min(3, { message: "Name cannot be less than 3 characters" }),
    email: z.string().nonempty("Email is required").email(),
    phone: z
        .string()
        .nonempty("Phone number is required")
        .min(10, { message: "Phone number can't be less than 10 digits" })
        .max(10, { message: "Phone number can't be more than 10 digits" }),
    position: z.string().nonempty("Position is required"),
    department: z.string().nonempty("Department is required"),
});
