import axios from "axios";

interface CryptoDetailsProps  { 
    cryptoId: number;
}

export  const getCryptoDetails = async ({cryptoId}: CryptoDetailsProps) => {
    try {
      const response = await axios.get(
        `https://api.coinlore.net/api/ticker/?id=${cryptoId}`
      );
      return response.data.data; 
    } catch (error) {
      throw new Error("Error fetching crypto data");
    }
  };