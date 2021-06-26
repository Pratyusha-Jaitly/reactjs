import {setFoodItems,getFoodItems} from "../reducers/index";
import axios from "axios";
import { call, put, take ,takeEvery} from 'redux-saga/effects';
function* getFoodItemsSaga() {
   // yield
    console.log("Saga function is called");
    const temp = [{"asfd":3,"sdfs":5}]

    const foodItemsResponse = yield call(getFoodData);
    const {data} = foodItemsResponse

    
     yield put (setFoodItems(data));    
  }

function getFoodData(){
return axios.request({
    method:"get",
    url : "http://localhost:6700/foodItems"
})
}

  function* saga() {
    yield takeEvery(getFoodItems.type,getFoodItemsSaga);
  }
  export default saga;