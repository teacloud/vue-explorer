<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <agents-list-component msg="Welcome to Your Vue.js + TypeScript App"/>
    <agent-detail-component msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AgentDetailComponent from "@/components/agents/agent-detail.vue"; // @ is an alias to /src
import AgentsListComponent from "@/components/agents/agents-list.vue"; // @ is an alias to /src

@Options({
  components: {
    AgentDetailComponent,
    AgentsListComponent,
  },
})
export default class Agent extends Vue {}
</script>