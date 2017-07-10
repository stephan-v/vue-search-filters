<template>
    <div>
        <div class="movie" v-for="movie in movies">
            <span>Title: {{ movie.title }}</span>
            <span>Year: {{ movie.year }}</span>
            <span>Rating: {{ movie.rating }}</span>

            <ul>
                <li v-for="genre in movie.genre">{{ genre }}</li>
            </ul>
        </div><!-- /.movie -->
    </div>
</template>

<script>
    // Test dataset.
    import data from '../../data/movies';

    export default {
        created() {
            // Fake an ajax request.
            this.$store.commit('data', data);
        },

        computed: {
            movies() {
                return this.$store.getters.data;
            }
        }
    };
</script>