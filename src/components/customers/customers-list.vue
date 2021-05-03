<template>
  <div class="p-2 bg-gray-200">
    <div class="text-center justify-center gap-1 pb-2">
      Agent: {{ $route.params.id }}

      <InputText
        class="w-3/6"
        type="text"
        placeholder="Search customer"
        v-model="name"
        @change="searchName"
      />

      <Button
        type="button"
        icon="pi pi-plus"
        class="p-button-raised p-button-rounded w-20"
        label="Add"
        @click="$router.push(`/customers/${$route.params.id}/add`)"
      />
    </div>
    <div class="flex flex-wrap">
      <Card
        class="m-1 w-60"
        v-for="(customer, index) in customers"
        :key="index"
      >
        <template #content>
          <div class="grid grid-cols-7 gap-1 space-x-1">
            <div class="">
              <Avatar v-bind:label="getInitials(customer)" shape="circle" />
            </div>

            <div class="col-span-6">
              <div class="font-bold">
                {{ customer.name.first }} {{ customer.name.last }}
              </div>
              <div class="text-xs">
                <div class="grid grid-cols-9">
                  <span class="pi pi-map-marker"></span>
                  <span class="col-span-8">
                    {{ customer.address }}
                  </span>
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
              @click="editCustomer(customer, index)"
            />
            <Button
              type="button"
              icon="pi pi-trash"
              label="delete"
              class="p-button-secondary p-button-rounded p-button-link p-button-sm"
              @click="deleteCustomer(customer, index)"
            />
          </span>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Customer } from "@/models/customer.model";
import { Vue } from "vue-class-component";
import CustomerService from "../../services/customer.service";

export default class CustomersListComponent extends Vue {
  private customers: any[] = [];
  private name = "";

  getCustomers() {
    const fetchedId = this.$route.params.id as string;

    return CustomerService.getCustomersByAgentId(fetchedId)
      .then((response) => {
        this.customers = response.data;
      })
      .catch((e) => {
        console.log("hlelo");
      });
  }

  getInitials(customer: Customer): string {
    const firstInitial = customer.name.first.charAt(0);
    const lastInitial = customer.name.last.charAt(0);
    return `${firstInitial}${lastInitial}`;
  }

  editCustomer(customer: Customer, index: number) {
    const link = `/customers/${customer._id}`;
    this.$router.push(link);
  }
  searchName() {
    // CustomerDataService.findByTitle(this.title)
    //   .then((response) => {
    //     this.customers = response.data;
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  created() {
    this.getCustomers();
  }
  deleteCustomer(customer) {
    CustomerService.delete(customer._id)
      .then((response) =>{
        window.alert("delete success");
      })
      .catch((e) => {
        window.alert(`delete failed: ${e}`);
      });
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
