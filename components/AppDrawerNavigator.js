import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import App from '../App';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
 },
    {
         contentComponent: CustomSideBarMenu
    },
    {
    initialRouteName: 'Home'
    
})