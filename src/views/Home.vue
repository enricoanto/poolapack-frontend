<template>
  <div id="home">
    <Header />
    <p class="home-title">poolpoint</p>
    <div class="home-content">
      <TotalPoinAktif/>
      <RiwayatTransaksi/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import TotalPoinAktif from '../components/TotalPoinAktif'
import RiwayatTransaksi from '../components/RiwayatTransaksi'
export default {
  name: 'Home',
  components: {
    Header,
    TotalPoinAktif,
    RiwayatTransaksi
  }
}
</script>
<style>
#home {
  background-color: #E5E5E5;
  height: 100%;
}
.home-title {
  font-family: "Open Sans";
  font-style: normal;
  font-size: 48px;
  font-weight: bold;
  margin: 32px 0px 20px 30px;
}
.home-content {
  display: flex;
  justify-content: space-between;
  margin-inline: 30px;

}
</style>
