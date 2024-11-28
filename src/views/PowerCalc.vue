<template>
    <div :class="{ 'dark-mode': isDarkMode }">
      <SidebarComponent :isCollapsed="isSidebarCollapsed" />
      <main :class="{ 'collapsed-sidebar': isSidebarCollapsed }">
        <HeaderComponent
          :isDarkMode="isDarkMode"
          @toggleSidebar="toggleSidebar"
          @toggleDarkMode="toggleDarkMode"
        />
        <div class="tool-page">
          <div class="container">
            <h1>PAUER KALK</h1>
            <p>Das Tool steht noch nicht zur Verfügung.</p>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PowerCalc',
    data() {
      return {
        isDarkMode: false,
        isSidebarCollapsed: false,
      };
    },
    computed: {
      toolId() {
        return this.$route.params.toolId;
      }
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
  
  <style scoped>
  .tool-page {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container {
    width: 60%;
    text-align: justify;
    padding: 20px;
    border: 1px solid #fff;
  }
  
   .container h1 {
    text-decoration: underline;
  }
  </style>
  