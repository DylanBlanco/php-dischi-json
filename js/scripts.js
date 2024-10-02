const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Ciao',
            discs: [],
        };
    },
    methods: {
        getDisc() {
            axios
                .get('http://localhost/esercizio47%20-%20PHP%20Dischi%20JSON/php-dischi-json/api.php')
                .then(res => {
                    this.discs = res.data;
                });
        }
    },
    created() {
        this.getDisc();
    }
}).mount('#app');