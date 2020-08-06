<!--
 * @Author: your name
 * @Date: 2020-07-27 21:20:51
 * @LastEditTime: 2020-08-01 15:39:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\src\components\Shop\content_two\goodsPreview.vue
--> 
<template>
  <div class="goodsView">
    <img :src="goodsLi.img" />
    <p>{{goodsLi.product}}</p>
    <em>
      ￥
      <span>{{goodsLi.sku.price}}</span>
    </em>
  </div>
</template>
<script>
export default {
  props: ["goodsLi"],
  components: {},
};
</script>
<style scoped>
.goodsView {
  width: 1.52rem;
  height: 2rem;
  margin: 0.09rem 0.02rem 0;
  padding: 0.05rem 0.1rem;
  background-color: rgb(252, 248, 248,.5);
}
img {
  width: 1.5rem;
  height: 1.5rem;
}
p {
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
em {
  font-style: normal;
  color: rgb(207, 40, 40);
}
</style>