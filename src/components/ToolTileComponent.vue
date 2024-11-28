<template>
  <div class="tool-tile">
    <router-link :to="'/tools/' + tool.name"><h3>{{ tool.name }}</h3></router-link>
    <p>{{ tool.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ToolTile',
  props: {
    tool: Object,
    isDarkMode: Boolean
  }
};
</script>

<style scoped>
.tool-tile {
  border: 1px solid #ccc;
  padding: 15px;
  text-align: left;
  background: #1a1d1e;
}

.tool-tile:hover {
  border-color: #30d9ff;
}

router-link {
  text-decoration: none;
  color: inherit;
}
</style>
