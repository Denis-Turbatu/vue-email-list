const {createApp} = Vue;

createApp({
    data(){
        return{
            res: [],
        }
    },
    created(){
        for (let i = 0; i < 9; i++) {
            this.generateEmail();
        }
    },
    methods: {
        generateEmail: function(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                this.res.push(result.data.response);
                console.log(this.res);
            });
        },
    }
}).mount('#app');
