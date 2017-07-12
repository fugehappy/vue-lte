<template>
  <div>
    <button class="btn btn-info" style="margin-bottom: 10px;" @click="handleAdd">添加</button>
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
          <a href="javascript:;" @click="handleDelete(item.id)">删除</a>
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
      this.getResources()
    },
    methods: {
      ...mapActions([
        'getAllResourcesList',
        'addOneResources',
        'delOneResources'
      ]),
      /**
       * 获取
       */
      getResources () {
        this.getAllResourcesList().then((res) => {
          if (res.status === 200) {
            this.list = res.data
          }
        })
      },

      /**
       * 添加
       */
      handleAdd () {
        // tableData.splice(tableData.indexOf(data), 1)
        let _this = this
        let data = {
          'permissions': [{
            'name': '控制台',
            'key': 'machine_getone',
            'available_operations': 'c r u d'
          },
          {
            'name': '数据清洗',
            'key': 'sheets_clean',
            'available_operations': 'c r u d'
          }],
          'name': 'test1',
          'create_user': 'admin'
        }
        this.addOneResources(data).then((res) => {
          _this.getResources()
        })
      },
      /**
       * 删除
       */
      handleDelete (id) {
        // tableData.splice(tableData.indexOf(data), 1)
        let _this = this
        if (!id) {
          return
        }
        this.delOneResources({id: id}).then((res) => {
          _this.getResources()
        })
      }
    }
  }
</script>
