import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Menu from "./MenuComponent";
import Dishdetail from "./DishDetailComponent";
import Constants from "expo-constants";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import  About from "./AboutComponent";
import { createDrawerNavigator } from "react-navigation-drawer";

const MenuNavigator = createAppContainer(
  createStackNavigator(
    {
      Menu: { screen: Menu },
      Dishdetail: { screen: Dishdetail },
    },
    {
      initialRouteName: "Menu",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "green",
        headerTitleStyle: {
          color: "grey",
        },
      },
    }
  )
);

  const HomeNavigator = createAppContainer(createStackNavigator(
  {
    Home: { screen: Home },
    Dishdetail: { screen: Dishdetail },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "green",
      headerTitleStyle: {
        color: "grey",
      },
    },
  }
));

const ContactNavigator = createAppContainer(createStackNavigator(
  {
    Contact: Contact
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "green",
      headerTitleStyle: {
        color: "grey",
      },
    },
  }
));

const AboutNavigator = createAppContainer(createStackNavigator(
  {
    About: About
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "green",
      headerTitleStyle: {
        color: "grey",
      },
    },
  }
));

const MainNavigator = createAppContainer(
  createDrawerNavigator(
    {
      Home: {
        screen: HomeNavigator,
        navigationOptions: {
          title: "Home",
        },
      },
      Menu: {
        screen: MenuNavigator,
        navigationOptions: {
          title: "Menu",
        },
      },
      Contact: {
        screen: ContactNavigator,
        navigationOptions: {
          title: "Contact",
        },
      },
      About: {
        screen: AboutNavigator,
        navigationOptions: {
          title: "About Us",
        },
      }
    },
    {
      initialRouteName: "About",
    }
  )
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}

export default Main;