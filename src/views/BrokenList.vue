<template>
  <b-container>
    <b-button variant="info" @click="generateInfinity">generateInfinity</b-button>
    {{counter}}
    <b-list-group-item id="item" v-for="item in items" :key="item">
      <div :id="item">{{item}}</div>
    </b-list-group-item>
    <b-form-input type="text" v-model="number"></b-form-input>
    <div v-if="number">
      {{ $t(`numbers.${number}`) }}
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'BrokenList',
  data: () => ({
    items: [],
    counter: 0,
    number: null,
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
