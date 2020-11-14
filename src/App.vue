<template>
<the-header></the-header>
<home-page></home-page>
<!-- <stored-resources></stored-resources> -->
<!--<stored-resources :resources="storedResources"></stored-resources>--> <!--if storedResources data where in App and you need to pass the storedRources to StoredResources component-->
<!-- <learning-resource></learning-resource> -->
</template>

<script>
// import StoredResources from './components/learning-resources/StoredResources';
// import LearningResource from './components/learning-resources/LearningResource'


export default {
    
    components: {
        // StoredResources, // StoredResources has been imported in main.js
        // LearningResource
    },
    data() {
        return {
 
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>