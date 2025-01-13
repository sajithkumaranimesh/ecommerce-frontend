const authService = {

  login: async ({ email, password }) => {
    const response = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response) {
      console.log("login error");
    }
    return await response.json();
  },
};

export default authService;
