import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GlobalProvider from './src/context/AppState';
import RootNav from './src/routes/RootNav'

const App = () => {
  return  (
    <GlobalProvider>
      <RootNav />  
    </GlobalProvider>
    );
}

export default App


