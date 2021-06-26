
import { StyleSheet, Text, View } from 'react-native';
import {useSelector, useDispatch} from "react-redux";
const Food =()=>{
    const status = useSelector(state=>state.foodReducer.status)
    return(
        <View>
            {status=="completed"?
            <Text>completed...</Text>:
            <Text>waiting...</Text>}
        </View>
    )
}

export default Food;