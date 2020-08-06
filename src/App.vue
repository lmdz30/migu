<<<<<<< HEAD
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
=======
<template>
  <div id="app">
<Header v-show="$store.state.showFlag"></Header>

<Nav v-show="$store.state.showFlag"></Nav>


>>>>>>> 9448dbb... 王
<div class="content">
    <router-view/>
</div>
<!-- <Footer></Footer> -->
  </div>
</template>
<script>
<<<<<<< HEAD
import Nav from './components/nav' 
import Header from './components/header'
// import Footer from '../src/components/footer' 
export default {
	 components:{
    Nav,Header
  }
 
=======

import Header from '../src/components/header' 
import Nav from './components/nav'
// import Footer from '../src/components/footer' 
export default {
	created(){
		
	},

  components:{
    Header,Nav
  }
>>>>>>> 9448dbb... 王
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
<<<<<<< HEAD
=======
z-index: 998;
>>>>>>> 9448dbb... 王
	top: 0.54rem;
  left: 0;
  height: 0.54rem;
}
.header{
	width: 100%;
	position: fixed;
	top: 0;
  left: 0;
<<<<<<< HEAD
	background: black;
=======
	background: red;
>>>>>>> 9448dbb... 王
	height: 0.54rem;
	z-index: 999;
}
.content{
  width: 100%;
<<<<<<< HEAD
  height:100%;
	margin-top: 1.04rem;
	overflow: auto;
	margin-bottom: 0.05rem;
	/* margin-top: 0.44rem; */
=======
	top: 1.08rem;
	  left: 0;
	margin-bottom: 0.1rem;
	margin-top: 1.04rem;
	
	/*
	
	 position: fixed; 
	overflow: auto;
	 margin-top: -0.44rem;
	*/
	
>>>>>>> 9448dbb... 王
}
</style>
