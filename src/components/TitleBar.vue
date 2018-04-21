<template>
  <div class="title-bar">
    <div class="title-icon"></div>
    <p>每日一点</p>
    <div class="search"></div>
  </div>
</template>

<script>
  export default {
    name: "title-bar"
  }
</script>

<style scoped>
  .title-bar {
    width: 7.5rem;
    height: 1rem;
    background-color: brown;
    position: relative;
    display: flex;
    align-items: center;
  }
  .title-icon{
    width:0.6rem ;
    height: 0.6rem;
    background: url("../../static/images/icon.png") center no-repeat;
    background-size: contain;
    position: absolute;
    left: 0.3rem;
  }
  .title-bar p{
    color: #ffffff;
    position: absolute;
    left: 1.2rem;
    font-size: 0.4rem;
    font-family: KaiTi;
    font-weight: bold;
  }
  .search{
    width: 0.6rem;
    height: 0.6rem;
    background: url("../../static/images/seach.png") no-repeat center;
    background-size: contain;
    position: absolute;
    right: 0.3rem;
  }
</style>
