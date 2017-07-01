<template>
    <div class="genre">
        <div class="checkbox" v-for="(index, value) in genre">
            <label>
                <input type="checkbox" :value="value">
                {{ index }}
            </label>
        </div><!-- /.checkbox -->
    </div><!-- /.rating -->
</template>

<script>
    export default {
        data() {
            return {
                genre: [
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
        }
    };
</script>