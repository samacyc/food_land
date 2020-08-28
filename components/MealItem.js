import  React from 'react'


import {View , Text , StyleSheet , TouchableOpacity , ImageBackground} from 'react-native' 
import { color } from 'react-native-reanimated'

const MealItem = props => {

    return (
        <View style = {styles.MealItem}>

        <TouchableOpacity onPress = {props.onSelectMeal}>
            <View>
                <View  style = {{...styles.mealRow , ...styles.mealHeader}}>
                    <ImageBackground source = {{uri : props.image}} style = {styles.bgImage} >
                    <Text style = {styles.header} numberOfLines = {1} >
                    {props.title}
                </Text>
                    </ImageBackground>
               
                </View>
                <View style = {{...styles.mealRow , ...styles.mealDetail}}>
                 <Text>{props.duration}m</Text>
                <Text> {props.complexity.toUpperCase()}</Text>
                <Text> {props.affordability.toUpperCase()}</Text>

                </View>
              
            </View>
        </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    MealItem : {
        height : 200, 
        width : '100%' ,
        backgroundColor : '#f5f5f5' , 
        borderRadius : 30 , 
        overflow : 'hidden'
    }, 
    mealDetail : {
        paddingHorizontal : 15 , 
        justifyContent : 'space-between', 
        height : '15%'  , 
        alignItems : 'center'
    } ,
    header : {
        backgroundColor : 'rgba(0,0,0,0.5)' , 
        fontSize : 20 , 
        fontFamily : 'open-sans-bold' , 
        textAlign : "center" ,
        color : 'white'
        
    } , 
    mealRow : {
        flexDirection : 'row' ,
    } , 
    mealHeader :{
        width : '100%' , 
        height : '85%' , 
        justifyContent : 'flex-end'
    } , 
    bgImage : {
        width : '100%' , 
        height :'100%' , 
        justifyContent : 'flex-end'
    }
})

export default MealItem;