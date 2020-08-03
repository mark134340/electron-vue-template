
<template>
  <svg class="svg-icon" :style="{ width:size, height:size}" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: 'icon-svg',
  props: {
    fileName: {
      type: String,
      required: true
    },
    size:{
      type:String,
      default: '15px'
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.fileName}`
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>