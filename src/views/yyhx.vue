<template>
  <div>
    数据页
  </div>
</template>
<script>
import { testGetLoad, testPost } from '@/api/test'
export default {
  data() {
    return {}
  },
  created() {},
  components: {},
  computed: {},
  methods: {},
  mounted() {
    testGetLoad({ id: '234234234234' })
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
    testPost({ id: 'werwerwer' })
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>
<style lang="scss"></style>
