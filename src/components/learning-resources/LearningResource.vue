<template>
  <!-- this component allows the styling of storedResources data -->
  <li>
    <base-card>
      <header>
        <h3>{{ resourceTitle }}</h3>
        <base-button mode="flat">Delete</base-button>
      </header>
      <p>{{ resourceDescription }}</p>
      <nav>
        <a :href="resourceLink">View Resource</a>
      </nav>
 </base-card>
  </li>
</template>

<script>
// import StoredResources from './StoredResources'
export default {
  // components: { StoredResources },
  // inject: ['storedResources'],
  props: ['id', 'resourceTitle', 'resourceDescription', 'resourceLink'],
};
</script>

<style scoped>
li {
  
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
