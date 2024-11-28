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
        <div v-for="(category, index) in categories" :key="index" class="category" >
          <div class="category-header" @click="toggleCategory(index)">
            <h2>{{ category.name }}</h2>
            <span class="toggle-icon">{{ category.isCollapsed ? '▼' : '▲' }}</span>
          </div>
          <div v-show="!category.isCollapsed" class="tools">
            <div
              v-for="tool in category.tools"
              :key="tool.name"
              class="tool-tile"
            >
                <router-link :to="'/tool/' + (tool.route || 'default')">
                <div class="tool-icon">
                  <img :src="require(`@/assets/icons/${tool.icon}`)" alt="Icon" height="48px" width="48px" />
                </div>
                <div class="tool-info">
                  <h3>{{ tool.name }}</h3>
                  <p class="tool-description">{{ tool.description }}</p>
                </div>
              </router-link>
            </div>
          </div>
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
      categories: [
        {
          name: 'Grundlagen',
          isCollapsed: false,
          tools: [
            { name: 'Spannungsfallberechnung', route: 'VoltageCalc', description: 'Berechnung des Spannungsfalls', icon: 'emojione--high-voltage.png' },
            { name: 'Kabeldimensionierung', route: 'CableCalc', description: 'Dimensionierung von Kabeln und Leitungen', icon: 'material-symbols-light--cable.png' },
            { name: 'Leistungsberechnung', route: 'PowerCalc', description: 'Berechnung der elektrischen Leistung', icon: 'mdi-light--power.png' },
            { name: 'Kurzschlussstromberechnung', route: 'dummy', description: 'Berechnung des Kurzschlussstroms', icon: 'ci--dummy-square.png' },
            { name: 'Strombelastbarkeitstabelle', route: 'CableMaxCurrent', description: 'Strombelastbarkeitstabelle für Kabel und Leitungen', icon: 'material-symbols-light--table-outline.png' },
            { name: 'Sicherungsgrößen', route: 'FuseSizes', description: 'Arten und Größen von Sicherungen', icon: 'mdi--fuse.png' },
          ]
        },
        {
          name: 'Mittelspannung',
          isCollapsed: false,
          tools: [
            { name: 'Schaltgruppen', route: 'dummy', description: 'Gängige Schaltgruppen von Transformatoren', icon: 'material-symbols-light--table-outline.png' },
            { name: ' ', route: 'dummy', description: ' ', icon: 'ci--dummy-square.png' },
            { name: ' ', route: 'dummy', description: ' ', icon: 'ci--dummy-square.png' }
          ]
        },
        {
          name: 'Brandmeldetechnik',
          isCollapsed: false,
          tools: [
            { name: 'BMA Cheat Sheet', route: 'dummy', description: ' ', icon: 'ci--dummy-square.png' },
            { name: '0,6 Regel', route: 'dummy', description: ' ', icon: 'ci--dummy-square.png' },
            { name: ' ', route: 'dummy', description: ' ', icon: 'ci--dummy-square.png' }
          ]
        },
        {
          name: 'Datentechnik',
          isCollapsed: false,
          tools: [
            { name: ' ', route: 'dummy', description: ' ', icon: 'ci--dummy-square.png' },
            { name: ' ', route: 'dummy', description: ' ', icon: 'ci--dummy-square.png' },
            { name: ' ', route: 'dummy', description: ' ', icon: 'ci--dummy-square.png' }
          ]
        }           
      ]
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
  flex-direction: column;
  gap: 40px;
  padding: 20px;
}

.tools-grid a {
  text-decoration: none;
}

.category {
  margin-bottom: 30px;
}

.category-section {
  margin-bottom: 40px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 20px;
  background-color: var(--primary-color-light);
  border-radius: 5px;
  color: #fff;
}

.category-header h2 {
  margin: 0;
}

.category-header .toggle-icon {
  font-size: 1.2rem;
  color: #fff;
}

.category-header:hover {
  background-color: var(--primary-color);
}

.tools {
  padding-left: 20px;
}

.tool-tile {
  background-color: var(--tile-bg);
  padding: 20px;
  text-align: left;
  border: 1px solid #ccc;
  transition: border 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.tool-tile:hover {
  border: 1px solid #30d9ff;
}

.tool-icon i {
  font-size: 24px;
  margin-bottom: 10px;
}

.tool-info h3 {
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0;
}

.tool-description {
  font-size: 14px;
  color: var(--secondary-color);
  margin-top: 5px;
}

/* Router-Link-Styles */
router-link {
  text-decoration: none;
  color: inherit;
}

.tools {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 Kacheln nebeneinander auf Standardbildschirm */
  gap: 20px; /* Gleicher Abstand horizontal und vertikal */
}

</style>
