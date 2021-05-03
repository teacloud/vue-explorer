<template>
  <form class="p-2 pt-6 space-y-6" id="app" method="post">
    <span class="p-float-label">
      <InputText
        id="name"
        type="text"
        v-model="formData.name"
        aria-describedby="name-help"
        @change="enabledSave()"
      />
      <label for="name">Name</label>
    </span>
    <span class="p-float-label">
      <InputText
        id="address"
        type="text"
        v-model="formData.address"
        @change="enabledSave()"
      />
      <label for="address">Address</label>
    </span>
    <span class="p-float-label">
      <InputText
        id="city"
        type="text"
        v-model="formData.city"
        @change="enabledSave()"
      />
      <label for="city">City</label>
    </span>
    <span class="p-float-label">
      <InputText
        id="state"
        type="text"
        v-model="formData.state"
        @change="enabledSave()"
      />
      <label for="state">State</label>
    </span>
    <span class="p-float-label">
      <InputText
        id="zipCode"
        type="text"
        v-model="formData.zipCode"
        @change="enabledSave()"
      />
      <label for="zipCode">ZipCode</label>
    </span>
    <span class="p-float-label">
      <InputText
        id="tier"
        type="text"
        v-model="formData.tier"
        @change="enabledSave()"
      />
      <label for="tier">Tier</label>
    </span>
    <span class="p-float-label">
      <InputText
        id="phone.primary"
        type="text"
        v-model="formData.phone.primary"
        @change="enabledSave()"
      />
      <label for="phone.primary">Primary phone</label>
    </span>

    <span class="p-float-label">
      <InputText
        id="phone.mobile"
        type="text"
        v-model="formData.phone.mobile"
        @change="enabledSave()"
      />
      <label for="phone.mobile">Mobile phone</label>
    </span>
    <div v-if="validForm === false" class="bg-red-300">
      All fields are required. Inputs missing.
    </div>

    <div class="space-x-1">
      <Button
        type="button"
        label="Cancel"
        class="p-button-secondary p-button-rounded w-20"
        @click="$router.push('/agents')"
        iconPos="right"
        @change="enabledSave()"
      />
      <Button
        type="button"
        label="Save"
        class="p-button-rounded w-20"
        @click="save"
        iconPos="right"
        v-bind:disabled="saveDisabled"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Agent } from "../../models/agent.model";
import AgentService from "../../services/agent.service";

export default class AddAgentComponent extends Vue {
  private saveDisabled = true;
  private validForm = false;
  private formData= {
    _id: null,
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    tier: null,
    phone: {
      primary: "",
      mobile: "",
    },
  };

  save() {
    this.validForm = this.formIsValid();
    if (this.validForm === false) return;
    else {
      this.createAgent();
    }
  }

  enabledSave() {
    this.saveDisabled = false;
  }

  private createAgent() {
    console.log("hello");
    AgentService.create(this.formData)
      .then((response) => {
        this.saveDisabled = true;
        window.alert("Update user success");
      })
      .catch((e) => {
        window.alert(`Failed: ${e}`);
      });
  }

  private hasValue(value): boolean {
    return value ? true : false;
  }
  private formIsValid(): boolean {
    for (let key in this.formData) {
      const value = this.formData[key];
      console.log(key, value);
      if (key ==="_id") { continue}
      if (this.hasValue(value) === false) return false;
      if (typeof value === "object" && value !== null) {
        console.log('hello')
        for (let subProp in value) {
          if (this.hasValue(value[subProp]) === false) return false;
        }
      }
    }
    return true;
  }
}
</script>

<style scoped lang="scss">
</style>
