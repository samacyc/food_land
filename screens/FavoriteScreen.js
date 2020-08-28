import React from 'react'

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import {useSelector} from 'react-redux';
import {Text , View , StyleSheet} from 'react-native'

import CustomHeaderButton from '../components/HeaderButtons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
const FavoriteScreen = props => {
    props.navigation.setOptions({ headerLeft : () =><HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
    <Item title = 'Menu' iconName = 'ios-menu' onPress = {() => {
        props.navigation.toggleDrawer()
    }} />
</HeaderButtons>  })
       const availableMeals = useSelector(state => state.meals.favoriteMeals)
        if (availableMeals.length === 0 || !availableMeals) {
            return (
                <View style = { styles.screen}>
                    <Text style = {styles.text}>No favorite meals found. Start adding some!</Text>
                </View>
            )
        }
    return (
        <MealList data = {availableMeals} navigation = {props.navigation} />
    )
};


const styles = StyleSheet.create({
    screen  : {
        justifyContent : 'center' , 
        flex : 1,
        alignContent : 'center' , 
    } , 
    text : {
        textAlign :'center' , 
        fontSize : 18,
        fontFamily : 'open-sans-bold'
    }
})


export default FavoriteScreen 