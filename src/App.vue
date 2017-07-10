<template>
    <div id="app">
        <div class="sidebar">
            <genre-filter :range="{ Action: 'Action', Animation: 'Animation', Crime: 'Crime', Comedy: 'Comedy', Drama: 'Drama' }"></genre-filter>
            <year-filter :range="{ 2008: 2008, 2009: 2009, 2010: 2010, 2011: 2011, 2012: 2012, 2013: 2013, 2014: 2014, 2015: 2015 }"></year-filter>
        </div><!-- /.sidebar -->

        <div class="content">
            <search></search>
        </div>
    </div>
</template>

<script>
    // Filters.
    import GenreFilter from './components/filters/GenreFilter.vue';
    import YearFilter from './components/filters/YearFilter.vue';

    // SearchFilter.
    import Search from './components/Search.vue';

    export default {
        components: {
            GenreFilter,
            YearFilter,
            Search
        }
    };
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
</style>
