<template>
  <div class="d-flex justify-content-between">
    <Navcomp />
    <MobileNav class="d-lg-none"/>
    <section class="d-flex flex-column p-5">
      <div class="text-start">
        <h1 class="fs-3"><i class="fa"></i> Notas fiscais</h1>
        <h6 class="">Visualize as notas fiscais que você tem.</h6>
      </div>
      <NfsTable class="d-none d-lg-block"/>
      <MobileComponent class="d-lg-none"/>
    </section>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import MobileComponent from './components/MobileNfsTable.vue';
import NfsTable from './components/NfsTable';
import MobileNav from './components/MobileNav.vue';
import Navcomp from './components/NavComp.vue';

export default {
	name: 'App',
	components: {
		NfsTable,
		MobileComponent,
		MobileNav,
		Navcomp
	}
};
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

  section {
    border-top: 1px solid #E0E2EB;
    margin-top: 60px;
    width: 82%;
  }

  section div h1 {
    color: #021B51;
    font-weight: 600;
    margin-bottom: 5px;
  }

  section div h6 {
    color: #727D94;
    margin-bottom: 1rem;
  }

  @media (max-width: 990px)
  {
    section {
      width: 100%;
    }
  }
</style>
