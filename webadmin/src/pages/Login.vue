<template lang="html">
  <div class="wrapper">
    <div class="login-box">
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <div data-name="form">
          <div class="form-group has-feedback">
            <input type="email" v-model="loginForm.email" class="form-control" placeholder="Username">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" v-model="loginForm.password" class="form-control" placeholder="Password" @keyup.enter="handleLogin()">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox"> Remember Me
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-xs-4">
              <button class="btn btn-primary btn-block btn-flat" @click="handleLogin">Sign In</button>
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
export default {
  data () {
    return {
      loginForm: {
        email: 'admin@sina.com',
        password: ''
      }
    }
  },
  methods: {
    /**
     * 登录操作
     */
    handleLogin () {
      this.$store.dispatch('loginByEmail', this.loginForm).then((res) => {
        if (res) {
          this.$router.push({ path: '/hello' })
        }
      })
    }
  }
}
</script>
<style lang="css" scoped>
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
  .login-box .checkbox input {
    position: relative;
    margin-left: 0;
  }
</style>
