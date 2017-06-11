<template lang="html">
  <div class="wrapper">
    <div class="login-box">
      <div class="login-box-body">
        <p class="login-box-msg">Password retrieval</p>

        <div data-name="form">
          <div class="form-group has-feedback">
            <input type="email" v-model="loginForm.email" class="form-control" placeholder="Username">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
            </div>
            <!-- /.col -->
            <div class="col-xs-4">
              <button class="btn btn-primary btn-block btn-flat">Sent</button>
            </div>
            <!-- /.col -->
          </div>
        </div>

      </div>
      <!-- /.login-box-body -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      loginForm: {
        email: 'admin@sina.com'
      }
    }
  },
  computed: {
    ...mapGetters([
      'userToken'
    ])
  },
  methods: {
  }
}
</script>
<style lang="css">
  .skin-blue {
    background-color: #ecf0f5;
  }
  @media (max-width: 768px) {
    .login-box {
      width: 90%;
      margin-top: 20px;
    }
  }
  .login-box {
    width: 360px;
    height: 100vh;
    margin: 0 auto;
    padding-top: 10%;
  }
</style>
