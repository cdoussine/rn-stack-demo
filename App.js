import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

function HomeScreen(props) {
  var styleHome = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e67e22'
  };
  return (
    <View style={styleHome}>
      <Button
        title='Go to Page A'
        onPress={() => props.navigation.navigate('PageA')}
      />
    </View>
  );
}

function PageAScreen(props) {
  var stylePageA = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2ecc71'
  };
  return (
    <View style={stylePageA}>
      <Button
        title='Go to Home'
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

var BottomNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  PageA: PageAScreen
});

export default Navigation = createAppContainer(BottomNavigator);
