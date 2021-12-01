<template>
  <div id="riwayat-transaksi">
     <vuescroll>
      <p class="riwayat-transaksi-title">Riwayat Transaksi</p>
      <div class="transactions">
          <Transaction/>
      </div>
      </vuescroll>
  </div>
</template>

<script>
import Transaction from '../components/transaction'
export default {
  name: 'Riwayat_transaksi',
  components: {
    Transaction
  }
}
</script>

<style>
#riwayat-transaksi {
    height: 450px;
    width: 944px;
    background-color: white;
    border-radius: 10px;
}
.riwayat-transaksi-title {
    font-family: "Open Sans";
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
}
</style>
