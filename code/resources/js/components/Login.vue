<template>
    <transition name="loginbox">
        <div v-if="seen">
            <form>
                <input type="text" placeholder="login" class="input is-rounded"/>
                <input type="password" placeholder="password" class="input is-rounded"/>
            </form>
        </div>
    </transition>
</template>
<style>
.loginbox-enter-active, .loginbox-leave-active {
  transition: opacity 1s;
}
.loginbox-enter, .loginbox-leave-to  {
  opacity: 0;
}
</style>
<script>
    export default {
      props: {
       seen: {
        type: Boolean,
        required: true,
        default: false
       }
      }
    }
</script>

