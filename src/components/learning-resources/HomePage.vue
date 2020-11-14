<template>
  <base-card>
    <base-button
      :mode="storedResourcesMode"
      @click="setSelectedTab('stored-resources')"
      >Available Resources</base-button
    >
    <base-button :mode="addResourceMode" @click="setSelectedTab('add-resource')"
      >Add New Resource</base-button
    >
  </base-card>
  <component @add-resource="newResource" :is="selectedTab"></component>
  <!-- Need to output addResource to the 'StoredResources' component -->
  <!-- @add-resource="newResource" -->
  
</template>
    
<script>
export default {
  data() {
    return {
      selectedTab: 'stored-resources',
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    // addResource(newTitle, newDescription, newLink) {
    //   const newLearningResource = {
    //     id: new Date().toISOString(), // creates an ID based on the Date
    //     title: newTitle,
    //     description: newDescription,
    //     link: newLink,
    //   };
    //   this.resources.unshift(newLearningResource);
    //   this.selectedTab = 'stored-resources';
    // },
  },
  computed: {
    storedResourcesMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourceMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>