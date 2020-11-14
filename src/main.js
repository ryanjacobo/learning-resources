import { createApp } from 'vue';
// createApp(App).mount('#app');

import App from './App.vue'
import LearningResource from './components/learning-resources/LearningResource.vue'
import StoredResources from './components/learning-resources/StoredResources.vue'
import BaseCard from './components/UI/BaseCard'
import TheHeader from './components/layouts/TheHeader.vue'
import BaseButton from './components/UI/BaseButton.vue'
import HomePage from './components/learning-resources/HomePage.vue'
import AddResource from './components/learning-resources/AddResource.vue'

const app = createApp(App)

app.component('learning-resource', LearningResource)
app.component('stored-resources', StoredResources)
app.component('base-card', BaseCard)
app.component('the-header', TheHeader)
app.component('base-button', BaseButton)
app.component('home-page', HomePage)
app.component('add-resource', AddResource)
app.mount('#app')
