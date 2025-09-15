<template>
  <section>
    <div class="section-padding py-20 space-y-10">
      <h2 class="text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
        Accusantium qui amet, iste maxime voluptatem earum animi corrupti.
      </h2>

      <div class="grid gap-2.5 md:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]">
        <div
          v-for="i in 6"
          :key="i"
          class="bg-muted border border-default rounded-[1rem] p-5 space-y-4"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis doloremque vero impedit dolorum inventore veniam
            molestias aut consequuntur, facilis, fugiat officia corporis dicta
            illum fuga illo facere voluptas, exercitationem ratione?
          </p>

          <NuxtSeparator/>

          <div class="flex items-center gap-2">
            <NuxtAvatar src="https://github.com/benjamincanac.png" size="lg" />
            <div>
              <p class="text-sm font-semibold">John Doe</p>
              <p class="text-xs text-muted">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
