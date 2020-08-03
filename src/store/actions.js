
const actions = {

    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////


    // /////////////////////////////////////////////
    // UI
    // /////////////////////////////////////////////


    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    updateUserInfo({ commit }, payload) {
      commit('UPDATE_USER_INFO', payload)
    },
    updateUserRole({ dispatch }, payload) {
      // 更改角色
      payload.aclChangeRole(payload.userRole)

      // 对服务器进行API调用以更改角色

      // 在localStorage中更改userInfo并存储
      dispatch('updateUserInfo', {userRole: payload.userRole})
    },
}

export default actions
