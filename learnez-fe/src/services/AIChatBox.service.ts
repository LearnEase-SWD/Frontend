import axiosInstance from "./axiosInstance";

export const handleAIResponse = async (message: string) => {
    try {
      const res = await axiosInstance.post("/ai/ask", {
        message,
      });
      return res.data;
      
    }catch (error) {
        console.error(error);
        }
        
}
