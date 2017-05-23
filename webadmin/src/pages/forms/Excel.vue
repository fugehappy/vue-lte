<template>
  <div>
    <button @click="handleDownload">导出excel</button>
  </div>
</template>

<script>
import resData from '../../../static/data/excelData.js'
export default {
  data () {
    return {
      list: null
    }
  },
  created () {
    this.list = resData
  },
  methods: {
    handleDownload() {
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../lib/Export2Excel.js');
        const tHeader = ['序号', '文章标题', '作者', '阅读数', '发布时间']
        const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        // export_json_to_excel(tHeader, data, '列表excel')
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style>

</style>
