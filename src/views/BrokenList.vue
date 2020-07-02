<template>
  <div class="contianer">
    <div class="col">
      <b-button variant="info" @click="generateInfinity">generateInfinity</b-button>
      {{counter}}
      <b-list-item id="item" v-for="item in items" :key="item">
        <div :id="item">{{item}}</div>
      </b-list-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrokenList',
  data: () => ({
    fields: [
      '#',
      { key: 'item' },
    ],
    items: [],
    counter: 0,
  }),
  methods: {
    generateInfinity() {
      for (let i = 0; i < 10000; i++) { //eslint-disable-line
        this.items.push(i * 1);
      }
      this.counter += 1;
    },
  },
};
</script>
