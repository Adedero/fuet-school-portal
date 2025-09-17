<script setup lang="ts">
const skills = [
  {
    title: "Undergraduates",
    links:
      ["Undergraduate Admission", "Faculties & Departments", "Other Information"]
  },
  {
    title: "Postgraduate",
    links:
      ["Postgraduate Admission", "Programs Offered", "Postgraduate Portal"]
  },
  {
    title: "Pre-Degree",
    links:
      ["Basic Studies", "Pre-Degree Certificate", "Other Relevant Links"]
  },

];
</script>

<template>
  <section class="bg-slate-950">
    <div class="section-padding py-20 space-y-10">

      <div class="grid gap-10 md:grid-cols-3 text-center md:text-left">
        <div class="md:col-span-2 text-white">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Academics and Programs
          </h2>
        </div>
      </div>

      <!-- <div class=""> -->
      <ul class="space-y-5 grid gap-10 lg:grid-cols-3 ">
        <li v-for="(skill) in skills" :key="skill.title" class="space-y-2 border-1 p-8">
          <div class="font-mono text-lg font-semibold flex items-baseline gap-2">

            <p class="text-white">{{ skill.title }}</p>
          </div>
          <ul :key="skill.title" class="space-y-2">
            <li v-for="(link, linkIndex) in skill.links" :key="linkIndex">
              <NuxtLink 
                :to="'/'"
                class="text-primary-500 hover:underline pl-4">
                {{ link }}
              </NuxtLink>
            </li>
          </ul>
          <!-- <p class="text-sm text-dimmed">{{ skill.description }}</p> -->
        </li>
      </ul>


      <!-- </div> -->
    </div>
  </section>
</template>
