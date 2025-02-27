import React from "react";
import { Provider } from "react-redux";
import { Navigators } from "./navigators";
import { store } from "@/store";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => {}}>
        <Navigators />
      </NavigationContainer>
    </Provider>
  );
}
