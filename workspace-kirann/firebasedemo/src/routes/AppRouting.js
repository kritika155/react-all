// import React from "react";
// import { createStackNavigator, createAppContainer } from "react-navigation";
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";

// const Route = createStackNavigator(
//     {
     
//       LoginPage:LoginPage,
//       RegisterPage:RegisterPage
//     },
//     {
//       initialRouteName: "RegisterPage"
//     },
//   );
//   const RouterConfig = createAppContainer(Route);
  
//   export default RouterConfig;
import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import LandingComponent from '../components/LandingComponent';
import RegisterComponent from '../components/registerComponent';
import LoginComponent from '../components/LoginComponent';
import ProfileComponent from '../components/ProfileComponent';
import AttendanceComponent from '../components/AttendanceComponent';
import MapComponent from '../components/MapComponent';

import GeolocationExample from '../components/GeolocationExample';
const Route = createStackNavigator(
    {

        RegisterComponent: RegisterComponent,
        LoginComponent: LoginComponent,
        LandingComponent: LandingComponent,
        ProfileComponent:ProfileComponent,
        GeolocationExample:GeolocationExample,
        AttendanceComponent:AttendanceComponent,
        MapComponent:MapComponent



    },
    {
        initialRouteName: "LandingComponent"
    },

);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;