import http from "../http-common";

class AgentService {
  getAll() {
    return http.get("/agents");
  }

  get(id: string) {
    return http.get(`/agents/${id}`);
  }

  create(data: any) {
    return http.post("/agents", data);
  }

  update(id: string, data: any) {
    return http.put(`/agents/${id}`, data);
  }

  findByName(name: string) {
    return http.get(`/agents?name=${name}`);
  }
}



export default new AgentService();