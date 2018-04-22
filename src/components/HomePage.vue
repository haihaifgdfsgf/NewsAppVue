<template>
  <div>
    <TitleBar class="home-title-bar"></TitleBar>
    <ScrollBar class="home-scroll-bar"></ScrollBar>
    <div class="home-news-item">
      <NewsItem v-for="item in news" :newItem="item"></NewsItem>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import TitleBar from './TitleBar.vue'
  import ScrollBar from './ScrollBar.vue'
  import NewsItem from './NewsItem.vue'

  export default {
    components: {
      TitleBar,
      ScrollBar,
      NewsItem,
    },
    name: "home-page",
    data() {
      return {
        news: []
      }
    },
    mounted() {
      axios.get('/toutiao/index', {
        params: {
          type: 'top',
          key: 'e09270a2478ac27737bc56b662639e8c'
        }
      })
        .then(resp => {
          let result = resp.data.result;
          this.news = result.data;
          console.log(this.news);
        }).catch(err => {             //
        console.log('请求失败：' + err + ',' + err.statusText);
      });
    }
  }
</script>

<style scoped>
  .home-title-bar {
    position: fixed !important;
    top: 0px;
    left: 0px;
    z-index: 1000;
  }

  .home-scroll-bar {
    position: fixed !important;
    top: 1rem !important;
    left: 0px !important;
    z-index: 1000;
  }

  .home-news-item {
    margin-top: 1.8rem;
  }
</style>
