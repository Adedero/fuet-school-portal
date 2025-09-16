<script setup lang="ts">
import type { ApplicationData } from "./index.vue";

interface Props {
  data: ApplicationData;
}

const { data } = defineProps<Props>();
</script>

<template>
  <div class="print:mt-10 space-y-10">
    <h3 class="text-xl font-bold">Section II: Family Information</h3>

    <section class="space-y-16">
      <div>
        <h3 class="text-muted font-semibold">PARENT 1 DATA</h3>

        <NuxtSeparator class="mt-2 mb-5" />

        <div>
          <div class="mt-5 w-full">
            <ul class="grid grid-cols-2 gap-1.5">
              <li>
                Full Name: <b class="uppercase">{{ data.firstParentName }}</b>
              </li>
              <li>
                Address: <b class="uppercase">{{ data.firstParentAddress }}</b>
              </li>
              <li>
                Status: <b class="uppercase">{{ data.firstParentStatus }}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-muted font-semibold">PARENT 2 DATA</h3>

        <NuxtSeparator class="mt-2 mb-5" />

        <div>
          <div class="mt-5 w-full">
            <ul class="grid grid-cols-2 gap-1.5">
              <li>
                Full Name: <b class="uppercase">{{ data.secondParentName }}</b>
              </li>
              <li>
                Address: <b class="uppercase">{{ data.secondParentAddress }}</b>
              </li>
              <li>
                Status: <b class="uppercase">{{ data.secondParentStatus }}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-muted font-semibold">NEXT OF KIN</h3>

        <NuxtSeparator class="mt-2 mb-5" />

        <div>
          <div class="mt-5 w-full">
            <ul class="grid grid-cols-2 gap-1.5">
              <li>
                Full Name: <b class="uppercase">{{ data.nextOfKinName }}</b>
              </li>
              <li>
                Address: <b class="uppercase">{{ data.nextOfKinAddress }}</b>
              </li>
              <li>
                Phone Number:
                <b class="uppercase">{{ data.nextOfKinPhoneNumber }}</b>
              </li>
              <li>
                Relationship:
                <b class="uppercase">{{ data.nextOfKinRelationship }}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
