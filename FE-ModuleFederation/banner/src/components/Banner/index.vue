<template>
  <section class="banner">
    SUPER SALE!! 20% OFF FOR ORDERS OVER 100$
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
//@ts-ignore

export default defineComponent({
  name: "Banner",
  props: {
  },
});
</script>
<style lang="scss">
@import "@/assets/scss/variables";
.banner{
  padding: 8px 0px;
  text-align: center;
  color: white;
  background-color: $primary-color;
}
</style>
