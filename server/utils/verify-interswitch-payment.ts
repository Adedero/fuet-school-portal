interface Options {
  merchantCode: string;
  amount: number;
  transactionRef: string;
}

interface InterswitchPaymentVerificationResponse {
  Amount: number;
  CardNumber: string;
  MerchantReference: string;
  PaymentReference: string;
  RetrievalReferenceNumber: string;
  SplitAccounts: string[];
  TransactionDate: string;
  ResponseCode: string;
  ResponseDescription: string;
  AccountNumber: string;
  Status: TransactionStatus;
}

type TransactionStatus = "successful" | "pending" | "cancelled" | "failed";

export default async function verifyInterswitchPayment(options: Options) {
  const { merchantCode, amount, transactionRef } = options;

  const api =
    "https://qa.interswitchng.com/collections/api/v1/gettransaction.json";
  const query = `merchantcode=${merchantCode}&transactionreference=${transactionRef}&amount=${amount}`;

  const response = await $fetch<InterswitchPaymentVerificationResponse>(
    `${api}?${query}`
  );

  console.log(response)

  let Status: TransactionStatus;

  switch (response.ResponseCode) {
    case "10":
    case "11":
      Status = "successful";
      break;
    case "00":
      Status = "pending";
      break;
    case "Z6":
      Status = "cancelled";
      break;
    default:
      Status = "failed";
  }

  return {
    ...response,
    Status
  };
}
