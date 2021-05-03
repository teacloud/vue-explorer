<template>
  <div>test component linking</div>
  <!-- {{agent.name}} -->
  {{ $route.params.id }}

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Agent } from "../../models/agent.model";
import axios from 'axios';
import AgentService from "../../services/agent.service";


export default class EditAgentComponent extends Vue {
private agent: Agent
//   created () {
//     // fetch the data when the view is created and the data is
//     // already being observed
//     this.getAgent()
//   }
    created() {
    this.getAgent();
  }
  getAgent() {
      const fetchedId = this.$route.params.id as string
      console.log(fetchedId)
      // replace `getPost` with your data fetching util / API wrapper
      AgentService.get(fetchedId)
      .then((response) => {
        this.agent = response.data;
      })
      .catch((e) => {
          console.log('hello')
      });

    //   (fetchedId, (err, post) => {
    //     // make sure this request is the last one we did, discard otherwise
    //     if (this.$route.params.id !== fetchedId) return
    //     this.loading = false
    //     if (err) {
    //       this.error = err.toString()
    //     } else {
    //       this.post = post
    //     }

  }
}
</script>

<style scoped lang="scss">

</style>
