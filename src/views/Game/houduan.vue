<template>
    <div class="houduan">
      <div class="htit">
          <h1 class="name">{{videodata.name}}</h1>
        <h6 class="director">{{videodata.director}}</h6>
      </div>
        <p class="leadingRole">{{videodata.leadingRole}}</p>
        <div class="des">
            <p>{{videodata.des}}</p>
        </div>
        <video :src="videodata.playurl" controls autoplay loop></video>
        <div class="book">
            <h2>{{bookdata.bookname}}</h2>
            <strong>{{bookdata.author}}</strong>&nbsp;<span>{{bookdata.updated}}</span>
            <p>
                {{bookdata.introduction}}
            </p>
        
        </div>
    </div>
</template>
<script>
import {houduan} from "@/api/axiosAPI.js"
import {book} from "@/api/axiosAPI.js"
export default {
    data(){
        return{
            videodata:[],
            bookdata:[]
        }
    },
    created(){
          //在页面加载时读取localStorage里的状态信息
        if (localStorage.getItem("data") ) {
            //replaceState替换数据 Object.assign合并对象
            this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("data"))))
        } 
        //在页面刷新时将vuex里的信息保存到localStorage里
        window.addEventListener("beforeunload",()=>{
            localStorage.setItem("data",JSON.stringify(this.$store.state))
        })
        this.$store.dispatch("houtaiact")
        this.$store.dispatch("bookact")
        this.videodata = this.$store.state.houduan[0]
        this.bookdata = this.$store.state.book[0]
         this.$store.commit("hide")
    },
}
</script>
<style scoped>
    .houduan{
      margin-top: .3rem;  
    background-color: rgba(97, 181, 252, 0.2);
     border-radius: 10%;
    }
    .htit{
        display: flex;
        justify-content: space-evenly;
    }
   .name{
       font-size: .28rem;
    }
    .director{
        font-size: .16rem;
        line-height: .4rem;
    }
    .leadingRole{
        font-size: .14rem;
        line-height: .28rem;
         color: #666;
    }
    .des{
         width: 100%;
        font-size: .12rem;
        line-height: .24rem;
         background-color: rgba(86, 104, 38, 0.3);
        letter-spacing: .02rem;
        color: #666;
        margin: 0 auto;
        font-style: italic;
        border: 1px solid #ccc;
        border-radius: 10%;
        padding: .2rem 0 0 0;
    }
     video{
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .book{
        font-size: .14rem;
        line-height: .28rem;
         color: #666;
        border-radius: 10%;
    }
</style>
