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
  TouchableOpacity, 
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
    backgroundColor:'white'
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
    paddingBottom:14,
    backgroundColor:'#2F65BD',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius:4, 
  },
  icon_feature:{
    width:58,
    height:59,
    borderWidth:1,
    borderColor:'#EFEFEF',
    borderRadius:18,
    justifyContent:'center',
    alignItems :'center'
    
  }
});

export default class App extends Component {
  render() {
    return(
    
        <SafeAreaView style={{flex:1}}>

          {/* Container - Start */}
          <ScrollView style={styles.container}>

            {/* Search Bar - Start*/}
            <View style={{marginHorizontal:17, flexDirection:'row', paddingTop:15}}>
              <View style={{position:'relative', flex:1 }}>
                <TextInput placeholder ='What do you want to eat ?' style={styles.txt_inpt_search}/>
                <Image source={require ('./icon/search.png')}  style={styles.img_search}/>
              </View>
              <View style={{width:35, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                <Image source={require('./icon/promo.png')}/>
              </View>
            </View>
            {/* Search Bar - End*/}

            {/* Gopay - Start*/}
            <View style={styles.gopay}>
              <View style={styles.gopay_title}>
                <Image source={require('./icon/gopay.png')}></Image>
                <Text style={{fontSize:17,fontWeight:'bold', color:'white'}}>Rp 50.000</Text>                 
              </View>
              <View style={styles.gopayContent}>
                <View style={{flex:1, alignItems:'center'}}>
                  <Image source={require('./icon/pay.png')}></Image>
                  <Text style={{color:'white', fontSize:13, fontWeight:'bold', marginTop:15}}>Pay</Text>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                  <Image source={require('./icon/nearby.png')}></Image>
                  <Text style={{color:'white', fontSize:13, fontWeight:'bold', marginTop:15}}>Nearby </Text>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                  <Image source={require('./icon/topup.png')}></Image>
                  <Text style={{color:'white', fontSize:13, fontWeight:'bold', marginTop:15}}>Top Up</Text>
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                  <Image source={require('./icon/more.png')}></Image>
                  <Text style={{color:'white', fontSize:13, fontWeight:'bold', marginTop:15}}>More</Text>
                </View>
              </View>              
            </View>
            {/* Gopay - End*/}
            
            {/* Main Feature - Start */}
            <View style={{flexDirection:'row', flexWrap:'wrap', marginHorizontal:0, marginTop:18,}}>
              <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom:18,}}>
                <View style={{width:'25%', alignItems:'center'}}>
                  <View  style={styles.icon_feature}>
                    <Image source={require('./icon/go-ride.png')}/>
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold',textAlign:'center', marginTop:6, }}>GO-MENU</Text>
                </View>
                <View style={{width:'25%', alignItems:'center'}}>
                  <View  style={styles.icon_feature}>
                    <Image source={require('./icon/go-car.png')}/>
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold',textAlign:'center', marginTop:6, }}>GO-CAR</Text>
                </View>
                <View style={{width:'25%', alignItems:'center'}}>
                  <View  style={styles.icon_feature}>
                    <Image source={require('./icon/go-food.png')}/>
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold',textAlign:'center', marginTop:6, }}>GO-FOOD</Text>
                </View>
                <View style={{width:'25%', alignItems:'center'}}>
                  <View  style={styles.icon_feature}>
                    <Image source={require('./icon/go-pulsa.png')}/>
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold',textAlign:'center', marginTop:6, }}>GO-PULSA</Text>
                </View>
              </View>
              <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%',}}>
                <View style={{width:'25%', alignItems:'center'}}>
                  <View  style={styles.icon_feature}>
                    <Image source={require('./icon/go-send.png')}/>
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold',textAlign:'center', marginTop:6, }}>GO-SEND</Text>
                </View>
                <View style={{width:'25%', alignItems:'center'}}>
                  <View  style={styles.icon_feature}>
                    <Image source={require('./icon/go-deals.png')}/>
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold',textAlign:'center', marginTop:6, }}>GO-DEALS</Text>
                </View>
                <View style={{width:'25%', alignItems:'center'}}>
                  <View  style={styles.icon_feature}>
                    <Image source={require('./icon/go-bluebird.png')}/>
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold',textAlign:'center', marginTop:6, }}>GO-BLUEBIRD</Text>
                </View>
                <View style={{width:'25%', alignItems:'center'}}>
                  <View  style={styles.icon_feature}>
                    <Image source={require('./icon/go-more.png')}/>
                  </View>
                  <Text style={{fontSize:11, fontWeight:'bold',textAlign:'center', marginTop:6, }}>MORE</Text>
                </View>
              </View>
            </View>
            {/* Main Feature - End */}

            {/* BOX - Start*/}
            <View style={{height:17, backgroundColor:'#F2F2F4', marginTop:20}}></View>
            {/* BOX - End*/}

            {/* News Section - Start */}
            <View style={{paddingTop:16, paddingHorizontal:16,backgroundColor:'pink' }}>
               <View style={{position:'relative'}}>
                 <Image source={require('./dummy/sepak-bola.jpg')} style={{height:170, width:'100%', borderRadius:6}}/>
                 <View style={{height:'100%', width:'100%', position:'absolute', backgroundColor:'black', top:0, left:0, opacity:0.2, borderRadius:6, }}></View>
                 <Image source={require('./logo/white.png')} style={{height:15, width:55, position:'absolute', top:16, left:16 }}/> 
               </View>
               <View style={{paddingTop:16, paddingBottom:20}}>
                 <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C'}}>GO-NEWS</Text>
                 <Text style={{fontSize:14, color:'#7A7A7A', fontWeight:'normal'}}>Egi Melgiansyah Selamatkan Pinalti Terakhir, Timnas U-23 Kalahkan Brunei</Text>
                 <TouchableOpacity style={{backgroundColor:'#61A756', }}>
                   <Text style={{fontSize:13, fontWeight:'bold', color:'white'}}>READ</Text>
                 </TouchableOpacity>
               </View>
            </View>
            {/* News Section - End */}
          </ScrollView>
          {/* Container - End */}
          
          {/* Navigation Bar - Start */}
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
          {/* Navigation Bar - End */}
        </SafeAreaView >
    
    );
  }
}