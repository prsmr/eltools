import { createRouter, createWebHistory } from 'vue-router';

// views
import HomePage from '@/views/HomePage.vue';
import ToolPage from '@/views/ToolPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import NotFound from '@/views/404Page.vue';
import PowerCalculation from '@/tools/PowerCalculation.vue';
import CableCalculation from '@/tools/CableCalculation.vue';
import CableMaxCurrentTable from '@/tools/CableMaxCurrentTable.vue'
import FuseSizes from '@/tools/FuseSizes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // default homepage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/tool/CableCalc',
    name: 'CableCalc',
    component: CableCalculation,
  },
  {
    path: '/tool/PowerCalc',
    name: 'PowerCalc',
    component: PowerCalculation,
  },  
  {
    path: '/tool/CableMaxCurrent',
    name: 'CableMaxCurrent',
    component: CableMaxCurrentTable,
  },
  {
    path: '/tool/FuseSizes',
    name: 'FuseSizes',
    component: FuseSizes,
  },
  {
    path: '/tool/:toolID',
    name: 'ToolPage',
    component: ToolPage,
    props: true,
  },
  // Catch-All Route for 404 Page
  {
    path: '/:catchAll(.*)', // Matches any route that doesn't exist
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;