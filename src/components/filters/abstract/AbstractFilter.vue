<template>
    <div class="filter" :class="{ 'active': active }">
        <h4>{{ translation }}</h4>

        <div class="checkbox" v-for="(value, index) in rangeWithCount" :key="index">
            <label>
                <input type="checkbox" :value="value.label" v-model.number="values">

                <span class="value">{{ value.value }}</span>
                <span class="background"></span>

                <span class="count">- {{ value.count }}</span>

                <span class="remove-filter">x</span>
            </label>
        </div><!-- /.checkbox -->
    </div><!-- /.filter -->
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                name: '',
                translation: ''
            };
        },

        props: {
            range: {
                required: true,
                type: Array
            }
        },

        created() {
            if (!this.name.length) {
                throw new Error(
                    'Please provide a name as a data property for your concrete filter component'
                );
            }

            if (typeof this.filter !== 'function') {
                throw new Error(
                    'Please provide a filter function as a method for your concrete filter component'
                );
            }

            this.$store.commit('addToFilterStack', {
                filter: this.filter,
                name: this.name
            });
        },

        methods: {
            count(value) {
                let data = this.data;

                Object.keys(this.filterStack).forEach((name) => {
                    const filter = this.filterStack[name];

                    // Break the v-model reference by creating a shallow copy.
                    const values = filter.values.slice(0);

                    // Only merge the value if our components name matches with the filter name.
                    if (this.shouldMerge(name, value, values)) {
                        values.push(value);
                    }

                    // OR filter.
                    if (this.name === name) data = filter.function(data, [value]);

                    // AND filter.
                    if (values.length) data = filter.function(data, values);
                });

                return data.length;
            },

            shouldMerge(name, value, values) {
                return this.name === name && !(values.indexOf(value) >= 0);
            }
        },

        computed: {
            ...mapGetters([
                'data',
                'filterStack'
            ]),

            active() {
                return this.values.length;
            },

            values: {
                get() {
                    return this.filterStack[this.name].values;
                },

                set(values) {
                    this.$store.commit('filter', {
                        name: this.name,
                        values
                    });
                }
            },

            rangeWithCount() {
                return this.range.map(value => Object.assign({}, value, {
                    count: this.count(value.value)
                }));
            }
        }
    };
</script>

<style lang="scss" scoped>
    label {
        position: relative;
        display: block;
        margin-bottom: 1px;
    }

    .remove-filter {
        display: none;
    }

    input[type=checkbox]:checked {
        z-index: 1;
        position: relative;

        ~ .background {
            background: #87B800;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        ~ .value {
            color: white;
            position: relative;
            z-index: 1;
        }

        ~ .remove-filter {
            display: inline-block;
            position: relative;
            float: right;
            color: white;
            margin-right: 5px;
        }
    }
</style>
