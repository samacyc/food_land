import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'

import {AppLoading} from "expo"
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens'
import {createStore , combineReducers} from 'redux'
import {Provider} from 'react-redux'
import mealsReducer from './store/reducers/meals';
enableScreens() ;

const rootReducer = combineReducers({
  meals : mealsReducer
})
const store = createStore(rootReducer)

const fetchFonts = () => {
   return Font.loadAsync ({
        "open-sans-bold" : require('./assets/fonts/OpenSans-Bold.ttf') , 
        "open-sans" : require('./assets/fonts/OpenSans-Regular.ttf')
    })
}
export default function App() {
  const [FontLoaded , setFontLoaded] = useState(false) ;

  if(!FontLoaded) {
    return(
      <AppLoading 
      startAsync = {fetchFonts} 
      onFinish ={() => setFontLoaded(true)} />
    )
    }

  return (
    <Provider store = {store}>
      <MealsNavigator />
    </Provider> 
  );
}

