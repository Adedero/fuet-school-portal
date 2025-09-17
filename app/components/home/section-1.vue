<script setup lang="ts">
const config = useRuntimeConfig();

const cards = [
  {
    title: "World-Class Education",
    description:
      "Internationally recognized programs meeting global standards.",
    icon: "lucide:graduation-cap"
  },
  {
    title: "Research Excellence",
    description:
      "Leading research facilities and innovation centers for breakthroughs.",
    icon: "lucide:trophy"
  },
  {
    title: "World Recognition",
    description: "Internationally accredited programs with worldwide mobility.",
    icon: "lucide:globe"
  }
];
</script>

<template>
  <section>
    <div class="section-padding py-20 space-y-10">
      <div
        class="grid gap-10 md:grid-cols-2 text-center md:text-left max-w-[1000px] mx-auto items-center"
      >
        <div md:col-span-1>
          <NuxtImg
            src="/images/Federal-University-Ogoni.jpg"
            alt="Professor-Prince-Chinedu-Mmom-JP-DSSRS"
            class="w-full h-auto rounded-xl"
            placeholder
          />
        </div>
        <div class="md:col-span-1 flex gap-4 flex-col">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">
            About {{ config.public.schoolNameShort }}
          </h2>
          <p class="text-muted text-md">
            The {{ config.public.schoolNameLong }} ({{
              config.public.schoolNameShort
            }}), Ogoni, is one of Nigeria's newest federal universities,
            strategically established to drive innovation in environmental
            science, engineering, and sustainable development. Located in Rivers
            State, {{ config.public.schoolNameShort }} is recognized and
            accredited by the National Universities Commission (NUC) to provide
            world-class education, research, and community impact.
          </p>
        </div>
      </div>

      <div>
        <div class="grid gap-2.5 md:grid-cols-3">
          <div
            v-for="card in cards"
            :key="card.title"
            class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5"
          >
            <NuxtIcon :name="card.icon" size="4rem" />
            <p class="text-lg font-semibold text-primary">
              {{ card.title }}
            </p>

            <p class="text-muted text-sm">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
