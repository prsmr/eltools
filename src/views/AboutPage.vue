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
          <h2>Was ist ELTOOLS?</h2>
          Eltools ist eine Sammlung von kleinen Skripten, um Elektrotechniker*innen bei der täglichen Arbeit zu helfen.
          <br /><br />
          Inspiriert wurde die Toolsammlung von den <a href="https://it-tools.tech" target="_blank">IT-Tools</a> von <a href="https://github.com/CorentinTh" target="_blank">CorentinTh</a>, die ich so nützlich wie genial finde, dass ich sie für mich und meinen Berufszweig adaptieren musste. 
          
          <h2>Helfen?</h2>
          Wenn dir ein nützliches Tool fehlt, du einen Fehler gefunden hast oder andere Verbesserungsvorschläge machen möchtest, dann erstelle gerne ein <a href="https://github.com/prsmr/eltools/issues/new" target="_blank">Issue auf GitHub</a>.
          <br />
          Alternativ schreibe mir eine <a href="mailto:eltools@prsmr.de">E-Mail</a>.

          <h2>Mitmachen</h2>
          Immer gerne.
          <br />
          Ich bin offen für Pull Requests.
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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