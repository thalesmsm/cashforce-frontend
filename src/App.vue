<template>
  <div class="d-flex justify-content-between w-100 h-100">
    <nav class="d-flex flex-column" style="width: 18%">
      <a href="https://cashforce.com.br">
        <img
          src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg"
          alt="Cashforce logo"
          class="px-3"
          />
      </a>
      <button class="nf-button py-3 px-3"><i class="fa"></i> Notas fiscais</button>
    </nav>
    <section class="d-flex flex-column p-5" style="width: 82%">
      <div class="text-start">
        <h1 class="fs-3"><i class="fa"></i> Notas fiscais</h1>
        <h2 class="fs-6">Visualize as notas fiscais que você tem.</h2>
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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');

#app {
  font-family: DM Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nf-button {
  background-color: transparent;
  border-color: #00AD8C;
  border-width: 0 0 0 4px;
  color: #00AD8C;
  padding-left: 10px;
  text-align: start;
}
.nf-button:hover {
  background-color: #f5f7fa;
}

nav {
  background-color: #FBFDFE;
  box-shadow: inset -10px 0px 10px #f5f7fa;
  height: 100vh;
  text-align: start;
}

nav a img {
  height: 30px;
  margin: 30px 0  30px 10px;
}

section {
  border-top: 1px solid #E0E2EB;
  margin-top: 60px;
}

section div h1 {
  color: #021B51;
  font-weight: 600;
  margin-bottom: 5px;
}

section div h2 {
  color: #727D94;
  margin-bottom: 1rem;
}
</style>
