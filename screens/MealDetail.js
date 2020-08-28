import React , {useEffect} from 'react'

import {View , Text , StyleSheet ,ScrollView} from 'react-native' ; 
import CustomHeaderButton from '../components/HeaderButtons';
import { HeaderButtons, Item  } from 'react-navigation-header-buttons';
import {useSelector , useDispatch} from 'react-redux'

import {Image} from 'react-native'
import { toggleFavorite } from '../store/actions/meals';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  
const ListMeal = props => {
    return (<View style = {styles.listItem}>
        <Text>{props.children}</Text>
    </View>)
}
const MealDetail = props => {
    const MealId = props.route.params['MealId'] ; 
    const availableMeals = useSelector(state => state.meals.meals)
    const dispatch = useDispatch()
    let Meal = availableMeals.find(cat => cat.id === MealId )
    let icon = 'ios-star-outline'
    favMeals = useSelector(state => state.meals.favoriteMeals)
    const indice = favMeals.findIndex(meals => meals.id === MealId)
const test = async () => {
            await AdMobInterstitial.setAdUnitID('ca-app-pub-8865351977890198/7158043012'); // Test ID, Replace with your-admob-unit-id
            await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
            await AdMobInterstitial.showAdAsync(); 
            /*await AdMobRewarded.setAdUnitID('ca-app-pub-8865351977890198/6590781399'); // Test ID, Replace with your-admob-unit-id
            await AdMobRewarded.requestAdAsync();
            await AdMobRewarded.showAdAsync(); */
        }
        useEffect(()=> {
            test()
        })
    if(indice >= 0) {
        icon = 'ios-star'
    }
    props.navigation.setOptions({ title: Meal.title , headerRight : () =><HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
        <Item title = 'Favorite' iconName = {icon} onPress = {() => {
            dispatch(toggleFavorite(MealId))
        }} />
    </HeaderButtons>   })

    return (
        <ScrollView style = {styles.screen}>
             <AdMobBanner
            
            bannerSize="smartBannerLandscape"
            adUnitID="ca-app-pub-8865351977890198/2980244415" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds  = {true}// true or false
          />
            <Image source = {{uri :Meal.imageUrl}} style = {styles.image} />

            <View style = {styles.details}>
                 <Text>{Meal.duration}m</Text>
                <Text> {Meal.complexity.toUpperCase()}</Text>
                <Text> {Meal.affordability.toUpperCase()}</Text>
            </View>
            <Text style = {styles.TextTitle}>Ingredient</Text>
    {Meal.ingredients.map((ingredient , index) => <ListMeal key = {ingredient}> {ingredient}</ListMeal> )}
            <Text style = {styles.TextTitle}>Steps</Text>
            {Meal.steps.map((step , index) => <ListMeal key = {step}> {step}</ListMeal> )}
        </ScrollView>

    )

};


const styles = StyleSheet.create({
   image : {
       width : '100%',
       height : 200
   } , 
   details : {
       flexDirection : 'row' , 
       padding : 15,
       justifyContent : 'space-around'
   } ,  
   TextTitle : {
       fontFamily : 'open-sans-bold' , 
       fontSize : 22 , 
       textAlign : 'center'
   } ,
   listItem : {
       marginVertical : 10,
       marginHorizontal : 20 , 
       borderColor : '#ccc' , 
       borderWidth : 1 , 
       padding : 10
   }
})

export default MealDetail 