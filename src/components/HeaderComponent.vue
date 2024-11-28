<template>
  <header class="header">
    <button @click="$emit('toggleSidebar')" class="menu-btn">☰</button>
    
    <router-link :to="'/'">
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3l10 9h-3v9h-5v-6H10v6H5v-9H2z" />
      </svg>
    </router-link>
    
    <input type="text" placeholder="Suchen..." class="search-bar" />
    
    <div class="dropdown">
      <select id="language-select">
        <option>DE</option>
      </select>
    </div>
    
    <button @click="$emit('toggleDarkMode')" class="theme-toggle">
      {{ isDarkMode ? '🌙' : '☀️' }}
    </button>
    
    <router-link :to="'/about/'">ℹ️</router-link>
    
    <a href="https://github.com/prsmr/eltools" target="_blank" aria-label="GitHub Repository">
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.09.682-.217.682-.484v-1.74c-2.782.605-3.369-1.343-3.369-1.343-.454-1.15-1.11-1.458-1.11-1.458-.908-.62.07-.608.07-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.944 0-1.09.39-1.982 1.03-2.68-.103-.253-.447-1.273.097-2.654 0 0 .84-.269 2.75 1.025A9.545 9.545 0 0112 6.844a9.53 9.53 0 012.5.338c1.91-1.294 2.75-1.025 2.75-1.025.544 1.38.2 2.4.098 2.654.64.698 1.03 1.59 1.03 2.68 0 3.842-2.338 4.687-4.566 4.935.36.31.68.92.68 1.854v2.748c0 .269.18.579.688.482A10.014 10.014 0 0022 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    </a>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    isDarkMode: Boolean
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--header-bg);
  color: var(--header-text);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--header-text);
}

.home-icon {
  margin: 0 10px;
  display: inline-flex;
  color: var(--header-text);
}

.search-bar {
  flex: 1;
  margin: 0 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.dropdown select {
  padding: 5px;
  margin-right: 10px;
}

.theme-toggle {
  margin: 0 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--header-text);
}

.header a {
  text-decoration: none;
  color: var(--header-text);
  margin: 0 10px;
  display: inline-flex;
}

.header a:hover {
  text-decoration: underline;
}

.header svg {
  fill: currentColor;
}
</style>
