<template>
  <div class="scroll-bar-box">
    <ul class="ul-title-box" :style="{left:left+'px'}" @touchstart="touchStart">
      <li v-for="(title,position) in titles">{{title}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'ScrollBar',
    data() {
      return {
        titles: ['推荐', '视频', '热点', '社会', '娱乐', '军事', '科技', '体育', '财经', '国际', '时尚'],
        left: 0
      }
    },
    methods: {
      touchStart(ev) {
        let startX = ev.touches[0].clientX;
        let x=startX;
        let _vue = this;
        let minLeft = document.documentElement.clientWidth - ev.target.parentNode.offsetWidth;
        document.ontouchmove = function (ev) {
          let oEvent = ev || event;
          let moveX = oEvent.touches[0].clientX;
          let dx = moveX - startX;
          if (_vue.left > 0 && dx > 0) {
            dx = dx / (_vue.left / 4);
          } else if (_vue.left < minLeft && dx < 0) {
            dx = dx / (minLeft - _vue.left) * 4;
          }
          _vue.left += dx;
          startX = moveX;
        }
        document.ontouchend = function (ev) {
          var oEvent = ev || event;
          var oritaition =  oEvent.changedTouches[0].clientX - x;
          if (_vue.left > 0) {
            _vue.move(0,15);
          } else if (_vue.left < minLeft) {
            _vue.move(minLeft,15);
          }else {
            let targe=0;
            if (oritaition>0){
              targe=_vue.left+30;
              targe=targe>0?0:targe;
            }else {
              targe=_vue.left-30;
              targe=targe<minLeft?minLeft:targe;
            }
            _vue.move(targe,5);
          }

          document.ontouchmove = null;
          document.ontouchend = null;
        }
      },
      move(targe,v) {
        let speed = 0;
        if (targe > this.left) {
          speed = v;
        } else {
          speed = -v;
        }
        let time = setInterval(() => {
          console.log(this.left)
          if ((speed < 0 && targe > this.left) || (speed > 0 && targe < this.left)) {
            clearInterval(time)
          } else {
            if (speed > 0) {
              speed--;
              speed = speed === 0 ? 1 : speed;
            } else {
              speed++;
              speed = speed === 0 ? -1 : speed;
            }
            this.left += speed;
          }
        }, 30)
      }
    }
  }
</script>
<style scoped>
  .scroll-bar-box {
    overflow: hidden;
    position: relative;
    top: 0px;
    left: 0px;
    width: 7.5rem;
    height: 0.8rem;
    background-color: #ffffff;
  }

  .ul-title-box {
    height: 0.8rem;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .ul-title-box li {
    width: 1.4rem;
    height: 0.8rem;
    background-color: #42b983;
    border: none;
    text-align: center;
    line-height: 0.8rem;
    list-style-type: none;
  }
</style>
