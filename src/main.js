/* global Vue */
import axios from 'axios';
import { API } from './env';
import Filters from './Filters';

Vue.use(Filters);

new Vue({
    data: {
        teacher: '',
        teachers: []
    },
    methods: {
        send() {
            if (/^[a-zA-Z_]{2}$/.test(this.teacher)) {
                axios(`${API}/${this.teacher}`)
                    .then(({ data }) => {
                        this.teachers = data;
                    });
            }
        }
    }
}).$mount('#app')