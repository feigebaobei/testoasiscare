<template>
  <div class="titleArea">
    titleArea
  </div>
</template>

<script>
export default {
  props: {
    hasImg: {
      type: Boolean;
      default: true
    },
    imgUrl: {
      type: String;
      default: ''
    },
    title: {
      type: String;
      default: ''
    },
    subTitle: {
      type: String;
      default: ''
    },
    moreText: {
      type: String;
      default: ''
    },
    hasMore: {
      type: Boolean;
      default: true
    },
    hasDirectionIcon: {
      type: Boolean;
      default: true
    },
    directionImgUrl: {
      type: String;
      default: ''
    },
    directionImgSwitchDirection: {
      type: Boolean;
      default: true
    },
    directionImgDirection: {
      type: String;
      default: '90deg'
    },
    eventType: {
      type: String;
      default: ''
    },
    data: {
      default () {
        return {}
      }
    },
    eventTypeMore: {
      type: String;
      default: ''
    },
    dataMore: {
      default () {
        return {}
      }
    }
  },
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
  
  .titleArea
    color: green

</style>
