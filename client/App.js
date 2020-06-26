import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screen/Home'
import Page1 from './screen/Page1'
import Page2 from './screen/Page2'
import Page3 from './screen/Page3'
import Page4 from './screen/Page4'
import Page5 from './screen/Page5'
import SignIn from './screen/SignIn'
import SignUp from './screen/SignUp'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name='Newsfeed Report' component={Home} />
    <Stack.Screen name='Comment' component={Page5} />
  </Stack.Navigator>
  )
}

export default function App() {
  const isLogin = true
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {isLogin ? (
          <>
          <Tab.Screen name="Home" component={HomeNavigator}/>
          <Tab.Screen name="Crime Map" component={Page1}/>
          <Tab.Screen name="Create" component={Page2}/>
          <Tab.Screen name="My Report" component={Page3}/>
          <Tab.Screen name="Account" component={Page4}/>
          </>
        ) : (
          <>
          <Tab.Screen name="Sign In" component={SignIn} />
          <Tab.Screen name="Sign Up" component={SignUp} />
          </>
        )}
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
