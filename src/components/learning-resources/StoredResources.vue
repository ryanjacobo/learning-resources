<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :resource-title="res.title"
      :resource-description="res.description"
      :resource-link="res.link"
    >
    </learning-resource>
  </ul>
</template>

<script>

export default {

  // props: ['id','title', 'description', 'link'],
  data() {
    return {
      resources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  methods: {
    newResource(newTitle, newDescription, newLink) {
      const resource = {
        id: new Date().toISOString(), // creates an ID based on the Date
        title: newTitle,
        description: newDescription,
        link: newLink,
      };
      this.resources.unshift(resource);
      this.$emit('new-resource')
      this.selectedTab = 'stored-resources'
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>