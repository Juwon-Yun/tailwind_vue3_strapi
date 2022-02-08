<template>
  <div class="flex flex-col">
      <span class="">AbleCloud</span>
      <ul class="flex flex-col content-center justify-center">
          <li class="" v-for="menu in menuList" :key="menu">
            {{menu.name}}
          </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  
 computed : {

  ...mapState({
    menuList : state => state.menuList
  })
  
 },
}
</script>

<style>

</style>