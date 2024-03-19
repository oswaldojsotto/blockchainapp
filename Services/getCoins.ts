import axios from "axios";

export  const getCryptoInfo = async () => {
    try {
      const response = await axios.get(
        "https://api.coinlore.net/api/tickers/?start=0&limit=10"
      );
      return response.data.data; 
    } catch (error) {
      throw new Error("Error fetching crypto data");
    }
  };