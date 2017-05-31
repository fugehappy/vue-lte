<template lang="html">
  <div class="login-box">
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <div data-name="form">
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Username">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password">
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
            <button class="btn btn-primary btn-block btn-flat" @click="login">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </div>

    </div>
    <!-- /.login-box-body -->
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    /**
     * 登录操作
     */
    login () {
      sessionStorage && sessionStorage.setItem('token', 'wdhfhsdfiushdfuisdhf43495468djksad')
      this.$router.push({ path: '/hello' })
    }
  }
}
</script>
<style lang="css">
  .skin-blue {
    background-color: #ecf0f5;
    min-height: 100%;
  }
  @media (max-width: 768px) {
    .login-box {
      width: 90%;
      margin-top: 20px;
    }
  }

  .login-box {
    width: 360px;
    margin: 7% auto;
  }
</style>
