const authService = {
  login: async ({ email, password }) => {
    const response = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response) {
      throw new Error("login error");
    }
    return await response.json();
  },

  register: async ({ name, email, password, passwordConfirm }) => {
    const response = await fetch("http://localhost:3000/api/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, passwordConfirm }),
    });
    if (!response.ok) {
      throw new Error("login error");
    }
    return await response.json();
  },
};

export default authService;
