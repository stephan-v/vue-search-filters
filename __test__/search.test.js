import Vue from 'vue/dist/vue.js';
import ExampleComponent from '../src/components/ExampleComponent.vue';

describe('ExampleComponent', () => {
    Vue.component('example-component', ExampleComponent);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <example-component></example-component>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}
