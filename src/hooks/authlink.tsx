/*const authLink = setContext(async () => {
    let token = localStorage.getItem('JWT_Token')
    const { exp } = jwtDecode(token)
    // Refresh the token a minute early to avoid latency issues
    const expirationTime = (exp * 1000) - 60000
    if (Date.now() >= expirationTime) {
      token = await refreshToken()
      // set LocalStorage here based on response;
    }
    return {
      // you can set your headers directly here based on the new token/old token
      headers: {
        ...
      }
    }
  })*/

  export const authlInk  = () =>{

    console.log('hello')
  }