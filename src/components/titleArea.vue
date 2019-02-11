<template>
  <div class="titleArea">
    titleArea
    <h2>大标题</h2>
    <titleArea :title="first.title" :subTitle="first.subTitle" :moreText="first.moreText" :eventTypeMore="'s'" @s="ss"></titleArea>
    <h2>小标题</h2>
    <titleArea :title="first.title" :subTitle="first.subTitle" :moreText="first.moreText" :eventTypeMore="'s'" @s="ss"></titleArea>
    <h2>58标题</h2>
    <titleArea :title="first.title" :subTitle="first.subTitle" :moreText="first.moreText" :eventTypeMore="'s'" @s="ss"></titleArea>
  </div>
</template>

<script>
import {titleArea} from 'oasiscarefirst'
export default {
  props: {},
  data () {
    return {
      first: {
        title: '标题标题',
        subTitle: '标题标题标题标题标题标题标题题标题标题题标题标题题标题标题题标题标题题标题标题题标题标题题标题标题题标题标题题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        moreText: '标题'
      }
    }
  },
  computed: {
  },
  components: {
    titleArea
  },
  methods: {
    ss () {
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .titleArea
    // color: red

</style>
