import React , {Component} from 'react'

import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import  { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';
import CustomHeaderButton from '../components/HeaderButtons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  

class CategoriesScreen extends Component  {
    async test() {
    /*    await AdMobInterstitial.setAdUnitID('ca-app-pub-8865351977890198/7158043012'); // Test ID, Replace with your-admob-unit-id
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync(); */
        await AdMobRewarded.setAdUnitID('ca-app-pub-8865351977890198/6590781399'); // Test ID, Replace with your-admob-unit-id
        await AdMobRewarded.requestAdAsync();
        await AdMobRewarded.showAdAsync();
    }
    componentDidMount() {
         this.test()
    } 
    render()
    {
    const renderGridItem = (itemData) => {
        return <CategoryGridTitle title = {itemData.item.title} color = {itemData.item.color} onselect = { ()=> this.props.navigation.navigate('CategoryMeals' , {categoryId : itemData.item.id }) } />
        }


        return (
        <View>
            <AdMobBanner
            
    bannerSize="smartBannerLandscape"
    adUnitID="ca-app-pub-8865351977890198/2980244415" // Test ID, Replace with your-admob-unit-id
    servePersonalizedAds  = {true}// true or false
  />

       <FlatList keyExtractor = {(item  , index) => item.id} 
      data = {CATEGORIES} 
      renderItem = {renderGridItem} 
      numColumns = {2} />
        </View>
   
    )
        }
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    
  }

const styles = StyleSheet.create({
    screen :  {
        flex : 1 , 
        justifyContent : 'center' , 
        alignItems : "center" 
        } 
})


export default CategoriesScreen 