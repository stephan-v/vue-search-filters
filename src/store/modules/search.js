import Vue from 'vue';

export default {
    state: {
        initialData: [],
        filteredData: [],
        activeFilters: {}
    },

    mutations: {
        data(state, data) {
            state.initialData = data;
        },

        filter(state, data) {
            state.filteredData = data;
        },

        activeFilters(state, data) {
            Vue.set(state.activeFilters, data.name, data.active);
        }
    },

    getters: {
        data: state => {
            if (hasActiveFilter(state)) {
                return state.filteredData;
            } else {
                // Reset our filters if none are selected.
                state.filteredData = state.initialData;
                return state.initialData;
            }
        }
    }
}

function hasActiveFilter(state) {
    for (let prop in state.activeFilters) {
        if (state.activeFilters.hasOwnProperty(prop) && state.activeFilters[prop]) {
            return true;
        }
    }

    return false;
}