<script>
    import FilterBase from './abstract/AbstractFilter.vue';

    export default {
        extends: FilterBase,

        data() {
            return {
                name: 'year'
            };
        },

        methods: {
            // Always accepts the data to filter and the v-model, which you can name yourself here.
            filter(data, years) {
                return data.filter(item => years.indexOf(item.year) > -1);
            }
        }
    };
</script>
