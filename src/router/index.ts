import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import EditAgentComponent from "../components/agents/edit-agent.vue"
import AddAgentComponent from "../components/agents/add-agent.vue"
import AgentListComponent from "../components/agents/agents-list.vue"
import CustomersListComponent from "../components/customers/customers-list.vue"
import ComingSoonComponent from "../components/common-ui/coming-soon.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/agents",
    name: "agents",
    component: AgentListComponent
  },
  {
    path: "/agents/:id",
    component: EditAgentComponent
  },
  {
    path: "/agents/add",
    component: AddAgentComponent
  },
  {
    path: "/agents/:id/customers",
    component: CustomersListComponent
  },
  {
    path: "/comingsoon",
    component: ComingSoonComponent
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
