import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import  store from "./app/store";
import {Provider,useSelector,useDispatch} from "react-redux";


export default function App() {

const filter = useSelector(state=>state.foodReducer.filter)
  return (
      <Provider store={store}>
   
    <View style={styles.container}>
      <Text>

        {"\n"}
        {"\n"}
        {filter}
      </Text>
    <View style={styles.navbar}>
   
        <Button style={styles.navItem}
        title="HOME"
        >
         
        </Button>
        <Button
          title="VEGAN"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
         
        </Button>
        <Button
         title="FAT-FREE"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          
        </Button>
      </View>

    
      <StatusBar style="auto" />
    </View>
  </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
});
