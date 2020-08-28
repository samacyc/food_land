import React from 'react'
import { CATEGORIES  } from '../data/dummy-data';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux'
import { View ,StyleSheet ,Text } from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  

const CategoriesMealScreen = props => {
   let catId = props.route.params['categoryId'] ; 
   const availableMeals = useSelector(state => state.meals.filteredMeals)
    let selectedCat = CATEGORIES.find(cat => cat.id === catId )
    let displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    console.log(CATEGORIES.find(cat => cat.id === catId).title)
    props.navigation.setOptions({ title: selectedCat.title  })
    if(displayedMeals.length ==0 || !displayedMeals) {
        return (
            <View style = {styles.content}>
                <Text>
                    No meals found. maybe check your filters
                </Text>
            </View>
        )
    }
    return (
        <>
                  <AdMobBanner
            
            bannerSize="smartBannerLandscape"
            adUnitID="ca-app-pub-8865351977890198/9488458775" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds  = {true}// true or false
          />
        
        <MealList data = {displayedMeals} navigation = {props.navigation} />
        </>
    )

};

const styles = StyleSheet.create({
    content : {
        flex : 1 , 
        justifyContent : 'center' , 
        alignContent : 'center' , 
        alignItems :'center'
    }

})




export default CategoriesMealScreen 