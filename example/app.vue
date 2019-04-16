<template>
    <vue-sticky-outer class="test">
        <div>asdasdads</div>
        <div>asdasdads</div>
        <div>asdasdads</div>
        <div>asdasdads</div>
        <div>asdasdads</div>
        <div>asdasdads</div>
        <div>asdasdads</div>
        <vue-sticky-item v-for="(item, index) in stikyList" :key="index" class="item-outer">
            <div class="item">{{item.name}}</div>
        </vue-sticky-item>
    </vue-sticky-outer>
</template>

<script>
// import { vueStickyOuter, vueStickyItem } from '../dist/vue-element-sticky.min.js'
import vueStickyOuter from '../src/sticky-outer.vue'
import vueStickyItem from '../src/sticky-item.vue'
export default {
    name: 'app',
    data() {
        return {
            stikyList: [
                {name: 'item1'},
                {name: 'item2'},
                {name: 'item3'},
                {name: 'item4'}
            ]
        }
    },
    component: { vueStickyOuter, vueStickyItem }
}
</script>

<style scoped>
.test {
    height: 400px;
    width: 100%;
    border: 1px solid #ccc;
}
.item-outer {
    height: 30px;
    margin-bottom: 300px;
}
.item {
    height: 30px;
    background: yellowgreen;
}
</style>
