<template>
    <div id="app">
        <div class="sidebar">
            <div class="filter">
                <genre-filter></genre-filter>
            </div><!-- /.filter -->

            <div class="filter">
                <rating-filter></rating-filter>
            </div><!-- /.filter -->

            <div class="filter">
                <year-filter></year-filter>
            </div><!-- /.filter -->
        </div><!-- /.sidebar -->

        <div class="content">
            <search></search>
        </div>
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
    #app {
        width: 1100px;
        margin: 0 auto;
    }
    .sidebar {
        float: left;
        width: 20%;
    }
    .content {
        float: left;
        width: 75%;
        margin-left: 5%;
    }
    .filter {
        padding: 15px;
        border: 1px solid grey;
        margin-bottom: 20px;
    }
</style>
