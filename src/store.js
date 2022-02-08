import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            menuList : [
                {
                    name : '고객사',
                },
                {
                    name : '용어사전',
                },
                {
                    name : '제안서',
                },
                {
                    name : 'IP관리',
                }
            ]
        }
    },
    mutations : {

    },
    actions : {

    },
})

export default store