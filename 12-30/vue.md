- <hr>:整屏下划线
- <br>:换行
- 数据操作**特别频繁**的时候尽量用DOM不
# vue
- MVVM框架 数据跟视图双向绑定
- 渐进式（弱主张）：不一定非得用固定的模式可以改变的
- 使用Vue
  - 引vue
  - 在html里挂载一个根元素
  - 实例化vue-> new Vue({})
  - 配置参数
     - el：'挂载元素'
     - data（存数据）：在new Vue下值为对象
  - 输出数据 双花括号{{放数据名称即可}} 小胡子


# Class绑定（v-bind缩写为:）
- 如果说属性需要**动态操作**，那么就使用v-bind:xx
- v-bind 用于 class 和 style 时，表达式结果的类型除了字符串之外，还可以是对象或数组。v-bind:class 指令也可以与普通的 class 属性共存
```
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```
- v-bind:class="{类名:布尔值}"
- v-bind="{data:1}"  没有具体的属性可以使用v-bind=对象（批量设置属性）
- 对象语法  
```
<div v-bind:class="{ active: isActive }"></div>
```
- 数组语法
```
<div v-bind:class="[activeClass, errorClass]"></div>
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```
   - 三元表达式缩写
```
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```
# style绑定样式
- 对象语法( 
  :style="{属性名:属性值（可以为数据）}"
  :style="[{属性名1:属性值1（可以为数据）},{属性名2:属性值2（可以为数据）}]")
```
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
- 数组语法
```
//baseStyles和overridingStyles是数据
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```
# v-if和v-show
```
<div v-show="b" class="box"></div> 根据表达式之真假值，切换元素的 display CSS 属性。只是重绘
<div v-if="b" class="box"></div>彻底消失会有回流
```
# v-for
```
可以遍历数组和对象
<div v-for="(val, key) in object"></div>
```
# v-on事件（可以缩写为@）
- 修饰符：.stop阻止冒泡 .prevent阻止默认行为   .capture添加捕获  .once  只触发一次回调.
- 如果不传参，第一个参数就是事件对象.如果传了参还想拿到事件对象，需要在模板中的事件函数内传一个$event
```
//表单使用v-model以后attr实现双向绑定，相互影响，且它的value就是v-model对应的值
<input type="text" v-model="attr" v-on:input="fn">
      data:{
            attr:'123',
            ary:['123']
        }

```
```
//绑定键盘事件函数
 @keyup.13="add"=> @keyup.enter="add"
```
```
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
```