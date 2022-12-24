<template>
  <div v-if="errored">
    <p>Impossível carregar os dados</p>
  </div>
  <div v-else>
    <p v-if="loading">Carregando...</p>
    <table v-if="info">
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="item in info" v-bind:key="item.nNf">
            <td> {{ item.nNf }} </td>
            <td> {{ item.buyer.name }} </td>
            <td> {{ item.provider.name }} </td>
            <td> {{ item.emissionDate.slice(0, 10).split('-').reverse().join('/') }} </td>
            <td> {{ item.value }} </td>
            <td> {{ item.orderStatusBuyer }} </td>
            <td>
              <button
                type="button"
              >
                Dados do cedente
              </button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "NfsTable",
  data () {
    return {
      info: undefined,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('http://localhost:3001/orders')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>