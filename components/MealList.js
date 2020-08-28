import React from 'react'
import {View , Text , FlatList , StyleSheet, Button} from 'react-native'
import MealItem from './MealItem';

import * as NavigationService from '../navigation/navigationService'

const MealList = props => {
    const renderMealITem = itemData => {
        return (

            <MealItem title = {itemData.item.title}
            duration = {itemData.item.duration}
            complexity = {itemData.item.complexity} 
            affordability = {itemData.item.affordability}
            image = {itemData.item.imageUrl}
            onSelectMeal = {() => { console.log(itemData.item) ; props.navigation.navigate('MealDetail' ,  {
                MealId : itemData.item.id
             })  }}
            />
        )
    }
    return (
        <View style = {styles.screen}>
            <FlatList style = {{width : '100%'}}  data = {props.data} keyExtractor = {(item , index) => item.id} renderItem = {renderMealITem} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen :  {
        flex : 1 , 
        justifyContent : 'center' , 
        alignItems : "center" 
        }
})


export default MealList