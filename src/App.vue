<template>
  <div class="d-flex">
    <nav class="d-flex flex-column">
      <img src="#" alt="Cashforce logo">
      <button class="mx-2 border-0 border-start border-4 bg-transparent"><i class="fa"></i> Notas fiscais</button>
    </nav>
    <section class="d-flex flex-column">
      <div class="text-start">
        <h1><i class="fa"></i> Notas fiscais</h1>
        <h2>Visualize as notas fiscais que você tem.</h2>
      </div>
      <NfsTable />
    </section>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import NfsTable from "./components/NfsTable";
export default {
  name: 'App',
  components: {
    NfsTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
