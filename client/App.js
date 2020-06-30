import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./screen/Home";
import CrimeMap from "./screen/Page1";
import CreateReport from "./screen/Page2";
import MyReport from "./screen/Page3";
import Account from "./screen/Page4";
import Page5 from "./screen/Page5";
import EditPage from './screen/EditPage'
import SignIn from "./screen/SignIn";
import SignUp from "./screen/SignUp";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const isLogin = true;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#5891FE",
          inactiveTintColor: "#707070",
        }}
      >
        {isLogin ? (
          <>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
              }}
            />
            <Tab.Screen
              name="Crime Map"
              component={CrimeMap}
              options={{
                tabBarLabel: "Crime Map",
                tabBarIcon: ({ color, size }) => (
                  <Icon name="map-marker-radius" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Create"
              component={CreateReport}
              options={{
                tabBarLabel: "Create",
                tabBarIcon: ({ color, size }) => <Icon name="plus" color={color} size={size} />,
              }}
            />
            <Tab.Screen
              name="My Report"
              component={MyReport}
              options={{
                tabBarLabel: "My Report",
                tabBarIcon: ({ color, size }) => (
                  <Icon name="clipboard-text-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                tabBarLabel: "Account",
                tabBarIcon: ({ color, size }) => <Icon name="account" color={color} size={size} />,
              }}
            />
          </>
        ) : (
            <>
              <Tab.Screen name="Sign In" component={SignIn} />
              <Tab.Screen name="Sign Up" component={SignUp} />
            </>
          )}
        <Stack.Screen
          name="Comment"
          component={Page5}
        />
        <Stack.Screen
          name="EditPage"
          component={EditPage}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
