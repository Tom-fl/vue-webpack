/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-23 17:11:00
 * @LastEditTime: 2022-09-23 17:11:17
 * @Email: Tom
 * @FilePath: \vue-webpack\src\env.d.ts
 * @Environment: Win 10
 * @Description: vue 的声明文件 不然 app.vue 不认识
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
