<script setup lang="ts">
const { applicationId = "" } = useRouteParams();
</script>

<template>
  <div>
    <header>
      <h1 class="text-xl font-bold">FUET Admission Application</h1>
      <p class="text-sm muted">
        Federal University of Environment and Technology
      </p>
    </header>

    <div class="mt-5 space-y-10">
      <section>
        <h2 class="font-semibold">Overview</h2>

        <div>
          The Federal University of Environment and Technology (FUET) is a
          pioneering institution dedicated to advancing education, research, and
          innovation in environmental science and technology. Established with a
          vision to address global environmental challenges, FUET offers a range
          of undergraduate and postgraduate programs designed to equip students
          with the knowledge and skills needed to make a positive impact on the
          world.
        </div>
      </section>

      <section>
        <h2 class="font-semibold">Requirements</h2>

        <div>
          To apply for admission to FUET, please ensure you meet the following
          requirements:
        </div>

        <div class="mt-5">
          <!-- <p>
            <span class="font-medium">Note:</span> All documents must be
            certified true copies by a Commissioner of Oaths or a Notary Public.
          </p> -->

          <ul class="mt-2.5 list-disc list-inside">
            <li>
              O'Level results (WAEC/NECO) with 5 credits including English and
              Mathematics
            </li>

            <li>Post-UTME registration slip</li>
            <li>Birth certificate or affidavit of age declaration</li>
            <li>Local Government Identification letter</li>
            <li>Payment receipt for admission form</li>
          </ul>
        </div>
      </section>

      <div>
        <p>I understand, and wish to continue.</p>
        <div>
          <NuxtButton
            :to="`/application/portal/${applicationId}/personal-info`"
            label="Continue"
            trailing-icon="lucide:circle-arrow-right"
          />
        </div>
      </div>
    </div>
  </div>
</template>
