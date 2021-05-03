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

  update(id: string, data: any) {
    return http.put(`/customers/${id}`, data);
  }

  findByName(name: string) {
    return http.get(`/customers?name=${name}`);
  }

  delete(id: string){
    return http.delete(`/customers/${id}`);
  }
}

export default new AgentService();