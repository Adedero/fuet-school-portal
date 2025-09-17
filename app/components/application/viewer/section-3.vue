<script setup lang="ts">
import type { ApplicationData } from "./index.vue";

interface Props {
  data: ApplicationData;
}

const { data } = defineProps<Props>();
</script>

<template>
  <div class="print:mt-10 space-y-10">
    <h3 class="text-xl font-bold">Section III: Academic Information</h3>

    <section class="space-y-16">
      <div>
        <h3 class="text-muted font-semibold">COURSE CHOICE</h3>

        <NuxtSeparator class="mt-2 mb-5" />

        <div>
          <div class="mt-5 w-full">
            <ul class="grid gap-1.5">
              <li>
                Chosen Course: <b class="uppercase">{{ data.course }}</b>
              </li>
              <li>
                Degree: <b class="uppercase">{{ data.degreeType }}</b>
              </li>
              <li>
                JAMB Registration Number:
                <b class="uppercase">{{ data.jambRegNumber }}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-muted font-semibold">SECONDARY INSTITUTION</h3>

        <NuxtSeparator class="mt-2 mb-5" />

        <div>
          <div class="mt-5 w-full">
            <ul class="grid grid-cols-2 gap-1.5">
              <li class="col-span-2">
                Name of Secondary School:
                <b class="uppercase">{{ data.secondarySchoolName }}</b>
              </li>
              <li class="col-span-2">
                Address of Secondary School:
                <b class="uppercase">{{ data.secondarySchoolAddress }}</b>
              </li>
              <li>
                Month Graduated:
                <b class="uppercase">{{
                  data.secondarySchoolGraduationMonth
                }}</b>
              </li>
              <li>
                Year Graduated:
                <b class="uppercase">{{
                  data.secondarySchoolGraduationYear
                }}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
