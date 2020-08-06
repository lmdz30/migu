import service from '../util/request.js'
export function one(){
     return new Promise((resolve,reject)=>{
        service.request({
            url:"/demoa",
            method:"get"
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })

     }) 
    }