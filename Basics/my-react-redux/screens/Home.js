// screens/Favorites.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
const Home = () => {

    const filter = useSelector(state=>state.foodReducer.filter)
    const foodItems = useSelector(state=>state.foodReducer.allItems)
  return (
    <View style={styles.container}>
      <Text>
          {"\n"}
          {"\n"}
          Home | FOOD ITEMS
          {"\n"}
          {"\n"}
          {foodItems.map(item=>{
              return(
                  <Text>{item.name}{"\n"}</Text>
              )
          })}
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
});
export default Home;