

// /////////////////////////////////////////////
// 变量
// /////////////////////////////////////////////

const userDefaults = {
  uid         : 0,          // From Auth
  displayName : "葡萄没有泥", // From Auth
  about       : "关于我...",
  photoURL    : require("@/assets/images/portrait/small/avatar-s-11.jpg"), // From Auth
  status      : "online",
  userRole    : "admin"
}

const userInfoLocalStorage = JSON.parse(localStorage.getItem("userInfo")) || {}

// 设置当前用户的默认值
// 可以通过身份验证提供程序或其他插件/软件包添加更多数据
const getUserInfo = () => {
  let userInfo = {}

  // 更新用户的属性
  Object.keys(userDefaults).forEach((key) => {
    // 如果localStorage中有该属性 => 则使用它
    userInfo[key] = userInfoLocalStorage[key] ?  userInfoLocalStorage[key] : userDefaults[key]
  })

  // 包括来自localStorage的属性
  Object.keys(userInfoLocalStorage).forEach((key) => {
    if(userInfo[key] == undefined && userInfoLocalStorage[key] != null) userInfo[key] = userInfoLocalStorage[key]
  })

  return userInfo
}



// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
    AppActiveUser           : getUserInfo(),
    scrollY                 : 0,
    windowWidth				: null,

    
}

export default state
