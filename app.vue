<template>
  <VitePwaManifest />

  <div
    class="h-screen flex flex-col justify-center items-center space-x-3 space-y-3">
    <div>
      <div class="flex flex-row space-x-1 my-1">
        <p
          class="font-lb text-lg lg:text-4xl bg-secondary hover:italic hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition">
          Hello
        </p>
        <p class="text-lg lg:text-4xl animate-wave">👋</p>
        <p
          class="font-lb text-lg lg:text-4xl bg-secondary hover:italic hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition">
          I
        </p>
        <p
          class="font-lb text-lg lg:text-4xl bg-secondary hover:italic hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition">
          am
        </p>
        <p
          class="font-lb text-lg lg:text-4xl bg-secondary hover:italic hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition">
          Ricardo
        </p>
      </div>
      <div class="flex flex-col space-y-1">
        <p
          class="font-lb text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-primary text-background px-1 py-2 hover:italic hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition">
          FULLSTACK
        </p>
        <p
          class="font-lb text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-primary text-background px-1 py-2 hover:italic hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition">
          ENGINEER
        </p>
      </div>
      <div class="flex flex-row space-x-5 items-end justify-end my-2">
        <a
          href="https://github.com/ricardocastanho"
          target="_blank"
          aria-label="GitHub">
          <Icon
            name="uil:github"
            class="text-5xl hover:-translate-x-2 hover:-translate-y-2 transition">
          </Icon>
        </a>
        <a
          href="https://linkedin.com/in/castanhoricardo"
          target="_blank"
          aria-label="Linkedin">
          <Icon
            name="uil:linkedin"
            class="text-5xl hover:-translate-x-2 hover:-translate-y-2 transition">
          </Icon>
        </a>
        <a
          href="mailto:ricardocastanho632@gmail.com"
          target="_blank"
          aria-label="Email">
          <Icon
            name="uil:mailbox"
            class="text-5xl hover:-translate-x-2 hover:-translate-y-2 transition">
          </Icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Ricardo Castanho - FullStack Engineer",
  htmlAttrs: {
    lang: "en-us",
  },
  meta: [
    {
      name: "description",
      content:
        "I've been a FullStack Software Engineer for 3 years and I'm ready to change the future.",
    },
  ],
});
</script>
