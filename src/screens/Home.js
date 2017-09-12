import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,TouchableOpacity
} from 'react-native';

export default class Home extends Component {
	// static navigationOptions = {
	// 	title: 'Trang Chủ',
	// }
	
	render() {
		return (
			<View style={{justifyContent: 'center',alignItems: 'center', flex:1,backgroundColor: 'lightblue' }}> 
				<Text>
					HomePage
				</Text>
				<TouchableOpacity style={{backgroundColor: 'green'}}
					onPress={()=>{this.props.navigation.navigate('Screen_Detail')}}
				>
					<Text>
						Go to Detail 
					</Text>
				</TouchableOpacity>
			</View>
			);
	}
}

const styles = StyleSheet.create({

});
