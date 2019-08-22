<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
      <i-table border :content="self" :columns="columns" :data="articles"></i-table>
    <a> written by {{ author }} </a>
    <Input-number :max="10" :min="1" :value="1"></Input-number>
  </div>

</template>

<script>
export default {
  data() {
    return {
      author: '微信公众号 jinkey-love',
      articles: [],
      self: this,
      columns: [
        {
          title: '小说名称',
          key: 'bookname'
        },
        {
          title: '介绍',
          key: 'introduction'
        }
      ]
    }
  },
  mounted: function() {
    this.$http.get('https://www.apiopen.top/novelApi', {}, {
      headers: {
        Authorization: 'G7NeIWsOHmFQjaEC.EVyux9n12FCheJWs.c8fa3b952186590006ff2bbff4149740'
      },
      emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
      this.articles = response.data.data
      // this.articles = response.data['subjects'] // 也可以
    }, function(response) {
      // 这里是处理错误的回调
      console.log(response)
    })
  }
}
</script>

<style>
</style>
