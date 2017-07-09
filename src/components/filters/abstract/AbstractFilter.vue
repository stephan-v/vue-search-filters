<template>
    <div class="filter">
        <h4>{{ translation }}</h4>

        <div class="checkbox" v-for="(value, index) in range" :key="index">
            <label>
                <input type="checkbox" :value="index" v-model.number="values">

                <span class="value">{{ value }}</span>
                <span class="background"></span>

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
                values: [],
                translation: ''
            };
        },

        props: {
            range: {
                required: true,
                type: Object
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

        watch: {
            values(values) {
                this.$store.commit('filter', {
                    name: this.name,
                    values
                });
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