<template>
  <div>
    <button @click="handleDownload">导出excel</button>
    <table>
      <thead>
      <tr>
        <th width="80px">文章标题</th>
        <th>作者</th>
        <th width="80px">阅读数</th>
        <th>发布时间</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list">
        <td>{{ item.author }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.pageviews }}</td>
        <td>{{ item.display_time }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import * as types from '../../../static/data/excelData.js'
  export default {
    data () {
    return {
      list: null
    }
  },
  created () {
    console.log(types.resData)
    this.list = types.resData
  },
  methods: {
    handleDownload () {
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../lib/vendor/Export2Excel.js')
        const tHeader = ['序号', '文章标题', '作者', '阅读数', '发布时间']
        const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '列表excel')
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
  }
</script>

<style>

</style>
