<template>
    <div :class="{ 'dark-mode': isDarkMode }">
     <SidebarComponent :isCollapsed="isSidebarCollapsed" />
      <main :class="{ 'collapsed-sidebar': isSidebarCollapsed }">
        <HeaderComponent
          :isDarkMode="isDarkMode"
          @toggleSidebar="toggleSidebar"
          @toggleDarkMode="toggleDarkMode"
        />
        <div class="tools-grid">
          <div class="container">
            <h2>VIERHUNDERTVIER</h2>
            Diese Seite existiert nicht.

            <br />
            <br />
            <router-link :to="'/'">Zur Startseite</router-link>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
    components: {
    },
    data() {
      return {
        isDarkMode: false,
        isSidebarCollapsed: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
      },
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
      },
      toggleCategory(index) {
        this.categories[index].isCollapsed = !this.categories[index].isCollapsed;
      }
    }
  };
  </script>
  
  <style scoped>
  .tools-grid {
    display: flex;
    justify-content: center; /* Zentriert horizontal */
    align-items: center; /* Zentriert vertikal */
    gap: 40px;
    padding: 20px;
  }
  
  .container {
    width: 30%;
    text-align: justify;
    padding: 20px;
    border: 0px;
  }
  
  .tools-grid a {
    text-decoration: none;
  }
  </style>