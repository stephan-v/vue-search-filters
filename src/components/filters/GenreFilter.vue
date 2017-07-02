<template>
    <div class="genre">
        <div class="checkbox" v-for="(index, value) in range">
            <label>
                <input type="checkbox" :value="index" v-model="genres">
                {{ index }}
            </label>
        </div><!-- /.checkbox -->
    </div><!-- /.rating -->
</template>

<script>
    export default {
        data() {
            return {
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
                ],
                genres: []
            };
        },

        watch: {
            genres(value) {
                this.$store.commit
            }
        }
    };
</script>