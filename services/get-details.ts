import axios from "axios";

export const getCryptoDetails = async (coinId: number) => {
    try {
      const response = await axios.get(
        `https://api.coinlore.net/api/ticker/?id=${coinId}`
      );
      return response.data; 
    } catch (error) {
      throw new Error("Error fetching crypto details");
    }
  };