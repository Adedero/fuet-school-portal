<script setup lang="ts">
import type { ApplicationData } from "./index.vue";

interface Props {
  data: ApplicationData;
}

const { data } = defineProps<Props>();
</script>

<template>
  <div class="mt-10 space-y-10">
    <h3 class="text-xl font-bold">Section I: Personal Information</h3>
    <div class="justify-end flex">
      <div class="bg-muted w-44 h-44">
        <img
          v-if="data.passportUrl"
          :src="data.passportUrl"
          class="w-full h-full object-cover"
        />
        <div v-else class="fluid flex-center">
          <p class="text-sm text-muted font-semibold">No passport</p>
        </div>
      </div>
    </div>

    <section class="space-y-16">
      <div>
        <h3 class="text-muted font-semibold">BIO DATA</h3>

        <NuxtSeparator class="mt-2 mb-5" />

        <div>
          <div class="mt-5 w-full">
            <ul class="grid grid-cols-2 gap-1.5">
              <li>
                First Name: <b class="uppercase">{{ data.firstName }}</b>
              </li>
              <li>
                Middle Name: <b class="uppercase">{{ data.middleName }}</b>
              </li>
              <li>
                Other Names: <b class="uppercase">{{ data.otherNames }}</b>
              </li>
              <li>
                Last Name: <b class="uppercase">{{ data.lastName }}</b>
              </li>
              <li>
                D.O.B:
                <b class="uppercase">
                  {{ data.birthDay }}
                  {{ data.birthMonth }},
                  {{ data.birthYear }}
                </b>
              </li>
              <li>
                Gender: <b class="uppercase">{{ data.gender }}</b>
              </li>
              <li class="col-span-2 print:col-span-1">
                Email: <b class="uppercase">{{ data.user.email }}</b>
              </li>
              <li>
                Phone: <b class="uppercase">{{ data.phoneNumber }}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-muted font-semibold">IDENTIFICATION</h3>

        <NuxtSeparator class="mt-2 mb-5" />

        <ul class="grid grid-cols-2 gap-1.5 w-full">
          <li>
            Nationality: <b class="uppercase">{{ data.nationality }}</b>
          </li>
          <li>
            State of Origin: <b class="uppercase">{{ data.stateOfOrigin }}</b>
          </li>
          <li>
            L.G.A: <b class="uppercase">{{ data.lga }}</b>
          </li>
          <li>
            NIN/ID number: <b>{{ data.nin }}</b>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
