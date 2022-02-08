<template>
<div class="flex w-screen h-screen">
  <div class="w-1/6 h-full bg-white dark:bg-slate-900">
    <Sidebar/>
  </div>
  <div class="w-5/6 h-full bg-blue-300">
    <DashBoard/>
  </div>
</div>

</template>

<script>
  import Sidebar from '@/components/Sidebar.vue';
  import DashBoard from '@/components/DashBoard.vue'

  export default {
    components: {
      Sidebar,
      DashBoard,
    },
  };
</script>

<style>
</style>
