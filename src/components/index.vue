<template>
  <div class="index">
    <nav>
      <router-link to="/titleArea">titleArea</router-link>
      <router-link to="/other">other</router-link>
    </nav>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
// .index
</style>
