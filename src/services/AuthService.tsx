import axios from "axios";

const API_URL = "http://localhost:8080/auth/login"; // Adjust this to match your backend URL

interface LoginResponse {
  token: string;
  role: string;
}

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const response = await axios.post<LoginResponse>(
      API_URL,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    const { token, role } = response.data;

    if (!token || !role) {
      throw new Error("Token or Role missing in response");
    }

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    return token;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};
