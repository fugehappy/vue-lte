<template lang="html">
  <div class="">
    <button @click="handleDownload">导出excel</button>
    <table>
      <thead>
      <tr>
        <th width="80px">编号</th>
        <th>名称</th>
        <th width="80px">颜色</th>
        <th>部门</th>
        <th  width="80px">价格</th>
        <th>附属</th>
        <th>材料</th>
        <th>产品</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in totalProduct">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.color }}</td>
        <td>{{ item.department }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.adjective }}</td>
        <td>{{ item.material }}</td>
        <td>{{ item.product }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { export_json_to_excel } from '../../lib/vendor/Export2Excel.js'

export default {
  created () {
    this.fetchProduct({page: 1, limit: 20})
  },
  computed: {
    ...mapGetters([
      'totalProduct'
    ])
  },
  methods: {
    ...mapActions([
      'fetchProduct'
    ]),
    handleDownload () {
      require.ensure([], () => {
        // debugger
        // const { export_json_to_excel } = require('../lib/vendor/Export2Excel.js')
        const tHeader = ['编号', '名称', '颜色', '部门', '价格']
        const filterVal = ['id', 'name', 'color', 'department', 'price']
        const list = this.totalProduct
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

<style lang="css">
</style>
