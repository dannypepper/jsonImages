<template>
<b-row>
  <b-col cols="9">
    <b-form-input v-model="item"></b-form-input>
  </b-col>
  <b-col>
    <b-button variant="danger" @click="deleteItem" class="float-right">
      Delete
    </b-button>
  </b-col>
</b-row>
</template>
<script>

export default {
  name: 'ListComponent',
  props: {
    item: String,
  },
  methods: {
    deleteItem() {
      this.$emit('deleteTask', this.item);
    },
  },
};
</script>

<style scoped>

</style>
