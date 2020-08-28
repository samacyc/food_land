import {createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealScreen from '../screens/CategoriesScreenMeals';
import MealDetail from '../screens/MealDetail';
import { Colors } from '../Constants/Colors';
import FavoriteScreen from '../screens/FavoriteScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import FilterScreen from '../screens/FilterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer  } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {NavigationService} from './navigationService'
import { createStackNavigator } from '@react-navigation/stack';

const defaultStackNavOptions = {
    headerStyle : {
        backgroundColor : Colors.primaryColor , 
    } , 
    headerTintColor: 'white',
    headerTitleStyle : {
        fontFamily : 'open-sans-bold'
    },
    headerBackTitleStyle : {
        fontFamily : 'open-sans'

    },
    headerTitleAlign : 'center'
  }
  const Stack = createStackNavigator();

const MealNAvigator = () => <Stack.Navigator>
<Stack.Screen name="Categories" component={CategoriesScreen} options = { {...defaultStackNavOptions}} />
<Stack.Screen name="CategoryMeals" component={CategoriesMealScreen} options={({ route }) => ({ ...defaultStackNavOptions , title: route.params.name })}
 />
<Stack.Screen name="MealDetail" component={MealDetail} options={({ route }) => ({ ...defaultStackNavOptions , title: route.params.name , headerRight :route.params.name  })}/>
</Stack.Navigator>

const FavNav = () => <Stack.Navigator>
<Stack.Screen name="Favorites" component={FavoriteScreen} options = { defaultStackNavOptions} />
<Stack.Screen name="MealDetail" component={MealDetail} options = { defaultStackNavOptions} />
</Stack.Navigator>

const FilterNav = () =><Stack.Navigator>
<Stack.Screen name="Filter" component={FilterScreen} options = { defaultStackNavOptions} />
</Stack.Navigator>
/*createStackNavigator({
    Categories : {screen :CategoriesScreen} , 
    CategoryMeals : { screen : CategoriesMealScreen }  , 
    MealDetail :{screen :MealDetail} } ,
    {   mode : 'modal' ,
        defaultNavigationOptions : defaultStackNavOptions

}  
 
  const FavNav =  createStackNavigator({
        Favorites : {screen : FavoriteScreen} ,
        MealDetail : {screen : MealDetail}
        } , 
        {
            defaultNavigationOptions : defaultStackNavOptions
        })
const FilterNav = createStackNavigator({
        FavMeals : {screen : FilterScreen}
    })
    /*
 const MealsFavTabNavigator = createBottomTabNavigator({
     Meals : {screen : MealNAvigator , navigationOptions : {
         tabBarIcon : (tabInfo) => {
             return <Ionicons name="ios-restaurant" size= {25} color = {tabInfo.tintColor}   />
         }
     }} , 
     Favorites : {screen : FavNav , navigationOptions : {
        tabBarLabel : 'Favorite' ,
        tabBarIcon : (tabInfo) => {
            return <Ionicons name="ios-star" size= {25} color = {tabInfo.tintColor}   />
        }
     }}
 } , {
     tabBarOptions : {
         activeTintColor : Colors.accentColor , 
         
        }
 })
 
/*
 const MainNav = createDrawerNavigator({
     MealsFavs : {screen :MealsFavTabNavigator} , 
     Filters : {screen : FilterNav}
 })*/
 const Tab = createBottomTabNavigator();
 const test = () =>(<NavigationContainer>
      <Tab.Navigator tabBarOptions = {{
    activeTintColor : Colors.accentColor 

 }}>
 <Tab.Screen name="Home" children={MealNAvigator} options = {{
     tabBarIcon : (tabInfo) => {
        return <Ionicons name="ios-restaurant" size= {25} color = {tabInfo.tintColor}   />
    }
 }} />
 <Tab.Screen name="Favorite" children={FavNav} options = {{
     tabBarLabel : 'Favorite' ,
     tabBarIcon : (tabInfo) => {
         return <Ionicons name="ios-star" size= {25} color = {tabInfo.tintColor}   />
     }
 }} />
</Tab.Navigator>
 </NavigationContainer>

 
)
 const Drawer = createDrawerNavigator();

const  MyDrawer = () => {
  return (
      <NavigationContainer  >
    <Drawer.Navigator  drawerContentOptions={{
    activeTintColor: Colors.accentColor ,
    labelStyle : {
        fontFamily : 'open-sans-bold'
    }
  }}>
      <Drawer.Screen name="Home" children={test} />

    </Drawer.Navigator>
    </NavigationContainer>

  );
}
export default (test);