import mutations from "./mutations.js";
import actions from "./actions.js";
// import getters from "../coaches/getters.js";

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions
};
