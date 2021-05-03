import http from "../http-common";

class AgentService {
  getCustomersByAgentId(id: string) {
    return http.get(`/agents/${id}/customers`);
  }

  get(id: string) {
    console.log('this is id', id)
    return http.get(`/customers/${id}`);
  }

  create(data: any) {
    return http.post("/customers", data);
  }

  update(id: number, data: any) {
    return http.put(`/customers/${id.toString()}`, data);
  }

  findByName(name: string) {
    return http.get(`/customers?name=${name}`);
  }
}

export default new AgentService();