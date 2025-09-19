<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import z from "zod";

const toast = useToast();

const { applicationId } = defineProps<{
  applicationId: string;
}>();

const schema = z.object({
  amount: z.number().gt(0),
  transactionRef: z.string().nonempty(),
  paymentRef: z.string().nonempty(),
  regNumber: z.string().nonempty(),
  studentClassName: z.string().nonempty(),
  departmentName: z.string().nonempty()
});

type Schema = z.infer<typeof schema>;

const state = reactive({
  amount: 0,
  transactionRef: "",
  paymentRef: "",
  regNumber: "",
  studentClassName: "",
  departmentName: ""
});

const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
  try {
    const { message } = await $fetch(
      `/api/users/admin/applications/${applicationId}/create-payment-and-student`,
      {
        method: "POST",
        body: event.data
      }
    );
    toast.add({
      color: "success",
      title: "Success",
      description: message
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
  <div>
    <NuxtModal title="Create Student Account">
      <slot />

      <template #body>
        <div>
          <NuxtForm :state :schema @submit="handleSubmit">
            <div class="mb-10">
              <p class="mb-2 text-muted text-sm font-semibold">
                Admission Fee Payment
              </p>

              <div class="grid gap-2.5 md:grid-cols-2">
                <NuxtFormField name="amount" label="Amount" required>
                  <NuxtInputNumber
                    v-model="state.amount"
                    orientation="vertical"
                    class="w-full"
                  />
                </NuxtFormField>

                <NuxtFormField
                  name="transactionRef"
                  label="Transaction Ref"
                  required
                >
                  <NuxtInput v-model="state.transactionRef" class="w-full" />
                </NuxtFormField>

                <NuxtFormField name="paymentRef" label="Payment Ref" required>
                  <NuxtInput v-model="state.paymentRef" class="w-full" />
                </NuxtFormField>
              </div>
            </div>

            <div class="mb-5">
              <p class="mb-2 text-muted text-sm font-semibold">Student Info</p>

              <div class="grid gap-2.5 md:grid-cols-2">
                <NuxtFormField name="regNumber" label="Reg. Number" required>
                  <NuxtInput v-model="state.regNumber" class="w-full" />
                </NuxtFormField>

                <NuxtFormField
                  name="studentClassName"
                  label="Class Name"
                  required
                >
                  <NuxtInput v-model="state.studentClassName" class="w-full" />
                </NuxtFormField>

                <NuxtFormField
                  name="departmentName"
                  label="Department"
                  required
                >
                  <NuxtInput v-model="state.departmentName" class="w-full" />
                </NuxtFormField>
              </div>
            </div>

            <div>
              <NuxtButton type="submit" label="Submit" />
            </div>
          </NuxtForm>
        </div>
      </template>
    </NuxtModal>
  </div>
</template>
