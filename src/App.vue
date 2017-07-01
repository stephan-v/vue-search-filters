<template>
    <div id="app">
        <genre-filter></genre-filter>
        <rating-filter></rating-filter>
        <star-filter></star-filter>
        <year-filter></year-filter>

        <search></search>
    </div>
</template>

<script>
    // Filters.
    import GenreFilter from './components/filters/GenreFilter.vue';
    import RatingFilter from './components/filters/RatingFilter.vue';
    import StarFilter from './components/filters/StarFilter.vue';
    import YearFilter from './components/filters/YearFilter.vue';

    // SearchFilter.
    import Search from './components/Search.vue';

    export default {
        components: {
            GenreFilter,
            RatingFilter,
            StarFilter,
            YearFilter,
            Search
        }
    }
</script>
