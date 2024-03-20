import axios from "axios";

export const getCryptoList = async () => {
    try {
      const response = await axios.get(
        "https://api.coinlore.net/api/tickers/?start=0&limit=20"
      );
      return response.data.data; 
    } catch (error) {
      throw new Error("Error fetching crypto data");
    }
  };