<template>
  <div class="outer" ref="outer"><slot></slot></div>
</template>

<script>
export default {
  name: 'vue-sticky-outer',
  mounted () {
    this.outerOffsetTop = this.$refs.outer.offsetTop
    this.childNodes = [...this.$refs.outer.children].filter(c => {
      return c.__vue__ && c.__vue__.$options._componentTag === 'vue-sticky-item'
    })
    this.init()
  },
  methods: {
    init () {
      if (!!IntersectionObserver) {
        let observer = new IntersectionObserver((changes) => {
          changes.forEach(e => {
            console.log(e)
            let child = e.target.children[0]
            this.changeFixedStyle(e.target, child)
          })
        }, {
          threshold: [1, 1, 1, 1, 1, 1, 1, 1]
        })
        this.childNodes.forEach(c => {
          observer.observe(c)
        })
      } else {
        this.eventInit(this.$refs.outer)
      }
    },
    eventInit (el) {
      el.addEventListener('scroll', (e) => {
        this.childNodesCallback(e.target.scrollTop)
      })
    },
    willToFixed (dom) {
      return this.getTop(dom) <= this.outerOffsetTop
    },
    getTop (dom) {
      console.log(dom.getBoundingClientRect())
      return dom.getBoundingClientRect().top
    },
    childNodesCallback (top) {
      this.childNodes.forEach((c, i) => {
        let child = c.children[0]
        this.changeFixedStyle(c, child)
      })
    },
    changeFixedStyle (parent, child) {
      if (this.willToFixed(parent)) {
        child.style.position = 'fixed'
        child.style.top = '0'
        child.style.width = '100%'
      } else {
        child.style.position = 'initial'
      }
    }
  }
}
</script>

<style scoped>
.outer {
  overflow: auto;
}
</style>
