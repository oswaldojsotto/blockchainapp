"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/src/store/store";

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;