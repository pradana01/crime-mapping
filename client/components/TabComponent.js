import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import Home from "../screen/Home";
import CrimeMap from "../screen/Page1";
import CreateReport from "../screen/Page2";
import MyReport from "../screen/Page3";
import Account from "../screen/Page4";
import Page5 from "../screen/Page5";
import SignIn from "../screen/SignIn";
import SignUp from "../screen/SignUp";
import EditPage from "../screen/EditPage";
import Do from "../screen/Do";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "News Feed",
          headerStyle: {
            backgroundColor: "#283148",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 16,
            padding: 10,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Comment"
        component={Page5}
        options={{
          title: "Reports Detail",
          headerStyle: {
            backgroundColor: "#283148",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 16,
            padding: 10,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

const ReportNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyReport"
        component={MyReport}
        options={{
          title: "My Report",
          headerStyle: {
            backgroundColor: "#283148",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 16,
            padding: 10,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="EditPage"
        component={EditPage}
        options={{
          title: "Edit Report",
          headerStyle: {
            backgroundColor: "#283148",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 16,
            padding: 10,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default TabComponent = () => {
  const isLogin = useSelector((state) => state.userReducer.isLogin);

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#913535",
          inactiveTintColor: "#707070",
        }}
      >
        {isLogin ? (
          <>
            <Tab.Screen
              name="Home"
              component={HomeNavigator}
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
                tabBarIcon: ({ color, size }) => <Icon name="map-marker-radius" color={color} size={size} />,
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
              component={ReportNavigator}
              options={{
                tabBarLabel: "My Report",
                tabBarIcon: ({ color, size }) => <Icon name="clipboard-text-outline" color={color} size={size} />,
              }}
            />
            <Tab.Screen
              name="Do"
              component={Do}
              options={{
                tabBarLabel: "DOs DONTs",
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
      </Tab.Navigator>
    </>
  );
};
