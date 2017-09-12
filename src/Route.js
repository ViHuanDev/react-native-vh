import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './screens/Home';
import User from './screens/User';
import Detail from './screens/Detail';
import Mennu from './screens/Menu';

export const HomeStack = StackNavigator({
	Screen_Home:{
		screen: Home,
		navigationOptions: {
			title: 'Trang Chủ',
			headerStyle:{
			},
			headerTitleStyle :{ 
				fontWeight:'300',
				fontSize:20,
				marginTop:5,
				alignSelf:'center'
			},
		},
	},
	Screen_Detail:{
		screen: Detail,
		navigationOptions: {
			title: 'Trang Thông Tin',
			headerStyle:{
			},
			headerTitleStyle :{ 
				fontWeight:'300',
				fontSize:20,
				marginTop:5,
				alignSelf:'center'
			},
		},
	},
});