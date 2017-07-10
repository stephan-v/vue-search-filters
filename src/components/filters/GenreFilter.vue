<script>
    import filter from 'lodash/filter';
    import intersection from 'lodash/intersection';
    import FilterBase from './abstract/AbstractFilter.vue';

    export default {
        extends: FilterBase,

        data() {
            return {
                name: 'rating'
            };
        },

        methods: {
            // Always accepts the data to filter and the v-model which you can name yourself here.
            filter(data, genres) {
                return filter(data, item => intersection(item.genre, genres).length);
            }
        }
    };
</script>
