<template>
  <div class="container">
    <div>
      <p>Hello</p>
      <p>I</p>
      <p>am</p>
      <p>Ricardo</p>
    </div>
    <div class="punchline">
      <p>FULLSTACK</p>
      <br />
      <p>DEVELOPER</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Ricardo Castanho",
  htmlAttrs: {
    lang: "pt-br",
  },
  meta: [
    {
      name: "description",
      content:
        "Ricardo Castanho is a software developer with 2 years of experience, ready to change the future.",
    },
  ],
});
</script>

<style>
body {
  background: #ececed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  background: #f2f2f2;
  color: #ff4a4a;
  font-size: 42px;
  line-height: 74px;
  font-weight: 700;
  margin: 0 5px 24px;
  float: left;
  padding: 10px;
  margin: 0 5px 24px;
  font-family: "Libre Baskerville", serif;
}

.punchline p {
  background: #ff4a4a;
  color: #f2f2f2;
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

a {
  color: #adadad;
  font-size: 25px;
  text-decoration: none;
  float: right;
  font-family: "Libre Baskerville", serif;
  line-height: 4;
}

a:hover {
  color: #ff4a4a;
  text-decoration: none;
}
</style>
