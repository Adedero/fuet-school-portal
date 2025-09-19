interface Options {
  amount: number;
  currencyISOCode?: number;
  customerEmail: string;
  redirectUrl?: string;
}

interface InterswitchPaymentResponse {
  amount: number;
  apprAmt: number;
  bpResp?: string;
  bpTrxnRef?: string;
  cardNum: string;
  desc: string;
  payRef: string;
  rechPin?: number;
  res: string;
  retRef: string;
  txnref: string;
}

export default function useAdmissionFeePayment() {
  const config = useRuntimeConfig();

  useScript("https://newwebpay.interswitchng.com/inline-checkout.js", {
    tagPosition: "bodyClose"
  });

  function checkout(options: Options): Promise<InterswitchPaymentResponse> {
    const {
      amount,
      currencyISOCode = 566,
      customerEmail,
      redirectUrl = `${window.location.origin}${window.location.pathname}`
    } = options;

    return new Promise<InterswitchPaymentResponse>((resolve, reject) => {
      const request = {
        pay_item_id: config.public.interswitch.admissionFeeItemId,
        pay_item_name: config.public.interswitch.admissionFeeItemName,
        txn_ref: generateTransactionRef(),
        amount: amount,
        currency: currencyISOCode,
        cust_email: customerEmail,
        mode: "TEST",
        merchant_code: config.public.interswitch.merchantCode,
        site_redirect_url: redirectUrl,
        onComplete: (response: InterswitchPaymentResponse) => {
          resolve(response);
        }
      };

      if (!window.webpayCheckout) {
        reject(new Error("Interswitch WebPay Checkout is not enabled."));
      }

      try {
        window.webpayCheckout(request);
      } catch (error) {
        reject(error);
      }
    });
  }

  return {
    checkout
  };
}
