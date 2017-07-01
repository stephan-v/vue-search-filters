<template>
    <div id="app">
        <div class="filter">
            <genre-filter></genre-filter>
        </div>

        <div class="filter">
            <rating-filter></rating-filter>
        </div>

        <div class="filter">
            <year-filter></year-filter>
        </div>

        <search></search>
    </div>
</template>

<script>
    // Filters.
    import GenreFilter from './components/filters/GenreFilter.vue';
    import RatingFilter from './components/filters/RatingFilter.vue';
    import YearFilter from './components/filters/YearFilter.vue';

    // SearchFilter.
    import Search from './components/Search.vue';

    export default {
        components: {
            GenreFilter,
            RatingFilter,
            YearFilter,
            Search
        }
    }
</script>

<style>
    .filter {
        padding: 15px;
        border: 1px solid grey;
        margin-bottom: 20px;
    }
</style>
