import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {Provider} from 'react-redux'

import store from './store'
import TabComponent from './components/TabComponent'

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
          <TabComponent />
      </NavigationContainer>
    </Provider>
  );
}

