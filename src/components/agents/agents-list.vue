<template>
<div class="p-6">

        <InputText type="text"  
        placeholder="Search by name"
        v-model="name"/>
        <Button type="button" label="Search" @click="searchName"/>
</div>
    <div class="col-md-6">
      <h4>Agents List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(agent, index) in agents"
          :key="index"
          @click="setActiveAgent(agent, index)"
        >
          {{ agent.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentAgent">
        <h4>Agent</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentAgent.name }}
        </div>
        <div>
          <label><strong>Address:</strong></label>
          {{ currentAgent.address }}
          <div>
          {{ currentAgent.city }} , {{currentAgent.state}} {{currentAgent.zipCode}}
        </div>
        </div>
        

        <a
          class="badge badge-warning"
          :href="'/agents/' + currentAgent.id"
        >
          Edit
        </a>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import AgentService from "../../services/agent.service";

export default class AgentsList extends Vue {
  private agents: any[] = [];
  private currentAgent: any = null;
  private currentIndex = -1;
  private title = "";

  retrieveAgents() {
    AgentService.get("101")
      .then((response) => {
        console.log("simple get", response.data);
      })
      .catch((e) => {
        console.log("simple get", e);
      });
    return AgentService.getAll()
      .then((response) => {
        this.agents = response.data;
        console.log("get all", response.data);
      })
      .catch((e) => {
        console.log("get all", e);
      });
  }

  refreshList() {
    this.retrieveAgents();
    this.currentAgent = null;
    this.currentIndex = -1;
  }

  setActiveAgent(agent: any, index: number) {
    this.currentAgent = agent;
    this.currentIndex = index;
  }

  removeAllAgents() {
    // AgentService.delete()
    //   .then((response) => {
    //     console.log(response.data);
    //     this.refreshList();
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  searchName() {
    // AgentDataService.findByTitle(this.title)
    //   .then((response) => {
    //     this.agents = response.data;
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  mounted() {
    this.retrieveAgents();
  }
}
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
