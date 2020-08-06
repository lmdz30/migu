import service from "@/util/service.js"

// import url from "./url/urlAPI.js"

export function dataAjax(){
    return new Promise((resolve,reject)=>{
        service.request({
            url:"/data",
            method:"get"
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })

    })
}
export function houduan(){
    return new Promise((resolve,reject)=>{
        service.request({
            // http://10.12.159.99:8002/video-client/findAll
            url:"/api/video-client/findAll",
            method:"get"
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })

    })
}
export function aduio(){
    return new Promise((resolve,reject)=>{
        service.request({
            // http://10.12.159.99:8002/migu-musics/findAllSongs
            url:"/api/migu-musics/findAllSongs",
            method:"get"
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })

    })
}
export function book(){
    return new Promise((resolve,reject)=>{
        service.request({
            // http://10.12.159.99:8002/migu-book/book/findAllBookByType/文传
            url:"/api/migu-book/book/findAllBookByType/文传",
            method:"get"
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })

    })
}
