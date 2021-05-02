<template>
  <div class="submit-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="agent.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <input
          class="form-control"
          id="address"
          required
          v-model="agent.address"
          name="address"
        />
      </div>

      <button @click="saveagent" class="btn btn-success">Submit</button>
    </div>
</template>
<script lang="ts">

import { Agent } from "@/models/agent.model";
import { Vue } from "vue-class-component";
import AgentService from "../../services/agent.service";

export default class AddAgent extends Vue {
  private agent: Agent = {
    _id: 0,
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    tier: 0,
    phone: {
        primary: '',
        mobile: ''
    }

  };

  saveAgent() {
    var data = {
      name: this.agent.name,
      address: this.agent.address,
    };

    AgentService.create(data)
      .then((response) => {
        this.agent._id = response.data._id;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>