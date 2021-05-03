<template>
  <TabMenu :model="items" />
  <router-view/>
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
                   to: '/comingsoon' },
                   ] 

}
</script>
<style>

</style>