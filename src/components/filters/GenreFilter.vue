<template>
    <div class="genre">
        <div class="checkbox" v-for="(index, value) in range">
            <label>
                <input type="checkbox" :value="index" v-model="genre">
                {{ index }}
            </label>
        </div><!-- /.checkbox -->
    </div><!-- /.rating -->
</template>

<script>
    import { mapGetters } from 'vuex';
    import filter from 'lodash/filter';
    import intersection from 'lodash/intersection';

    export default {
        data() {
            return {
                name: 'genre',
                genre: [],
                range: [
                    'Action',
                    'Adventure',
                    'Comedy',
                    'Crime',
                    'Drama',
                    'Family',
                    'Fantasy',
                    'History',
                    'Horror',
                    'Sci-Fi',
                    'Thriller'
                ]
            };
        },

        watch: {
            genre(genres) {
                if (genres.length) {
                    this.setActive(true);

                    // The filter logic for this particular filter.
                    const data = this.applyFilter(genres);

                    this.$store.commit('filter', data);
                } else {
                    this.setActive(false);
                }
            }
        },

        methods: {
            setActive(value) {
                this.$store.commit('activeFilters', {
                    name: this.name,
                    active: value
                });
            },

            applyFilter(genres) {
                // The movie should have all the genres we select to fit our checkboxes.

                return filter(this.data, (item) => {
                    return intersection(item.genre, genres).length
                });
            }
        },

        computed: {
            ...mapGetters([
                'data'
            ])
        }
    };
</script>