<template>
  <div :class="{ dark: isDarkMode }" class="app-container">
    <SidebarComponent :isCollapsed="isSidebarCollapsed" />
    <div class="main-content">
      <HeaderComponent 
        :isDarkMode="isDarkMode" 
        @toggleDarkMode="toggleDarkMode" 
        @toggleSidebar="toggleSidebar"
      />

      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    SidebarComponent,
    HeaderComponent,
  },
  data() {
    return {
      isSidebarCollapsed: false,
      isDarkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
      
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
};
</script>

<style scoped></style>
