<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="titleInput"/>
        <!-- <input id="title" name="title" type="text" ref="titleInput"/> -->
      </div>
      <div class="form-control">
        <label for="title">Description</label>
        <textarea id="description" name="description" row="3" v-model="descriptionInput"></textarea>
        <!-- <textarea id="description" name="description" row="3" ref="descriptionInput"></textarea> -->
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model="linkInput"/>
        <!-- <input id="link" name="link" type="url" ref="linkInput"/> -->
      </div>

      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
    // inject: ['addResource'],
    data() {
        return {
            titleInput: '',
            descriptionInput: '',
            linkInput: '',
        }
    },
    methods: {
        submitData() {
            this.$emit('add-resource', this.titleInput, this.descriptionInput, this.linkInput)

            // const title = this.$refs.titleInput.value
            // const description = this.$refs.descriptionInput.value
            // const link = this.$refs.linkInput.value

            // this.addResource(title, description, link)
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>