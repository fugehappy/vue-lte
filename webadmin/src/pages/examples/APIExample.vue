<template lang="html">
  <div>
    <div class="header-bar">
      <button @click="handleDownload">导出excel</button>
      <el-input
          groupType="input"
          placeholder="Search..."
          type="text"
          v-model="searchText"
        >
        <i slot="slotSuffixAddonText" class="fa fa-check" @click="handleSearch"></i>
      </el-input>
    </div>
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
import VAInputGroup from '../../components/VAInputGroup'
import ELInput from '../../components/ELInput'

export default {
  data () {
    return {
      searchText: ''
    }
  },
  created () {
    this.fetchProduct({_page: 1, _limit: 15})
  },
  computed: {
    ...mapGetters([
      'totalProduct'
    ])
  },
  components: {
    'el-input': ELInput
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
    },
    handleSearch () {
      console.log(this.searchText)
      if (this.searchText !== '') {
        this.fetchProduct({_page: 1, _limit: 14, q: this.searchText})
      }
    }
  }
}
</script>

<style lang="css">
.header-bar {
  overflow: hidden;
}
.header-bar button {
  float: left;
}
.header-bar .input-group {
  float: right;
  width: 40%;
}
</style>
