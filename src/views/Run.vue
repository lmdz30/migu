<template>
  <div><h1 v-one="red">运动</h1>
    <h1 v-two>哈哈哈</h1>
  </div>
</template>

<script>
export default {
  directives:{
    one(el,obj){
      el.style.color = obj.expression
      console.log(obj.expression)
    },
     two(el){
      el.style.color = 'yellow'
      console.log(obj.expression)
    }
  },
 

}
</script>

<style>

</style>