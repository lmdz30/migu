import axios from "axios"
export function dataAjax() {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url:
                "/data",
        }).then((ok) => {
            resolve(ok)
        }).catch((err) => {
            reject(err)
        })
    })
}
