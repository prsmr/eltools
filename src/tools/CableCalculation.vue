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
          <h1>Kabeldimensionierung</h1>
          <p>Dimensionierung von Kabeln und Leitungen.</p>
          <p></p>

          <div class="input-group">
            <label>
              <input type="radio" value="dc" v-model="type" /> Gleichstrom (DC)
            </label>
            <label>
              <input type="radio" value="ac" v-model="type" /> Drehstrom (AC)
            </label>       
          </div>

    <div v-if="type === 'dc'">
      <div class="form-group">
        <label>Spannung (U in V):</label>
        <input
          type="number"
          v-model.number="voltage"
          @input="updateDcParams('voltage')"
        />
      </div>
      <div class="form-group">
        <label>Strom (I in A):</label>
        <input
          type="number"
          v-model.number="current"
          @input="updateDcParams('current')"
        />
      </div>
      <div class="form-group">
        <label>Leistung (P in W):</label>
        <input
          type="number"
          v-model.number="power"
          @input="updateDcParams('power')"
        />
      </div>
    </div>

    <div v-if="type === 'ac'">
      <div class="form-group">
        <label>max. Leistung (in kW):</label>
        <input
          type="number"
          v-model.number="voltage"
          @input="updateAcParams('voltage')"
        />
      </div>      
      <div class="form-group">
        <label>Länge (in m):</label>
        <input
          type="number"
          v-model.number="current"
          @input="updateAcParams('current')"
        />
      </div>
      <div class="form-group">
        <label>Leistungsfaktor (cos φ):</label>
        <input
          type="number"
          v-model.number="powerFactor"
          step="0.01"
          min="0"
          max="1"
          @input="updateAcParams('powerFactor')"
        />
      </div>
    </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ToolPage',
  data() {
    return {
      isDarkMode: false,
      isSidebarCollapsed: false,
      type: "dc",
      voltage: 0,
      current: 0,
      powerFactor: 1,
      power: 0,      
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
    },
    updateDcParams(changedField) {
      if (changedField === "voltage" && this.current) {
        this.power = this.voltage * this.current;
      } else if (changedField === "current" && this.voltage) {
        this.power = this.voltage * this.current;
      } else if (changedField === "power") {
        if (this.voltage) {
          this.current = this.power / this.voltage;
        } else if (this.current) {
          this.voltage = this.power / this.current;
        }
      }
    },
    updateAcParams(changedField) {
      if (changedField === "voltage" && this.current && this.powerFactor) {
        this.power = Math.sqrt(3) * this.voltage * this.current * this.powerFactor;
      } else if (changedField === "current" && this.voltage && this.powerFactor) {
        this.power = Math.sqrt(3) * this.voltage * this.current * this.powerFactor;
      } else if (changedField === "powerFactor" && this.voltage && this.current) {
        this.power = Math.sqrt(3) * this.voltage * this.current * this.powerFactor;
      } else if (changedField === "power") {
        if (this.voltage && this.current) {
          this.powerFactor = this.power / (Math.sqrt(3) * this.voltage * this.current);
        } else if (this.voltage && this.powerFactor) {
          this.current = this.power / (Math.sqrt(3) * this.voltage * this.powerFactor);
        } else if (this.current && this.powerFactor) {
          this.voltage = this.power / (Math.sqrt(3) * this.current * this.powerFactor);
        }
      }
    },
  },
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

.input-group {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 10%;
  padding: 8px;
  border: 2px solid #222e2c;
  border-radius: 4px;
  box-sizing: border-box;
  float: right;
}

input:focus,
input:hover {
  border-color: #30d4fe;
  outline: none;
}

input[disabled] {
  background: #f5f5f5;
  cursor: not-allowed;
}
</style>
