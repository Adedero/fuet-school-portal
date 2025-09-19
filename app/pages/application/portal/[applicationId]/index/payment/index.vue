<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const authStore = useAuthStore();
const { checkout } = useAdmissionFeePayment();
const toast = useToast();
const appSettings = useTemplateRef("app-settings");
const { applicationId = "" } = useRouteParams();

const initiatePayment = async () => {
  try {
    const email = authStore.user.value?.email;
    if (!email) {
      throw new Error("Log in session expired. Please, log in to conitnue");
    }
    const settings = await appSettings.value?.getSettings();
    if (!settings?.value) {
      throw new Error(
        "Something happened and we're working on it. Please, try again later"
      );
    }
    const amount = (settings.value.admissionFee ?? 0) * 100;

    const checkoutResponse = await checkout({
      customerEmail: email,
      amount: 1000
    });

    const { transactionStatus, response } = await $fetch(
      `/api/users/applicant/applications/${applicationId}/process-admission-fee`,
      {
        method: "POST",
        body: {
          merchantCode: config.public.interswitch.merchantCode,
          transactionRef: checkoutResponse.txnref,
          amount: checkoutResponse.amount
        }
      }
    );
    if (transactionStatus === "failed") {
      throw new Error(`Transaction failed with response: ${response}`);
    }
    toast.add({
      color: transactionStatus === "successful" ? "success" : "warning",
      title: transactionStatus === "successful" ? "Success" : "Pending",
      description: `Transaction is ${transactionStatus}: ${response}`
    });
  } catch (error) {
    toast.add({
      color: "error",
      title: "Error",
      description: normalizeException(error).message
    });
  }
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

            <AppSettings ref="app-settings">
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
