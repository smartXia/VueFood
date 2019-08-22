<template>
  <div id="firstcomponent">
    <!-- <ul>
      <li v-for="info in infos" :key="info.bg_color">
        {{info.name}}
       <hr>
      <div v-for="detail in info.content" :key="detail.song_id">
        {{detail.author}}
      </div>
       <hr>
    </li>
    </ul> -->
<i-table border :content="self" :columns="columns" :data="infos">
</i-table>
    <hr>
  </div>
</template>

<script type="text/javascript">
const axios = require('axios')
export default {
  /* eslint-disable */
  data () {
    return {
      author: 'xiapeifu',
      infos: [],
      self:this,
      columns:[
        {
          title:'分类',
          key:'name'
        },
          {
          title:'详情',
          key:'comment'
        }
      ]
    }
  }, mounted () {
    axios.post('https://api.apiopen.top/musicRankings').then(
      response => (
        this.infos = response.data.result
      )

    ).catch(function (error) { // 请求失败处理
      console.log(error);
    });
  }
}
</script>

<style>
</style>
