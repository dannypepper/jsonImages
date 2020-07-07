import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { ButtonPlugin, BootstrapVueIcons, BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueI18n);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(ButtonPlugin);

Vue.config.productionTip = false;

const messages = {
  hu: {
    numbers: {
      1: 'egy',
      2: 'kettő',
      3: 'három',
      4: 'négy',
      5: 'öt',
      6: 'hat',
      7: 'hét',
      8: 'nyolc',
      9: 'kilenc',
      10: 'tíz',
      11: 'tizenegy',
      12: 'tizenkettő',
      13: 'tizenhárom',
      14: 'tizennégy',
      15: 'tizenöt',
      16: 'tizenhat',
      17: 'tizenhét',
      18: 'tizennyolc',
      19: 'tizenkilenc',
      20: 'húsz',
      21: 'huszonegy',
      22: 'huszonkettő',
      23: 'huszonhárom',
      24: 'huszonnégy',
      25: 'huszonöt',
      26: 'huszonhat',
      27: 'huszonhét',
      28: 'huszonnyolc',
      29: 'huszonkilenc',
      30: 'harminc',
      31: 'harmincegy',
      32: 'harminckettő',
      33: 'harminchárom',
      34: 'harmincnégy',
      35: 'harmincöt',
      36: 'harminchat',
      37: 'harminchét',
      38: 'harmincnyolc',
      39: 'harminckilenc',
      40: 'negyven',
      41: 'negyvenegy',
      42: 'negyvenkettő',
      43: 'negyvenhárom',
      44: 'negyvennégy',
      45: 'negyvenöt',
      46: 'negyvenhat',
      47: 'negyvenhét',
      48: 'negyvennyolc',
      49: 'negyvenkilenc',
      50: 'ötven',
      51: 'ötvenegy',
      52: 'ötvenkettő',
      53: 'ötvenhárom',
      54: 'ötvennégy',
      55: 'ötvenöt',
      56: 'ötvenhat',
      57: 'ötvenhtét',
      58: 'ötvennyolc',
      59: 'ötvenkilenc',
      60: 'hatvan',
      61: 'hatvanegy',
      62: 'hatvankettő',
      63: 'hatvanhárom',
      64: 'hatvannégy',
      65: 'hatvanöt',
      66: 'hatvanhat',
      67: 'hatvanhét',
      68: 'hatvannyolc',
      69: 'hatvankilenc',
    },
  },
  en: {
    numbers: {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nein',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'neinteen',
      20: 'twenty',
      21: 'twenty-one',
    },
  },
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
