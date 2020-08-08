<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default'
const dashLayout = '-layout'

export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + dashLayout
    }
  },
  data: () => ({
  }),
};
</script>