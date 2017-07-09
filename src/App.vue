<template>
    <div id="app">
        <div class="sidebar">
            <genre-filter :range="{ Action: 'Action', Animation: 'Animation', Crime: 'Crime', Comedy: 'Comedy', Drama: 'Drama' }"></genre-filter>
        </div><!-- /.sidebar -->

        <div class="content">
            <search></search>
        </div>
    </div>
</template>

<script>
    // Filters.
    import GenreFilter from './components/filters/GenreFilter.vue';

    // SearchFilter.
    import Search from './components/Search.vue';

    export default {
        components: {
            GenreFilter,
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
</style>
