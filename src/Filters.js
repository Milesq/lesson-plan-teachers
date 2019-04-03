export default {
    install(Vue) {
        Vue.filter('weekDay', day => {
            const days = [
                'Poniedziałek',
                'Wtorek',
                'Środa',
                'Czwartek',
                'Piątek',
            ];

            return days[day - 1];
        });

        Vue.filter('hoursRange', number => {
            return ([
                '7:05 - 7:50',
                '8:00- 8:45',
                '8:55- 9:40',
                '9:50-10:35	',
                '10:45-11:30',
                '11:50-12:35',
                '12:45-13:30',
                '13:40-14:25',
                '14:35-15:20',
                '15:30-16:15',
                '16:25-17:10'
            ])[number] || 'UNDEFINED!';
        });
    }
};