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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed,
          ex totam repellendus nostrum numquam iste neque facilis iusto
          inventore vero eos impedit laborum consequuntur dicta quaerat
          temporibus esse officia! Ipsum obcaecati cum animi omnis corrupti esse
          reiciendis at blanditiis natus aliquam! Enim ducimus voluptas fugiat
          nam consectetur, commodi magni repellendus praesentium! Voluptate,
          fugiat? Excepturi at consequuntur consectetur iste aspernatur.
        </div>
      </section>

      <section>
        <h2 class="font-semibold">Requirements</h2>

        <div>
          Quam nulla, recusandae dolorum adipisci, labore consequuntur dolor
          corrupti sequi eveniet autem architecto cupiditate veniam dicta vel
          similique incidunt id molestiae provident?
        </div>

        <div class="mt-5">
          <p>
            Please, ensure you have the following documents before applying.
          </p>

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
