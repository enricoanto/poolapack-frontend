<template>
  <div id="header" class="header">
    <img alt="poolapack-logo" class="poolapack-logo" src="../assets/poolapack-logo.png" />
    <div class="admin-box">
      <p class="admin-text">Admin</p>
      <img alt="icon_admin" src="../assets/icon_admin.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding-inline: 30px;
  height: 80px;
}
.poolapack-logo {
  height: 54px;
}
.admin-box {
  display: flex;
}
.admin-text {
  font-family: "Poppins";
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  margin-right: 9px;
}
</style>
