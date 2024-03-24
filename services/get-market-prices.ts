import axios from "axios";

export const getMarketPrices = async (coinId: number) => {
    try {
      const response = await axios.get(
        `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
      );
      return response.data; 
    } catch (error) {
      throw new Error("Error fetching crypto market");
    }
  };