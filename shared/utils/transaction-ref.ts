import { customAlphabet } from "nanoid";

export const generateTransactionRef = () => {
  const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const timestamp = Date.now();
  return `TXN-${timestamp}-${nanoid(12)}`
};
