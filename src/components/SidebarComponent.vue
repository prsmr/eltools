<template>
  <aside :class="{ collapsed: isCollapsed, 'sidebar': true }">
    <div class="logo"><img src="../assets/logo.webp" style="width:100%;height:100%;" /></div>
    <nav>
      <ul>
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="category"
        >
          <div class="category-header" @click="toggleCategory(index)">
            <strong>{{ category.name }}</strong>
            <span class="toggle-icon">{{ category.isCollapsed ? '▼' : '▲' }}</span>
          </div>
          <ul v-if="!category.isCollapsed" class="tools-list">
            <li v-for="tool in category.tools" :key="tool">{{ tool }}</li>
          </ul>
        </li>
      </ul>
    </nav>
    
    <div class="footer">
      <p class="version">Version 2024.11.27</p>
      <p class="copyright"><a href="https://prsmr.de" target="_blank">© 2024 Tim Priesmeier</a></p>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent',
  props: {
    isCollapsed: Boolean
  },
  data() {
    return {
      categories: [
        {
          name: 'Grundlagen',
          isCollapsed: false,
          tools: ['Ohmsches Gesetz', 'Leistung', 'Widerstand']
        },
        {
          name: 'Messgeräte',
          isCollapsed: false,
          tools: ['Oszilloskop', 'Multimeter', 'Frequenzgenerator']
        }
      ]
    };
  },
  methods: {
    toggleCategory(index) {
      this.categories[index].isCollapsed = !this.categories[index].isCollapsed;
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--sidebar-bg);
  color: var(--sidebar-text);
  overflow-y: auto;
  transition: width 0.3s ease, opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.collapsed {
  width: 0;
  opacity: 0;
  visibility: hidden;
}

.logo {
  font-size: 1.0rem;
  padding: 10px;
  text-align: center;
}

nav ul {
  padding: 0;
  list-style: none;
}

.category-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  cursor: pointer;
}

.toggle-icon {
  font-size: 0.8rem;
  color: var(--sidebar-text);
}

.tools-list {
  padding-left: 20px;
}

.tools-list li {
  padding: 5px 0;
}

.footer {
  margin-top: auto;
  padding: 10px 20px;
  font-size: 0.8rem;
  color: var(--sidebar-text);
  text-align: center;
}

.version {
  margin: 0;
}

.copyright {
  margin: 5px 0 0;
}

.copyright a {
  color: #0578ff;
  margin: 0 10px;
  display: inline-flex;
  text-decoration: none
}

.copyright a:hover {
  color: #007cef;
  text-decoration: none;
}
</style>
