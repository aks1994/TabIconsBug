import React from 'react';

import MatIcon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';

import App from './App';
import { createAppContainer } from 'react-navigation';

// const themes = {
//   backgroundColor:{light:Colors.White,dark:Colors.GreyishBlue},
//   activeTintColor:{light:Colors.LightBlue,dark:Colors.White},
//   inactiveTintColor:{light:Colors.TabInactiveLight,dark:Colors.TabInactiveDark}
// }

const acTintColor = '#006BA9';
const inAcTintColor = "#bfc9d4";
const tabSize = 37;

export const AppTabsNavigator = createBottomTabNavigator(
  {
    Home: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            tabBarIcon: ({ focused, tintColor }) => (
              <MatIcon name="home" size={tabSize} color={tintColor} />
            ),
        })
    },
    GlobalSearch: {
      screen: App,
      navigationOptions: ({ navigation }) => ({
          title: 'Search',
          tabBarIcon: ({ focused, tintColor }) => (
            <MatIcon name="search" size={tabSize} color={tintColor} />
          ),
      })
    },
    Alerts: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
          title: 'Alerts',
          tabBarIcon: ({ focused, tintColor }) => (
            <MatIcon name="home" size={tabSize} color={tintColor} />
          ),
        }),
    },
    Tools: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
          title: 'Tools',
          tabBarIcon: ({ focused, tintColor }) => (
            <MatIcon name="search" size={tabSize} color={tintColor} />
          ),
        }),
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        height: 57,
        justifyContent: 'center',
        alignItems: 'stretch' ,
        padding: 10
      },
      showIcon: true,
      showLabel: false,
    },
    // tabBarComponent: (props) => {
    //   const theme = props.screenProps.theme;
    //   return (
    //     <BottomTabBar
    //       {...props}
    //       style={{ ...props.style,backgroundColor: themes.backgroundColor[theme] }}
    //       activeTintColor={themes.activeTintColor[theme]}
    //       inactiveTintColor={themes.inactiveTintColor[theme]}
    //     />
    //   );
    // },
  },
);

export default createAppContainer(AppTabsNavigator);