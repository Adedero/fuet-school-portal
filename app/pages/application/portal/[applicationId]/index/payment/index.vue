<script setup lang="ts">
useScript("https://newwebpay.qa.interswitchng.com/inline-checkout.js", {
  tagPosition: "bodyClose"
});

const initiatePayment = () => {
  if (!window.webpayCheckout) return;

  const request = {
    merchant_code: "MX104269",
    pay_item_id: "MX104269_MERCHANT_APP",
    txn_ref: "1ytjOnt8eASgS8+WSLZUlSn8FtPW/qpL4mg2iYIdc9s=",
    site_redirect_url: "https://google.com/",
    amount: 10000,
    currency: 566,
    onComplete: () => {},
    mode: "LIVE"
  };

  window.webpayCheckout(request);
};
</script>

<template>
  <div class="w-full">
    <div class="lg:max-w-[70%] mx-auto">
      <header>
        <h1 class="text-xl font-bold">Admission Fees Payment</h1>
      </header>

      <section class="my-5">
        <div>
          <div class="flex items-baseline gap-2.5 justify-between">
            <p>Total</p>

            <AppSettings>
              <template #default="{ data }">
                <p class="text-2xl font-semibold">
                  ₦ {{ data.admissionFee?.toLocaleString() }}
                </p>
              </template>
            </AppSettings>
          </div>
        </div>

        <NuxtSeparator class="mt-1 mb-5" />

        <div>
          <div class="flex items-end gap-2.5 justify-between">
            <div>
              <p class="font-semibold">Admission Fees</p>
              <p class="text-sm text-muted">
                Paid on September 24, 2025 06:50 a.m | Unpaid
              </p>
            </div>

            <div>
              <NuxtButton
                label="Download Receipt"
                icon="lucide:download"
                color="neutral"
                variant="outline"
                class="hidden"
              />

              <NuxtButton
                label="Pay Now"
                icon="lucide-credit-card"
                loading-auto
                @click="initiatePayment"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
