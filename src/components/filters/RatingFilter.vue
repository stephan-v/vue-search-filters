<template>
    <div class="rating">
        <div class="checkbox" v-for="(index, value) in range">
            <label>
                <input type="checkbox" :value="value">
                {{ value}} {{ index }}
            </label>
        </div><!-- /.checkbox -->
    </div><!-- /.rating -->
</template>

<script>
    export default {
        data() {
            return {
                range: {
                    0: 'sterren',
                    1: 'ster',
                    2: 'sterren',
                    3: 'sterren',
                    4: 'sterren',
                    5: 'sterren'
                }
            };
        }
    };
</script>