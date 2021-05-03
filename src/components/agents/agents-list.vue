<template>
<div class="p-2 bg-blue-50">
  <div class="text-center justify-center gap-1 pb-2">
    <InputText
      class="w-3/6"
      type="text"
      placeholder="Search agent"
      v-model="name"
    />
    <Button
      type="button"
      icon="pi pi-search"
      class="p-button-secondary p-button-link p-button-rounded w-1/6"
      @click="searchName"
      iconPos="right"
    />
    <Button
      type="button"
      icon="pi pi-plus"
      class="p-button-raised p-button-rounded w-20"
      label="Add"
      @click="searchName"
    />
  </div>
  <div class="flex flex-wrap">
    <Card
      class="m-1 w-60"
      v-for="(agent, index) in agents"
      :key="index"
    >
      <template #content>
        <div class="grid grid-cols-7 gap-1 space-x-1">
          <div class="">
            <Avatar v-bind:label="getInitials(agent)" shape="circle" />
          </div>

          <div class="col-span-6">
            <div class="font-bold">
              {{ agent.name }}
            </div>
            <div class="text-xs">
              <div class="grid grid-cols-9">
                <span class="pi pi-map-marker"></span>
                <span class="col-span-8">
                  {{ agent.address }}
                  <div>{{ agent.city }}, {{ agent.state }}</div>
                </span>
              </div>
              <div class="grid grid-cols-9">
                <span class="pi pi-phone"></span>
                <span class="col-span-8"> {{ agent.phone.primary }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <span class="pl-6">
          <Button
            type="button"
            icon="pi pi-pencil"
            label="edit"
            class="p-button-secondary p-button-rounded p-button-link p-button-sm"
             @click="editAgent(agent, index)"
          />
        </span>
        <span>
          <Button
            type="button"
            icon="pi pi-users"
            label="customers"
            class="p-button-secondary p-button-rounded p-button-link p-button-sm"
            @click="showCustomers(agent, index)"
          />
        </span>
      </template>
    </Card>
  </div>
</div>
</template>

<script lang="ts">
import { Agent } from "@/models/agent.model";
import { Vue } from "vue-class-component";
import AgentService from "../../services/agent.service";

export default class AgentsList extends Vue {
  private agents: any[] = [];
  private name = "";

  getAgents() {
    return AgentService.getAll()
      .then((response) => {
        this.agents = response.data;
      })
      .catch((e) => {
        console.log('hlelo')
      });
  }

  getInitials(agent: Agent): string {
    const namesArray = agent.name.trim().split(" ");
    if (namesArray.length === 1) return `${namesArray[0].charAt(0)}`;
    else
      return `${namesArray[0].charAt(0)}${namesArray[
        namesArray.length - 1
      ].charAt(0)}`;
  }

  showCustomers(agent: Agent, index: number) {
    console.log("show customers")

  }
  editAgent(agent: Agent, index: number) {
    const link = `/agents/${agent._id}`;
    this.$router.push(link);

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

  created() {
    this.getAgents();
  }
}
</script>

<style lang="scss" scoped>
::v-deep(.p-card) {
  .p-card-content {
    padding: 0;
  }
  .p-card-body {
    padding: 0.5rem;
  }
  .p-card-footer {
    padding: 0rem;
  }
}
</style>
