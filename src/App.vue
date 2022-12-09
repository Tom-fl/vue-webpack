<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-23 16:57:46
 * @LastEditTime: 2022-09-23 20:24:11
 * @Email: Tom
 * @FilePath: \vue-webpack\src\App.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>
    嘻嘻嘻嘻嘻嘻嘻11

    <div>{{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import './utils/b.js'

const msg = ref('xxxxxxxx')
</script>

<style scope>
@import url('@/assets/index.less');
</style>
