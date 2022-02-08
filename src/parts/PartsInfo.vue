<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PartInfo',
  props: {
    partType: {
      type: String,
      required: true,
    },
    id: {
      type: [Number, String],
      required: true,
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  mixins: [getPartsMixin],
  computed: {
    part() {
      const { partType, id } = this;

      return this.parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>

<style scoped>

</style>
