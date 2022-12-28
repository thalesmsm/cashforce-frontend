<template>
  <div v-if="errored">
    <p>Desculpe! Impossível carregar os dados</p>
  </div>
  <div v-else>
    <p v-if="loading">Carregando...</p>
    <div
      v-if="info"
    >
      <div
        v-for="item in info" v-bind:key="item.id"
      >
        <ul
          class="tbody d-flex flex-column border rounded p-2"
          >
          <li class="th list-group-item" style="width: 100%;">NOTA FISCAL</li>
          <li class="td list-group-item text-start px-2 border rounded" style="width: 100%;"> {{ item.nNf }} </li>
          <li class="th list-group-item" style="width: 100%;">SACADO</li>
          <li class="td list-group-item text-start px-2 border rounded" style="width: 100%;"> {{ item.buyer.name }} </li>
          <li class="th list-group-item" style="width: 100%;">CEDENTE</li>
          <li class="td list-group-item text-start px-2 border rounded" style="width: 100%;"> {{ item.provider.name }} </li>
          <li class="th list-group-item" style="width: 100%;">EMISSÃO</li>
          <li class="td list-group-item text-start px-2 border rounded" style="width: 100%;"> {{ item.emissionDate.slice(0, 10).split('-').reverse().join('/') }} </li>
          <li class="th list-group-item" style="width: 100%;">VALOR</li>
          <li class="td list-group-item text-start px-2 border rounded" style="width: 100%; color: #00AD8C;"> {{
            Intl.NumberFormat('BRL', {style: 'currency', currency: 'BRL'})
            .format(Number(item.value))
          }} </li>
          <li class="th list-group-item" style="width: 100%;">STATUS</li>
          <li class="td list-group-item text-start px-2 border rounded" style="width: 100%; color: #00AD8C; text-transform: uppercase;"> {{ orderStatusBuyerArr[item.orderStatusBuyer] }} </li>
          <li class="td list-group-item" style="width: 100%;" >
            <button
              type="button"
              class="rounded-pill px-4 py-1 mt-2"
            >
              Dados do cedente
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
	name: "MobileComponent",
	data () {
		return {
			info: undefined,
			loading: true,
			errored: false,
			orderStatusBuyerArr: [
				"Pendente de confirmação",
				"Pedido confirmado",
				"Não reconhece o pedido",
				"Mercadoria não recebida",
				"Recebida com avaria",
				"Devolvida",
				"Recebida com devolução parcial",
				"Recebida e confirmada",
				"Pagamento Autorizado"
			],
		};
	},
	mounted() {
		axios
			.get("http://localhost:3001/orders")
			.then(response => {
				this.info = response.data;
			})
			.catch(error => {
				console.log(error);
				this.errored = true;
			})
			.finally(() => this.loading = false);
	}
};
</script>

<style>
.th {
  color: #A1A8B9;
}
</style>
