<!--
 * @Author: your name
 * @Date: 2020-07-27 09:15:09
 * @LastEditTime: 2020-08-05 15:09:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\src\App.vue
--> 
<template>
  <div id="app">
  <Header></Header>
  <Nav></Nav>
<div class="content">
    <router-view/>
</div>
<!-- <Footer></Footer> -->
  </div>
</template>
<script>
import Nav from './components/nav' 
import Header from './components/header'
// import Footer from '../src/components/footer' 
export default {
	 components:{
    Nav,Header
  }
 
}
</script>
<style >
*{
	margin: 0;
	padding: 0;
	text-decoration: none;
	list-style: none;
}
html,body{
	height: 100%;
	width: 100%;
}

li{
  list-style: none;
}
#app{
	display: flex;
	flex-direction: column;
	height: 100%;
}
.nav{
  width: 100%;
  position: fixed;
	top: 0.54rem;
  left: 0;
  height: 0.54rem;
}
.header{
	width: 100%;
	position: fixed;
	top: 0;
  left: 0;
	background: black;
	height: 0.54rem;
	z-index: 999;
}
.content{
  width: 100%;
  height:100%;
	margin-top: 1.04rem;
	overflow: auto;
	margin-bottom: 0.05rem;
	/* margin-top: 0.44rem; */
}
</style>
