// screens/Favorites.js
import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {setFilter,getFoodItems} from "../redux/reducers";

const FatFree = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state=>state.foodReducer.filter)
  const foodItems = useSelector(state=>state.foodReducer.foodItems)
  return (
    <View style={styles.container}>
      <Text>FatFree | </Text>
      <Button title="LoadItems "
      onPress = {()=>{
        dispatch(setFilter("fat-free"))
        dispatch(getFoodItems())
      }}
      ></Button>
      
      <Text>
        {"\n"}
        {"\n"}
        {filter==="fat-free"?
        <View styles={styles.list}>
          {foodItems.map(item=>{
              return(
                  <Text>{item.name}{"\n"}</Text>
                  
              )
          })}

        </View>:
        <View></View>}
        
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  list:{
    flexDirection:"column",
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
export default FatFree;