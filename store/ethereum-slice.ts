import { createSlice } from '@reduxjs/toolkit';

export interface EthereumSliceProps {
  usd: number;
}

const initialState: EthereumSliceProps = {
  usd: 0,
};

export const ethereumSlice = createSlice({
  name: 'ethereumPrice',
  initialState,
  reducers: {
    setEthereumToUsd: (state, action: { payload: { ethereums: number; ethereumPriceUsd: number } }) => {
      const { ethereums, ethereumPriceUsd } = action.payload;
      const valueUsd = ethereums * ethereumPriceUsd;
      state.usd = valueUsd;
    },
  },
});

export const { setEthereumToUsd } = ethereumSlice.actions;
export default ethereumSlice.reducer;
