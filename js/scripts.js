const { createApp } = Vue;

createApp({
    data() {
        return {
            discs: []
        };
    },
    methods: {
        getDisc() {
            axios
                .get('http://localhost/esercizio47 - PHP Dischi JSON/php-dischi-json')
                .then(res => {
                    this.discs = res.data;
                });
        }
    },
    created() {
        this.getDisc();
    }
}).mount('#app');