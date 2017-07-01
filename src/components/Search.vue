<template>
    <div>
        <div class="movie" v-for="movie in movies">
            <div>Title: {{ movie.title }}</div>
            <div>Year: {{ movie.year }}</div>
            <div>Rating: {{ movie.rating }}</div>

            <ul>
                <li v-for="genre in movie.genre">{{ genre }}</li>
            </ul>
        </div><!-- /.movie -->
    </div>
</template>

<script>
    // Test dataset.
    import movies from '../../data/movies';

    export default {
        data() {
            return {
                movies
            };
        }
    };
</script>