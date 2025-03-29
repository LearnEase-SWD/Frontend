import axiosInstance from "./axiosInstance";

export const handleLogin = async () => {
  try {
    await axiosInstance.get("/auth/login");
    
  } catch (error: any) {
    console.error(error);
    window.location.href = "https://localhost:7002/api/auth/login";

  }
};
// Function to handle accessToken from URL
export const handleAccessToken = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userEmail = urlParams.get("userEmail");

  if (userEmail) {
    // Save accessToken to localStorage
    localStorage.setItem("userEmail", userEmail);

    // Remove query parameters from URL
    const newUrl = `${window.location.origin}/callback`;
    window.history.replaceState({}, document.title, newUrl);
  }
};

export const handleLogout = () => {
  localStorage.removeItem("userEmail");
  window.location.href = "/";
}
