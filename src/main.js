import Mosaic from '@authman2/mosaic';

const app = new Mosaic({
    element: '#app',
    data: {
        feature: 'awesome'
    },
    actions: {
        change() {
            const { floor, random } = Math;
            const features = [
                'awesome',
                'great',
                'super'
            ];

            this.data.feature = features[floor(random() * features.length)];
        }
    },
    view: ({ feature }, { change }) =>
        html`<span onclick=${change}>Mosaic is ${feature}!</span>`
});

app.paint();