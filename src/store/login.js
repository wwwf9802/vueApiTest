export default {
	state: {
        haslogin:false,
        userData:{
            name:'',
            age:'',
            sex:'',
        },
	},
	mutations: {
		minPrice(state) {
			state.price = 0;
		},
		maxPrice(state) {
			state.price = 9000;
		},
		changePrice(state,num){
			state.price=num;
        },
        logined(state,data){
            state.haslogin=true,
            state.userData=object.assign({},state.userData,data);
        }
	},
	getters: {
		midPrice: (state, getters) => {
			return state.price/2
		},
		aPrice: (state, getters) => {
			return state.price/3
		},
	},
	actions:{
		async priceTomock1({dispatch,commit,rootState}){
			console.log("rootState");
			console.log(rootState);
			let data=await api.mock1();
			let num=data.data.price+rootState.modelA.peisongfei;
			commit("changePrice",num);
		}
	}


}