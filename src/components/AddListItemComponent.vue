<template>
  <div class="container">
    <b-icon-plus-square-fill @click="openForm" v-show="!isCreating" />
    <div class="row" v-show="isCreating">
      <div class="col">
        <form @submit.prevent="sendForm">
          <b-form-group label="Task">
            <b-form-input v-model="itemTitle" type="text" ref="task" />
            <b-button variant="info" @click="sendForm">Create</b-button>
            <b-button variant="warning" @click="closeForm">Cancel</b-button>
          </b-form-group>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemTitle: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.itemTitle.length > 0) {
        const title = this.itemTitle;
        this.$emit('createTask', title);
        this.itemTitle = '';
        this.isCreating = false;
      }
    },
  },
};
</script>
