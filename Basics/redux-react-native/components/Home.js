import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { StyleSheet, Text, View } from 'react-native';

import Food from "./Food";
const Home=()=>{
  const dispatch = useDispatch()
    useEffect(()=>{
        console.log("inside UseEffect")
        console.log(getFoodItems.type)
        if (status==="idle"){
          console.log("IT ran the useEffect code")
          dispatch(getFoodItems())
        }
      },[status,dispatch])

      return(<View>
          <Text>
              UUUUUUUUUUUU
              <Food>
                  
              </Food>
          </Text>
      </View>

      )
}