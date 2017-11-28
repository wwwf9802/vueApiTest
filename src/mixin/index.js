
let mixin={
    created(){
        console.log("created fromMixin")
    },
    methods:{
        foo(){
            console.log("foo mixin")
        }
    }
}

export default mixin