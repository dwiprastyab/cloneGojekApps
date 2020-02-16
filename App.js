import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput, 
} from 'react-native';

// import iconhome from './icon/home.png'
// import iconorder from './icon/order.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigation:{
    flexDirection:'row',
    height: 54, 
    color:'white',
  },
    txt_inpt_search: {
      borderWidth: 1,
      borderColor:'#E8E8E8',
      borderRadius:25,
      height:40,
      fontSize:13,
      paddingLeft:45,
      paddingRight:20 ,
      backgroundColor:'white',
      marginRight:18,
       
  },
  img_search: {
    position:'absolute',
    top:5,
    left:12    
  },
  gopay:{
    marginHorizontal:17,
    marginTop:8
  
  },
  gopay_title:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    backgroundColor:'#2C5FB8', 
    borderTopLeftRadius: 4, 
    borderTopRightRadius:4, 
    padding:14,
  },
  gopayContent:{
    flexDirection:'row',
    paddingTop:20,
    paddingBottom:14
  }
});

export default class App extends Component {
  render() {
    return(
    
        <View style={{flex:1}}>

          {/* Container */}
          <View style={styles.container}>

            {/* Search Bar */}
            <View style={{marginHorizontal:17, flexDirection:'row', paddingTop:15}}>
              <View style={{position:'relative', flex:1 }}>
                <TextInput placeholder ='What do you want to eat ?' style={styles.txt_inpt_search}/>
                <Image source={require ('./icon/search.png')}  style={styles.img_search}/>
              </View>
              <View style={{width:35, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                <Image source={require('./icon/promo.png')}/>
              </View>
            </View>

            {/* Gopay */}
            <View style={styles.gopay}>

              <View style={styles.gopay_title}>
                <Image source={require('./icon/gopay.png')}></Image>
                <Text style={{fontSize:17,fontWeight:'bold', color:'white'}}>Rp 50.000</Text>                 
              </View>

              {/**
               * see the gopayContent styles for the detail error.
               */}
              <View style={styles.gopayContent}>
                <View style={{backgroundColor:'pink', flex:1, alignItems:'center'}}>
                  <Text>Pay</Text>
                </View>
                <View style={{backgroundColor:'yellow', flex:1, alignItems:'center'}}>
                  <Text>Nearby </Text>
                </View>
                <View style={{backgroundColor:'purple', flex:1, alignItems:'center'}}>
                  <Text>Top Up</Text>
                </View>
                <View style={{backgroundColor:'red', flex:1, alignItems:'center'}}>
                  <Text>More</Text>
                </View>
              </View>
              
            </View>
          </View>

          <View style={styles.navigation}>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}> 
                <Image style={{width: 26, height: 26 }} source={require('./icon/home-active.png')}/>
              <Text style={{ fontSize:10,  color:'#545454', marginTop:4, color:'#43AB4A'}}>Home</Text>
            </View>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Image style={{width: 26, height: 26 }} source={require('./icon/order.png')}/>
              <Text style={{ fontSize:10,  color:'#545454', marginTop:4}}>Order</Text>
            </View>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Image style={{width: 26, height: 26 }} source={require('./icon/help.png')}/>
              <Text style={{fontSize:10,  color:'#545454', marginTop:4}}>Help</Text>
            </View>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Image style={{width: 26, height: 26 }} source={require('./icon/inbox.png')}/>
              <Text style={{ fontSize:10,  color:'#545454', marginTop:4}}>Inbox</Text>
            </View>
            <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Image style={{width: 26, height: 26 }} source={require('./icon/account.png')}/>
              <Text style={{ fontSize:10,  color:'#545454', marginTop:4}}>Account </Text>
            </View> 
          </View>
          
        </View>
    
    );
  }
}