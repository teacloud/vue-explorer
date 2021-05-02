<template>
  <TabMenu :model="items" />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class App extends Vue {
  public items = [  {
                   label:'Agents',
                   icon:'pi pi-fw pi-user',
                   to: '/agents' },
                   {
                   label:'Customers',
                   icon:'pi pi-fw pi-users',
                   to: '/' },
                   ] 
  public message = '';
  public text = '';
  public greet() {
    if (this.text.length) {
      this.message = 'Hello ' + this.text;
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
  text-align: center;
}
body #app .p-button {
  margin-left: .2em;
}
form {
  margin-top: 2em;
}
</style>