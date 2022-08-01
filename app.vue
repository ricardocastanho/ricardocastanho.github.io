<template>
  <div class="container">
    <h1>Please wait! Portifolio in construction...</h1>
    <img src="/assets/gif/building.gif" alt="">
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ricardo Castanho',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'pt-br'
  },
  meta: [
    {
      name: 'description',
      content: 'Ricardo Castanho is a software developer with 2 years of experience, ready to change the future.',
    }
  ]
})
</script>

<style>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #00DA88;
  background: #15171E;
  margin: 0px;
}
</style>
