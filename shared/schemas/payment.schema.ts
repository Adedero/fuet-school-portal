import z from "zod";

export const admissionFeePaymentSchema = z.object({
  merchantCode: z
    .string("Merhcant code is required")
    .nonempty("Merchant code is required"),
  transactionRef: z.string("Transaction ref is required").refine((value) => {
    const parts = value.split("-");
    return parts.length === 3;
  }, "Invalid transaction ref"),
  amount: z
    .number("Invalid amount")
    .gt(0, "Amount must be greater than NGN 0.00")
});
