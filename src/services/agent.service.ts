import http from "../http-common";

class AgentService {
  getAll() {
    return http.get("/agents");
  }

  get(id: string) {
    console.log('this is id', id)
    return http.get(`/agents/${id}`);
  }

  create(data: any) {
    return http.post("/agents", data);
  }

  update(id: number, data: any) {
    return http.put(`/agents/${id.toString()}`, data);
  }

  findByName(name: string) {
    return http.get(`/agents?name=${name}`);
  }
}



export default new AgentService();