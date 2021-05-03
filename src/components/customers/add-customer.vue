<template>
  <form class="p-2 pt-6 space-y-6 h-full bg-gray-200" id="app" method="post">
    <span class="p-float-label">
      <InputText
        id="first"
        type="text"
        v-model="formData.name.first"
        @change="enabledSave()"
      />
      <label for="first">First Name</label>
    </span>
    <span class="p-float-label">
      <InputText
        id="last"
        type="text"
        v-model="formData.name.last"
        @change="enabledSave()"
      />
      <label for="last">Last Name</label>
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

    <Checkbox v-model="formData.isActive" :binary="true" label="Is active"/>

    <div v-if="validForm === false" class="bg-red-300">
      All fields are required. Inputs missing.
    </div>

    <div class="space-x-1">
      <Button
        type="button"
        label="Cancel"
        class="p-button-secondary p-button-rounded w-20"
        @click="$router.push('/customers')"
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
import { Customer } from "../../models/customer.model";
import CustomerService from "../../services/customer.service";

export default class AddCustomerComponent extends Vue {
  private saveDisabled = true;
  private agent_id = '';
  private validForm = false;
  private formData = {
    _id: null,
    agent_id: this.agent_id,
    guid: null,
    isActive: true,
    balance: "$0",
    age: null,
    eyeColor: "",
    name: {
      first: "",
      last: "",
    },
    company: "",
    email: "",
    phone: "",
    address: "",
    registered: "",
    latitude: "19.0248098",
    longitude: "19.0248098",
    tags: [],
  };
  created() {
    this.agent_id = this.$route.params.agentId as string;
  }
  save() {
    this.validForm = this.formIsValid();
    if (this.validForm === false) return;
    else {
      this.createCustomer();
    }
  }

  enabledSave() {
    this.saveDisabled = false;
  }

  private createCustomer() {
    console.log("hello");
    CustomerService.create(this.formData)
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
      if (key === "_id") {
        continue;
      }
      if (this.hasValue(value) === false) return false;
      if (typeof value === "object" && value !== null) {
        console.log("hello");
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
