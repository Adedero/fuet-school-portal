<script setup lang="ts">
const skills = [
  {
    title: "Lorem Ipsum",
    description:
      "Incidunt quis ipsa fugiat voluptates corporis eos ut dolorum explicabo doloremque, quidem commodi temporibus quaerat."
  },
  {
    title: "Dolor sit ammet",
    description:
      "laudantium exercitationem? Quae inventore error distinctioquas, tempore quod saepe quia."
  },
  {
    title: "Fugiat tempus sunt",
    description:
      "Incidunt quis ipsa fugiat voluptates corporis eos ut dolorum explicabo doloremque, quidem commodi temporibus quaerat."
  },
  {
    title: "Amet pariatur",
    description:
      "laudantium exercitationem? Quae inventore error distinctioquas, tempore quod saepe quia."
  }
];
</script>

<template>
  <section class="bg-slate-950">
    <div class="section-padding py-20 space-y-10">
      <div class="grid gap-10 md:grid-cols-3 text-center md:text-left">
        <div class="md:col-span-2 text-white">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>

        <div>
          <p class="text-dimmed text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            pariatur recusandae quidem nostrum, animi eius vero, nisi est
            doloribus laudantium exercitationem? Quae inventore error distinctio
            quas, tempore quod saepe quia.
          </p>
        </div>
      </div>

      <div class="grid gap-10 lg:grid-cols-2">
        <ul class="space-y-5">
          <li
            v-for="(skill, index) in skills"
            :key="skill.title"
            class="space-y-2"
          >
            <div
              class="font-mono text-lg font-semibold flex items-baseline gap-2"
            >
              <span class="text-primary-500 text-sm"> 0{{ index + 1 }} </span>
              <p class="text-white">{{ skill.title }}</p>
            </div>

            <p class="text-sm text-dimmed">{{ skill.description }}</p>
          </li>
        </ul>

        <div>
          <NuxtImg
            src="https://s29814.pcdn.co/wp-content/uploads/2022/12/shutterstock_1847661151.jpg.optimal.jpg"
            placeholder
            class="rounded"
          />
        </div>
      </div>
    </div>
  </section>
</template>
