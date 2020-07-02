<template>
  <div calss="container">
    <b-col cols="6" class="text-center">
      <AddListItemComponent @createTask="addItem($event)"/>
      <b-list-item id="item" :name="item" v-for="item in items" :key="item">
        <ListComponent :item="item" @deleteTask="deleteItem($event)" class="float-right"/>
      </b-list-item>
    </b-col>
    <b-col>

    </b-col>
  </div>
</template>

<script>
import AddListItemComponent from '../components/AddListItemComponent.vue';
import ListComponent from '../components/ListComponent.vue';

export default {
  data: () => ({
    items: ['első', 'második', 'harmadik', 'negyedik'],
  }),
  components: {
    ListComponent,
    AddListItemComponent,
  },
  methods: {
    addItem(item) {
      this.items.push(item);

      // const address = {
      //   city: 'Budapest',
      //   location: {
      //     district: 13,
      //     street: {
      //       name: 'Klapka',
      //       type: 'utca',
      //     },
      //     number: 11,
      //   },
      // };

      // console.log((address === null || address === undefined) ? undefined : address.city);
      // console.log(address?.city || undefined);

      // console.log(
      //   (address === null || address === undefined || address.location === null
      //   || address.location === undefined) ? undefined : address.location.district,
      // );
      // console.log(address?.location?.district || undefined);

      // console.log(
      //   (address === null || address === undefined || address.location === null
      //   || address.location === undefined || address.location.street === null
      //   || address.location.street === undefined) ? undefined : address.location.street.name,
      // );
      // console.log(address?.location?.street?.name || undefined);
    },
    deleteItem(item) {
      const itemIndex = this.items.indexOf(item);
      this.$delete(this.items, itemIndex);
    },
  },
};
</script>
