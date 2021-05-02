<template>
<div> Retrieve data </div>
  <div v-for="agent in agents" :key="agent._id">{{agent._id}}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Agent } from "../../models/agent.model";
import axios from 'axios';

let agents: Agent;

export default class AgentsListComponent extends Vue {
    async created() {
    // GET request using axios with async/await
    const response = await axios.get("http://localhost:5000/agents/get");
    agents = response.data;
    console.log(response.data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
