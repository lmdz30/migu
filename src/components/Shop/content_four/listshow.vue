<!--
 * @Author: your name
 * @Date: 2020-08-05 17:57:58
 * @LastEditTime: 2020-08-05 17:58:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\src\components\Shop\content_four\listshow.vue
-->
<template>
    <div>
        <van-steps :active="active">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>
<van-steps direction="vertical" :active="0">
  <van-step v-for="(v,i) in actives" :key="i">
    <h3>{{v.address}}</h3>
    <p>{{v.time}}</p>
  </van-step>

</van-steps>
    </div>
</template>
<script>
export default {
     data() {
    return {
      active: 1,
      actives:[]
    };
  },
  methods: {
      time(){
          let newtime=''
            var date = new Date();
  var YY = date.getFullYear() + '-';
  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  date = YY + MM + DD +" "+hh + mm + ss;
  console.log(date)
  return date
      },
      addtime(){
            let arr= [
                {address:"商家已接单",time:this.time()},
          {address:"买家已下单",time:this.time()}
      ]
      this.actives=arr
    console.log(this.actives)
      }
  },
  created() {
this.addtime()      
  },
}
</script>