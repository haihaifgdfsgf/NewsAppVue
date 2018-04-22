<template>
    <div class="item-box">
      <div class="text-info">
        <p>{{newItem.title}}</p>
        <p>{{newItem.date}}</p>
        <p>来源:{{newItem.author_name}}</p>
      </div>
      <div class="image" :style="{background:'url('+newItem.thumbnail_pic_s+') center',backgroundSize:'contain'}"></div>
    </div>
</template>

<script>
    export default {
        name: "news-item",
      data(){
          return{

          }
      },
      props:{
        newItem:{
          type:Object,
          required:true
        }
      },
    }
</script>

<style scoped>
.item-box{
  width: 6.9rem;
  height: 1.6rem;
  background-color: #ffffff;
  padding: 0.3rem;
}
  .text-info{
    width: 5.1rem;
    height: 100%;
    background-color: #fff;
    float: left;
    position: relative;
  }
  .text-info p:nth-of-type(1){
    color: #333333;
    font-size: 0.32rem;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 4.8rem;
    text-align: left;
  }
.text-info p:nth-of-type(2){
  color: #888888;
  font-size: 0.28rem;
  position: absolute;
  left: 0px;
  bottom: 0px;
  text-align: left;
}
.text-info p:nth-of-type(3){
  color: #888888;
  font-size: 0.28rem;
  position: absolute;
  right: 0.3rem;
  bottom: 0px;
  text-align: left;
}

  .image{
    float: left;
    width: 1.8rem;
    height: 1.2rem;
    background-color: brown;
    margin-top: 0.15rem;
  }
</style>
