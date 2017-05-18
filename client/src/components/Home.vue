<template>
  <div class="">
    {{message}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters({
    message: 'getMessage'
  })
}
</script>

<style scoped>
</style>
