<template>
  <div>
    <page title="角色列表" :isLoading="rolePageLoad" v-if="showRolePage">
      <div slot="tools" v-if="pagePermissions.indexOf('c') === -1 ? false : true">
        <button class="el-button el-button--primary" @click="openAddRoleDialog">新增角色</button>
      </div>
      <div slot="content"  v-if="pagePermissions.indexOf('r') === -1 ? false : true">
        <va-table class="role-table">
          <tr>
            <th>序号</th>
            <th>角色名称</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item, index) in allRoleList" v-if="allRoleList">
            <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
            <!--<td><a href="javascript:;" @click="openUpdateRoleNameDialog(item)">{{ item.name }}</a></td>-->
            <td>{{ item.name }}</td>
            <td>
              <a href="javascript:;" @click="openUpdateOneRole(item)"  v-if="pagePermissions.indexOf('u') === -1 ? false : true">修改</a>
              <span style="padding: 10px" v-if="(pagePermissions.indexOf('u') !== -1 && pagePermissions.indexOf('d') !== -1) ? true : false"></span>
              <a href="javascript:;" @click="deleteRole(item)" v-if="pagePermissions.indexOf('d') === -1 ? false : true">删除</a>
            </td>
          </tr>
          <tr v-if="!allRoleList">
            <td colspan="3">暂时没有数据！</td>
          </tr>
        </va-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </page>
    <page title="修改角色" :isLoading="updateResPageload" v-if="showResPage">
      <div slot="content">
        <el-form :model="ruleModifyForm" :rules="rules" ref="roleForm" label-width="100px">
          <el-row>
            <el-col :span="6">
              <el-form-item label="角色名称" prop="name">
                <el-input v-model="ruleModifyForm.name" :maxlength="12" :minlength="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <va-table class="role-table">
          <tr>
            <th>资源名称</th>
            <th>创建</th>
            <th>获取</th>
            <th>修改</th>
            <th>删除</th>
          </tr>
          <tr v-for="item in oneRoleListData">
            <td>{{ item.name }}</td>
            <td><el-checkbox v-model="item.checkGroup[0]" value="c" :disabled="!inArray('c', item.available_operations) || !item.checkGroup[1]"></el-checkbox></td>
            <td><el-checkbox v-model="item.checkGroup[1]" value="r" :disabled="!inArray('r', item.available_operations)" @change="handleObtain(item)"></el-checkbox></td>
            <td><el-checkbox v-model="item.checkGroup[2]" value="u" :disabled="!inArray('u', item.available_operations) || !item.checkGroup[1]"></el-checkbox></td>
            <td><el-checkbox v-model="item.checkGroup[3]" value="d" :disabled="!inArray('d', item.available_operations) || !item.checkGroup[1]"></el-checkbox></td>
          </tr>
        </va-table>
      </div>
      <div slot="footer">
        <div class="text-algin-c">
          <button class="el-button el-button--primary" @click="updateRole('roleForm', oneRoleListData)">更改</button>
          <button class="el-button el-button--primary" @click="closeRole(oneRoleListData)">返回</button>
        </div>
      </div>
    </page>
    <page title="新增角色" :isLoading="addRolePageLoad" v-if="showAddRolePage">
      <div slot="content">
        <el-form :model="roleForm" :rules="rules" ref="roleForm" label-width="100px">
          <el-row>
            <el-col :span="6">
              <el-form-item label="角色名称" prop="name">
                <el-input v-model="roleForm.name" :maxlength="12" :minlength="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <va-table class="role-table">
          <tr>
            <th>资源名称</th>
            <th>创建</th>
            <th>获取</th>
            <th>修改</th>
            <th>删除</th>
          </tr>
          <tr v-for="item in oneAddRoleListData">
            <td>{{ item.name }}</td>
            <td><el-checkbox v-model="item.checkGroup[0]" value="c" :disabled="!inArray('c', item.available_operations) || !item.checkGroup[1]"></el-checkbox></td>
            <td><el-checkbox v-model="item.checkGroup[1]" value="r" :disabled="!inArray('r', item.available_operations)" @change="handleObtain(item)"></el-checkbox></td>
            <td><el-checkbox v-model="item.checkGroup[2]" value="u" :disabled="!inArray('u', item.available_operations) || !item.checkGroup[1]"></el-checkbox></td>
            <td><el-checkbox v-model="item.checkGroup[3]" value="d" :disabled="!inArray('d', item.available_operations) || !item.checkGroup[1]"></el-checkbox></td>
          </tr>
        </va-table>
      </div>
      <div slot="footer">
        <div class="text-algin-c">
          <el-button type="primary" @click="addRole('roleForm', 'oneRoleListData')">添加</el-button>
          <el-button @click="closeAddRole">返回</el-button>
        </div>
      </div>
    </page>
    <page title="修改角色名称" :isLoading="false" v-if="showUpdateRolePage">
      <div slot="content">
        <el-form :model="updateRoleForm" ref="roleForm" label-width="100px">
          <el-row>
            <el-col :span="6">
              <el-form-item label="角色名称" prop="name">
                <el-input v-model="updateRoleForm.name" :maxlength="12" :minlength="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div slot="footer">
        <div class="ml-10">
          <el-button type="primary" @click="updateOneRole('updateRoleForm')">修改</el-button>
          <el-button @click="closeUpdateOneRole">返回</el-button>
        </div>
      </div>
    </page>
  </div>
</template>
<style scoped>
  .role-table th, .role-table td {
    text-align: center;
  }
</style>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Page from '../../components/Page.vue'
  import VATable from '../../components/VATable.vue'
  import { statusCallback } from '../../lib/utils'
  export default {
    data () {
      var checkName = (rule, value, callback) => {
        // todo
        let reg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
        if (!reg.test(value)) {
          callback(new Error('输入的格式有误'))
        } else {
          callback()
        }
      }
      return {
        rolePageLoad: true,
        updateResPageload: false,
        addRolePageLoad: false,
        currentPage: 1,
        pageSize: 1,
        total: 1,
        showRolePage: true,
        showResPage: false,
        showAddRolePage: false,
        showUpdateRolePage: false,
        pageTitle: '',
        allResourcesListData: null,
        oneRoleListData: null,
        oneAddRoleListData: null,
        pagePermissions: '',
        allRoleList: null,
        ruleModifyForm: {
          name: ''
        },
        updateRoleForm: {
          name: ''
        },
        roleForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入角色名称', trigger: 'blur' },
            { min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' },
            { required: true, trigger: 'blur', validator: checkName }
          ]
        }
      }
    },
    components: {
      'va-table': VATable,
      'page': Page
    },
    computed: {
      ...mapGetters([
        'allResourcesList'
      ])
    },
    created () {
      // 获取所有资源的基础数据
      this.getAllResourcesList().then((res) => {
        this.allResourcesListData = this.allResourcesList ? JSON.parse(this.allResourcesList) : []
        statusCallback(res)
      })
    },
    mounted () {
      this.getAllRoleData()
    },
    methods: {
      ...mapActions([
        'getAllResourcesList',
        'getAllRoleList',
        'updateOneRoleList',
        'deleteOneRole',
        'addOneRole',
        'updateOneRoleName'
      ]),
      /**
       * 获取所有角色的数据
       */
      getAllRoleData () {
        // page_size: 4
        this.getAllRoleList({current: this.currentPage}).then((res) => {
          let _this = this
          statusCallback(res, function () {
            if (res && res.data) {
              _this.pagePermissions = res.data.page_permissions ? res.data.page_permissions : '' // 权限
              _this.total = res.data.paging.total // 总条数
              _this.pageSize = res.data.paging.page_size // 每页显示的条数
              _this.allRoleList = res.data.roles // 角色列表
              _this.rolePageLoad = false
            }
          })
        })
      },
      /**
       * 分页跳转
       */
      handleCurrentChange (val) {
        this.currentPage = val
        this.getAllRoleData()
      },
      /**
       * 新增单个角色
       */
      addRole (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 新增
            this.addRolePageLoad = true
            let _this = this
            this.addOneRole({ name: this.roleForm.name, data: this.oneAddRoleListData }).then((res) => {
              this.addRolePageLoad = false
              statusCallback(res, function () {
                _this.currentPage = 1
                _this.getAllRoleData()
                if (!_this.addRolePageLoad) {
                  _this.$message({
                    message: '添加成功',
                    type: 'success'
                  })
                  _this.closeAddRole()
                }
              })
            })
          } else {
            // 验证未通过
            this.$message({
              message: '不符合规则，请重新添加',
              type: 'error'
            })
            return false
          }
        })
      },
      /**
       * 关闭新增角色对话框
       */
      closeAddRole () {
        this.showAddRolePage = false
        this.showRolePage = true
        this.roleForm.name = ''
      },
      /**
       * 打开更改角色名称对话框
       */
      openUpdateRoleNameDialog (item) {
        this.showUpdateRolePage = true
        this.showRolePage = false
        this.updateRoleForm = {
          id: item.id,
          name: item.name
        }
      },
      /**
       * 修改单个角色名称
       */
      updateOneRole (formName) {
        // 验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.updateOneRoleName(this.updateRoleForm).then((res) => {
              let _this = this
              statusCallback(res, function () {
                _this.getAllRoleData()
                _this.closeUpdateOneRole()
                _this.$message({
                  message: '更新成功',
                  type: 'success'
                })
              })
            })
          } else {
            // err
          }
        })
      },
      /**
       * 关闭修改角色名称对话框
       */
      closeUpdateOneRole () {
        this.showUpdateRolePage = false
        this.showRolePage = true
      },
      /**
       * 打开修改单个角色的资源表
       */
      openUpdateOneRole (item) {
        this.showRolePage = false
        this.showResPage = true
        this.ruleModifyForm.name = item.name
        this.id = item.id
        // 匹配数据逻辑为：allResourcesListData是基础数据(resources)，item才包括正真的权限，item来自于allRoleList(roles)
        this.oneRoleListData = this.converManagerRole(this.allResourcesListData, item)
      },
      /**
       * 数据转化处理
       */
      converManagerRole (need, handle) {
        if (!need) {
          return need
        }
        for (var i = 0; i < need.length; i++) {
          var sourceItem = null
          var sourceArr = []
          for (var j = 0; j < handle.permissions.length; j++) {
            if (need[i].key === handle.permissions[j].key) {
              sourceItem = handle.permissions[j]
              sourceArr = sourceItem.available_operations.split(' ')
              break
            }
          }
          // 做勾选
          for (var k = 0; k < need[i].available_operations.length; k++) {
            for (var h = 0; h < sourceArr.length; h++) {
              if (need[i].available_operations[k] === sourceArr[h]) {
                switch (need[i].available_operations[k]) {
                  case 'c':
                    need[i].checkGroup[0] = true
                    break
                  case 'r':
                    need[i].checkGroup[1] = true
                    break
                  case 'u':
                    need[i].checkGroup[2] = true
                    break
                  case 'd':
                    need[i].checkGroup[3] = true
                    break
                }
              }
            }
          }
        }
        return need
      },
      /**
       * 处理获取的逻辑
       */
      handleObtain (item) {
        // 记录原始的资源
        let state = item.checkGroup[1]
        if (!state) {
          // 获取不勾选，他们的资源都不勾选
          item.checkGroup = [false, false, false, false]
          item.available_operations = ['r']
        } else {
          // 不勾选就恢复原来的可修改状态
          item.available_operations = item.original_operations
        }
      },
      /**
       * 修改一个角色的资源表
       */
      updateRole (formName, data) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.updateResPageload = true
            // 对数据进行处理成后台需要的格式
            this.updateOneRoleList({id: this.id, name: this.ruleModifyForm.name, data: this.oneRoleListData}).then((res) => {
              this.updateResPageload = false
              let _this = this
              // 更新成功后再次获取所有角色列表
              statusCallback(res, function () {
                _this.getAllRoleData()
                // 关闭对话框
                if (!_this.updateResPageload) {
                  _this.closeRole(data)
                  _this.$message({
                    message: '更新成功',
                    type: 'success'
                  })
                }
              })
            })
          }
        })
      },
      /**
       * 重置数据
       */
      resetData (data) {
        if (!data) {
          return
        }
        for (var i = 0; i < data.length; i++) {
          data[i].checkGroup = [false, false, false, false]
        }
      },
      /**
       * 关闭资源表，返回角色列表
       */
      closeRole (data) {
        this.showRolePage = true
        this.showResPage = false
        this.resetData(data)
      },
      /**
       * 打开新增角色对话框
       */
      openAddRoleDialog () {
        this.showRolePage = false
        this.showAddRolePage = true
        this.oneAddRoleListData = JSON.parse(this.allResourcesList)
      },
      /**
       * 删除一个角色
       */
      deleteRole (data) {
        let _this = this
        this.$confirm('此操作将删除该角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let param = {
            id: data.id
          }
          _this.deleteOneRole(param).then((res) => {
            // 删除后再次获取所有角色列表
            statusCallback(res, function () {
              _this.getAllRoleData()
              _this.$message({
                type: 'success',
                message: '删除成功!'
              })
            })
          })
        }).catch(() => {
          // 取消操作，不做任何响应操作
        })
      },
      /**
       * 判断是否为数组
       */
      isArray (v) {
        return v instanceof Array || v.constructor === Array || Object.prototype.toString.call(v) === '[object Array]'
      },
      /**
       * 判断元素是否在数组中
       */
      inArray (needle, haystack) {
        if (!this.isArray(haystack)) {
          throw Error('the second argument is not a Array')
        } else {
          let len = haystack.length
          for (let i = 0; i < len; i++) {
            if (haystack[i] === needle) return true
          }
        }
        return false
      }
    }
  }
</script>
