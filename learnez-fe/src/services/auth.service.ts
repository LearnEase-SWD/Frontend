import axiosInstance from "./axiosInstance"; 

export const handleLogin = async () => {
    try {
        const response = await axiosInstance.get("/auth/login-url");

        if (response.data.url) {
            window.location.href = response.data.url;
        } else {
            console.error("Login URL not found in response");
        }
    } catch (error) {
        console.error("Login failed:", error);
    }
};
