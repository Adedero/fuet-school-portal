<template>
  <section>
    <div class="section-padding py-20 space-y-10">
      <div class="grid gap-10 md:grid-cols-2 text-center md:text-left max-w-[1000px] mx-auto items-center">
        <div md:col-span-1>
          <img src="/images/Federal-University-Ogoni.jpg" alt="Professor-Prince-Chinedu-Mmom-JP-DSSRS"
            class="w-full h-auto rounded-xl" />
        </div>
        <div class="md:col-span-1 flex gap-4 flex-col">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">
            About FUET
          </h2>
          <p class="text-muted text-md">
            The Federal University of Environment and Technology (FUET), Ogoni, is one of Nigeria’s newest federal
            universities, strategically established to drive innovation in environmental science, engineering, and
            sustainable development.
            Located in Rivers State, FUET is recognized and accredited by the National Universities Commission (NUC) to
            provide world-class education, research, and community impact.
          </p>
        </div>


      </div>

      <div>
        <div class="grid gap-2.5 md:grid-cols-3">
          <div class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5">
            <NuxtIcon name="lucide:graduation-cap" size="4rem" />
            <p class="text-lg font-semibold text-primary">
              World-Class Education
            </p>

            <p class="text-muted text-sm">
              Internationally recognized programs meeting global standards.
            </p>
          </div>

          <div class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5">
            <NuxtIcon name="lucide:trophy" size="4rem" />
            <p class="text-lg font-semibold text-primary">
              Research Excellence
            </p>

            <p class="text-muted text-sm">
              Leading research facilities and innovation centers for breakthroughs.
            </p>
          </div>

          <div class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5">
            <NuxtIcon name="lucide:globe" size="4rem" />
            <p class="text-lg font-semibold text-primary">
              World Recognition
            </p>

            <p class="text-muted text-sm">
              Internationally accredited programs with worldwide mobility.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
