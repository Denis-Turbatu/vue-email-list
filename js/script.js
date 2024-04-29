const {createApp} = Vue;

createApp({
    data(){
        return{
        }
    },
    methods: {
        generateEmail: function(res) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
                const res = [];
                res.push(result.data.response);
                console.log(res);
                return res;
            })
        },
    }
}).mount('#app');
