const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
      console.log("signin")
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
      console.log("signiout")
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };
  

  export default fakeAuthProvider;