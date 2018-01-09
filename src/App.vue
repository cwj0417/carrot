<template>
    <div @androidback="back">
        <text>test</text>
        <!-- <router-view style="flex:1"></router-view> -->
    </div>
</template>

<script>
    export default {
        methods: {
            back: function () {
                this.$router.back()
            }
        }
    }
</script>
