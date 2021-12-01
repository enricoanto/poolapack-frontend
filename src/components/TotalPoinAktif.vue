<template>
  <div id="total-poin-aktif">
    <div class="total-poin-aktif-text-box">
      <p class="total-poin-aktif-text-title">Total Poin Aktif</p>
      <p class="total-poin-aktif-text-total">Rp. {{total.toLocaleString('id-ID')}}</p>
    </div>
    <img alt="coin" class="icon-coin" width="72px" height="72px" src="../assets/coin.png" />
  </div>
</template>

<script>
export default {
  name: 'Total_Poin_Aktif',
  computed: {
    total () {
      let sum = 0
      const arr = this.$store.state.transactions
      arr.forEach(element => {
        if (element.status === 'debt') {
          sum -= element.value
        } else {
          sum += element.value
        }
      })
      return sum
    }
  }
}
</script>

<style>
#total-poin-aktif {
  background-color: white;
  width: 321px;
  height: 165px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
.icon-coin {
  align-self: flex-end;
  margin: 0px 18px 25px 0px;
}
.total-poin-aktif-text-title {
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: normal;
  color: #8c8ca1;
}
.total-poin-aktif-text-total {
  font-family: "Open Sans";
  font-size: 24px;
  font-weight: bold;
}
.total-poin-aktif-text-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 30px;
}
</style>
