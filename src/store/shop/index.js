import {one} from '../../api/server'

const state = {
    arr:''

};
const mutations = {
    test(state, arr) {
        state.arr = arr
    }
};
const actions = {
    gettest(store, arr) {
        one().then((ok) => {
            // console.log(ok.data)
            store.commit("test", ok.data)
            // console.log(this.arr)
        }).catch((err) => {
            console.log(err)
        })
    }
}



export default {
    state,
    mutations,
    actions,
}