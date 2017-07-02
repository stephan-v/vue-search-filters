<template>
    <div class="rating">
        <div class="checkbox" v-for="value in yearRange">
            <label>
                <input type="checkbox" :value="year(value)" v-model="years">
                {{ year(value) }}
            </label>
        </div><!-- /.checkbox -->
    </div><!-- /.rating -->
</template>

<script>
    export default {
        data() {
            return {
                range: [1979, 2017],
                years: []
            };
        },

        computed: {
            yearRange() {
                return this.range[1] - this.range[0];
            }
        },

        methods: {
            year(value) {
                return value + this.range[0];
            }
        }
    };
</script>