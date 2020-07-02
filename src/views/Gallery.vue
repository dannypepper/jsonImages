<template>
  <div class="container">
    <b-form-select v-model="pictures" :options="options" class="w-25 mb-2"/>
    <b-table head-variant="dark"
      table-variant="light"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="lg"
      id="gallery"
      :items="pictures"
      :fields="fields"
    >
    <!-- <template v-slot:cell="data">
      {{data.albumId}}
    </template> -->
    <!-- <template v-slot:cell(title)="data">
      {{data.title}}
    </template>
    <template v-slot:cell(thumbnailUrl)="data">
      <img :src="data.thumbnailUrl">
    </template> -->
    </b-table>
  </div>
</template>

<script>
import pictures from './pictures.json';

export default {
  data: () => ({
    fields: [
      { key: 'id', label: 'ID' },
      { key: 'title', label: 'Title' },
      { key: 'thumbnailUrl', label: 'URL' },
    ],
    pictures,
    sortBy: 'albumId',
    sortDesc: true,
    options: [
      { value: '' },
    ],
  }),
};
</script>
