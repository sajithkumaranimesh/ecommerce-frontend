const authService = {

  login: async ({ username, password }) => {
    const response = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!response) {
      console.log("login error");
    }
    return response;
  },
};

export default authService;
