<template>
  <div class="login-container">
    <!-- 导航栏部分 -->
    <van-nav-bar title="登陆" />
    <!-- 导航栏部分 -->

    <!-- 表单部分 -->
    <!-- <van-cell-group> -->
    <van-field class="icon icon-mobile" placeholder="请输入手机号" />
    <van-field class="icon icon-icon--" placeholder="请输入验证码">
      <van-button slot="button" round size="small" type="primary" class="identifying-code">发送验证码</van-button>
    </van-field>
    <!-- </van-cell-group> -->
    <div class="login-button">
      <van-button type="info">登陆</van-button>
    </div>
    <!-- 表单部分 -->
  </div>
</template>
<script>
export default {
  name: 'loginPage'
}
</script>

<style lang="less">
.login-container {
  .login-button {
    padding: 27px 16px;
    color: #fff;
  }
  .van-button {
    width: 100%;
    background-color: #6db4fb;
  }
  .identifying-code{
       background-color:#ededed;
       color: #a19f9f;
       border: none;
  }
  .icon-mobile:before{
      margin-right: 5px;
  }
  .icon-icon--:before{
      margin-right: 5px;
      margin-top:4px;
  }

}
</style>
