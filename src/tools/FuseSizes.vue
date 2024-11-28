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
            <h1>Sicherungsgrößen</h1>
            <p>Standardgrößen von Sicherungen.</p>
            <p></p>
            <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td v-for="cell in row" :key="cell">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FuseSizes',    data() {
      return {
        isDarkMode: false,
        isSidebarCollapsed: false,   
        headers: ['D01', 'D02', 'D03',      'NH000',    'NH00',     'NH0',      'NH1',      'NH2',  'NH3',    'NH4'],
        rows: [
        ['2 A',     '20 A',     '80 A',     '2 A',      '2 A',      '6 A',      '16 A',     '35 A', '144 A',  '400 A'],
        ['4 A',     '25 A',     '100 A',    '4 A',      '4 A',      '10 A',     '25 A',     '50 A', '180 A',  '630 A'],
        ['6 A',     '32 A',     '',         '6 A',      '6 A',      '16 A',     '35 A',     '63 A', '231 A',  '800 A'], 
        ['10 A',    '35 A',     '',         '10 A',     '10 A',     '20 A',     '50 A',     '80 A', '289 A',  '1000 A'],
        ['13 A',    '40 A',     '',         '16 A',     '16 A',     '25 A',     '63 A',     '100 A', '315 A', '1250 A'],
        ['16 A',    '50 A',     '',         '20 A',     '20 A',     '32 A',     '80 A',     '108 A', '355 A', ''],
        ['',        '63 A',     '',         '25 A',     '25 A',     '40 A',     '100 A',    '125 A', '361 A', ''],
        ['',        '',         '',         '35 A',     '35 A',     '50 A',     '125 A',    '144 A', '400 A', ''],
        ['',        '',         '',         '40 A',     '40 A',     '63 A',     '160 A',    '160 A', '425 A', ''],
        ['',        '',         '',         '50',       '50 A',     '80 A',     '200 A',    '180 A', '455 A', ''],
        ['',        '',         '',         '63 A',     '63 A',     '100 A',    '224 A',    '200 A', '500 A', ''],
        ['',        '',         '',         '100 A',    '100 A',    '125 A',    '250 A',    '224 A', '577 A', ''],
        ['',        '',         '',         '',         '125 A',    '160 A',    '',         '231 A', '630 A', ''],
        ['',        '',         '',         '',         '160 A',    '',         '',         '250 A', '722 A', ''],
        ['',        '',         '',         '',         '',         '',         '',         '289 A', '910 A', ''],
        ['',        '',         '',         '',         '',         '',         '',         '300 A', '',      ''],
        ['',        '',         '',         '',         '',         '',         '',         '315 A', '',      ''],
        ['',        '',         '',         '',         '',         '',         '',         '355 A', '',      ''],
        ['',        '',         '',         '',         '',         '',         '',         '361 A', '',      ''],
        ['',        '',         '',         '',         '',         '',         '',         '400 A', '',      ''],
        ['',        '',         '',         '',         '',         '',         '',         '455 A', '',      ''],

      ],
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

  table {
    width: 95%;
  }

  th {
    border-bottom: 1px solid #fff;
  }
 </style>
  