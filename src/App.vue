<template>
    <div id="app">
        <div class="sidebar">
            <genre-filter :range="[
                {
                    label: 'Action',
                    value: 'Action'
                },
                {
                    label: 'Animation',
                    value: 'Animation'
                },
                {
                    label: 'Crime',
                    value: 'Crime'
                },
                {
                    label: 'Comedy',
                    value: 'Comedy'
                },
                {
                    label: 'Drama',
                    value: 'Drama'
                }
                ]"></genre-filter>
            <year-filter :range="[
                {
                    label: 2008,
                    value: 2008
                },
                {
                    label: 2009,
                    value: 2009
                },
                {
                    label: 2010,
                    value: 2010
                },
                {
                    label: 2011,
                    value: 2011
                },
                {
                    label: 2012,
                    value: 2012
                },
                {
                    label: 2013,
                    value: 2013
                },
                {
                    label: 2014,
                    value: 2014
                },
                {
                    label: 2015,
                    value: 2015
                }
                ]"></year-filter>
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
