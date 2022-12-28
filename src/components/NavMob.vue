<template>
  <div>
    <nav class="nav-mob">
      <a href="https://cashforce.com.br">
        <img
          src="
          https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg
          "
          alt="Cashforce logo"
          class="px-3"
          />
      </a>
      <button class="nf-button-mob"><i class="fa"></i> Notas fiscais</button>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'NavMob',
  }
</script>

<style>
  .nav-mob {
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background-color: #FBFDFE;
    box-shadow: inset 0px -10px 10px #f5f7fa;
  }

  .nf-button-mob {
    background-color: transparent;
    border-color: #00AD8C;
    border-width: 0 4px 0 0;
    color: #00AD8C;
    padding-left: 10px;
    text-align: start;
  }
  .nf-button:hover {
    background-color: #f5f7fa;
  }
</style>
