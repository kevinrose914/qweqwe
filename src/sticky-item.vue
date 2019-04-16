<template>
    <div class="sticky-item" ref="item"><slot></slot></div>
</template>

<script>
export default {
    name: 'vue-sticky-item',
    mounted () {
        this.child = this.$refs.item.children
        if (this.child.length > 1) {
            throw new Error('只能是一个子元素')
        }
    }
}
</script>

<style scoped>

</style>
