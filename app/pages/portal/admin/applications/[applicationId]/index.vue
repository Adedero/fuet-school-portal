<script setup lang="ts">
import type { BadgeProps } from "@nuxt/ui";

definePageMeta({
  layout: "portal-admin"
});

const toast = useToast();
const { confirmAsync } = useConfirm();

const open = ref<boolean>(false);

const { applicationId = "" } = useRouteParams();
const {
  data: application,
  error,
  refresh
} = await useFetch(`/api/users/admin/applications/${applicationId}`);

const viewer = useTemplateRef("viewer");

const colors = {
  pending: "secondary",
  submitted: "warning",
  accepted: "success",
  rejected: "error"
};

const handleDelete = async () => {
  const confirm = async () => {
    return await confirmAsync({
      title: "Delete Application",
      description:
        "Are you sure you want to delete this application? This action cannot be undone",
      acceptProps: {
        color: "error",
        label: "Delete"
      }
    });
  };

  if (!(await confirm())) {
    return;
  }

  try {
    const { message } = await $fetch(
      `/api/users/admin/applications/${applicationId}`,
      {
        method: "DELETE"
      }
    );
    navigateTo("/portal/admin/applications");

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
  <div class="p-5">
    <header>
      <div class="flex items-center gap-5 justify-between">
        <div class="flex items-center gap-2">
          <h1 class="text-lg font-bold">
            Application <b>{{ application?.applicationNumber }}</b>
          </h1>
          <NuxtBadge
            v-if="application"
            :label="application.status"
            :color="colors[application.status] as BadgeProps['color']"
            variant="subtle"
          />
        </div>

        <div class="mb-5 flex items-center justify-end gap-2.5">
          <NuxtButton
            label="Print"
            icon="lucide:printer"
            color="neutral"
            variant="outline"
            @click="viewer?.print"
          />

          <NuxtPopover v-if="application">
            <NuxtButton
              icon="lucide:ellipsis-vertical"
              color="neutral"
              variant="outline"
            />
            <template #content>
              <div class="p-5">
                <div class="w-40 grid gap-1">
                  <ApplicationAccepter
                    v-if="
                      application.status === 'submitted' ||
                      application.status === 'rejected'
                    "
                    :application-id="applicationId"
                    @done="() => refresh()"
                  >
                    <NuxtButton
                      label="Accept"
                      color="neutral"
                      variant="ghost"
                      trailing-icon="lucide:circle-check"
                      block
                    />
                  </ApplicationAccepter>

                  <ApplicationRejecter
                    v-if="
                      application.status === 'submitted' ||
                      application.status === 'accepted'
                    "
                    :application-id="applicationId"
                    @done="() => refresh()"
                  >
                    <NuxtButton
                      label="Reject"
                      color="neutral"
                      variant="ghost"
                      trailing-icon="lucide:circle-x"
                      block
                    />
                  </ApplicationRejecter>

                  <NuxtSeparator />

                  <NuxtButton
                    label="Delete"
                    color="error"
                    variant="ghost"
                    trailing-icon="lucide:trash-2"
                    block
                    loading-auto
                    @click="handleDelete"
                  />
                </div>
              </div>
            </template>
          </NuxtPopover>
        </div>
      </div>
    </header>

    <section class="mt-5">
      <div v-if="error">
        <FetchErrorAlert
          :message="normalizeException(error).message"
          show-retry
          @retry="refresh"
        />
      </div>

      <div v-else-if="application">
        <div v-if="application.status === 'accepted'" class="mb-5">
          <div
            v-if="
              application.hasPaidAdmissionFee &&
              application.admissionFeePaymentId
            "
          >
            <NuxtAlert
              v-if="!application.student"
              title="Admission fee"
              description="Applicant has paid the admission fee"
              icon="lucide:info"
              color="success"
              variant="subtle"
              orientation="horizontal"
              :actions="[
                {
                  label: 'Approve',
                  icon: 'lucide:circle-check',
                  size: 'sm',
                  onClick: () => {
                    open = true;
                  }
                }
              ]"
            />

            <NuxtAlert
              v-else
              title="Admission fee"
              description="Applicant has paid the admission fee and has been approved as a student"
              icon="lucide:info"
              color="success"
              variant="subtle"
            />
          </div>
          <div v-else class="space-y-5">
            <NuxtAlert
              title="Admission Fee"
              description="Applicant has not paid the admission fee"
              icon="lucide:info"
              color="warning"
              variant="subtle"
            />

            <AdminStudentPaymentCreator :application-id="applicationId">
              <NuxtButton label="Manual Validation" />
            </AdminStudentPaymentCreator>
          </div>

          <AdminStudentsCreator v-model:open="open" :application />
        </div>

        <div>
          <ApplicationViewer ref="viewer" :application-id="application.id" />
        </div>
      </div>
    </section>
  </div>
</template>
