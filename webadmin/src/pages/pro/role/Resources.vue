<template>
  <div>
    <table border="1" width="100%" class="res-table">
      <tr>
        <th>序号</th>
        <th>角色名称</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in list" v-if="list">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>
          <a href="javascript:;">修改</a>
          <span style="padding: 10px"></span>
          <a href="javascript:;" @click="handleDelete(list, item.id)">删除</a>
        </td>
      </tr>
      <tr v-if="!list">
        <td colspan="3">暂时没有数据！</td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
  .res-table th, .res-table td {
    text-align: center;
    height: 30px;
  }
</style>
<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        list: null
      }
    },
    computed: {
      ...mapGetters([
        'allResourcesList'
      ])
    },
    mounted () {
      this.getAllResourcesList().then((res) => {
        if (res.status === 200) {
          this.list = res.data
        }
      })
    },
    methods: {
      ...mapActions([
        'getAllResourcesList'
      ]),
      handleDelete (arrList, id) {
        let tableData = arrList
        tableData.forEach(function (data) {
          if (id === data.id) {
            tableData.splice(tableData.indexOf(data), 1)
          }
        })
      }
    }
  }
</script>
