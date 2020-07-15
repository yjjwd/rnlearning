import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { DrawerItems } from 'react-navigation'


export default class drawerHeader extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render () {
    return (
      <View>
        <View style={Style.header}>
          <Image source={require('../../images/head_icon.png')} style={Style.headerImage} />
          <Text style={Style.headerName}> 用户名</Text>
        </View>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ScrollView>
          <SafeAreaView>
            {/* SafeAreaView
                        匹配iphonex  安全区域视图 */}
            <DrawerItems {...this.props.data} />
          </SafeAreaView>
        </ScrollView>
      </View>

    )
  }
}

const Style = StyleSheet.create({
  header: {
    backgroundColor: '#7efcec',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  headerImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'white'
  },
  headerName:{
      fontSize: 20,
      marginTop: 10,
      color: 'white'
  }
});