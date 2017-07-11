import Vue from 'vue';

function hasActiveFilter(state) {
    let returnv = false;

    // @TODO Refactor to remove .entries / .forEach / .includes
    Object.entries(state.filterStack).forEach((entry) => {
        const filter = entry[1];
        // Check if the current filter has selected checkboxes and return true if it does.
        if (filter.values.length) returnv = true;
    });

    return returnv;
}

export default {
    state: {
        initialData: [],
        filteredData: [],
        filterStack: {},
        activeFilters: false
    },

    mutations: {
        data(state, data) {
            state.initialData = data;
        },

        filter(state, payload) {
            // Update the v-model checkbox values.
            state.filterStack[payload.name].values = payload.values;

            // Always position this after the v-model update.
            state.activeFilters = hasActiveFilter(state);

            // Get the initial unfiltered AJAX data.
            let data = state.initialData;

            const filters = Object.entries(state.filterStack);

            for (let i = 0; i < filters.length; i += 1) {
                const filter = filters[i][1];

                // Check if the current filter has selected checkboxes and filter if it does.
                if (filter.values.length) data = filter.function(data, filter.values);
            }

            state.filteredData = data;
        },

        addToFilterStack(state, payload) {
            // Use Vue.set because we want this dynamic property to be reactive.
            Vue.set(state.filterStack, payload.name, {
                function: payload.filter,
                values: []
            });
        }
    },

    getters: {
        data: (state) => {
            if (hasActiveFilter(state)) {
                return state.filteredData;
            }

            // Reset our filters if none are selected.
            state.filteredData = state.initialData;
            return state.initialData;
        },

        filterStack: state => state.filterStack
    }
};
