

const mutations = {


  // /////////////////////////////////////////////
  // COMPONENTS组件
  // /////////////////////////////////////////////
  TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state, value) {
    state.isVerticalNavMenuActive = value
  },

  

  // ////////////////////////////////////////////
  // UI
  // ////////////////////////////////////////////


  UPDATE_WINDOW_WIDTH(state, width)  { state.windowWidth       = width },
  UPDATE_WINDOW_SCROLL_Y(state, val) { state.scrollY = val },


  // /////////////////////////////////////////////
  // User/Account用户账号
  // /////////////////////////////////////////////

  // 更新状态和localstorage中的用户信息 
  UPDATE_USER_INFO(state, payload) {

    // 获取localStorage中的数据
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser

    for (const property of Object.keys(payload)) {

      if (payload[property] != null) {
        // 如果某些用户属性为null则使用在state.AppActiveUser中定义的用户默认属性
        state.AppActiveUser[property] = payload[property]

        // 更新localStorage的属性
        userInfo[property] = payload[property]
      }


    }
    // 将数据存储到localStorage中
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  },
}

export default mutations

