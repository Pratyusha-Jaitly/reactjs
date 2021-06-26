import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View ,
  Button,Alert,SectionList,
  SafeAreaView,TextInput} from 'react-native';

// const List  = (items)=>{
//   return (
//     <Text>sdfasdf{items.length}
//     {items.map(a=>{
//       return(<Text>{a}</Text>)
//     })}
//     </Text>
//   )
//   // items.map(item=>{
//   //   return(
//   //     <Text>aSDFasfd</Text>
//   //   )
//   // })
//   // if(items.length==0)
//   //   return <></>

// }

export default function App() {
  const [task, setCurrentTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.titleText}>
      {"\n"}
        
        To Do List </Text>
       
      <StatusBar style="auto" />
      <Text style={styles.baseText}>{'\n'}</Text>
      <View style={styles.fixToText}>
      <Text style={styles.baseText}>
       
    TASK :  </Text>
    
    <TextInput
        style={styles.input}
        onChangeText={setCurrentTask}
        placeholder="Enter your task here"
        value={task}
      /> 
      <Text><Button title="ADD TASK"
      onPress={()=>{
        let taskObj = {taskName:task,
        taskId : Math.random()
        }
        let newList = [...taskList,taskObj];
        setTaskList(newList);
      }}
      ></Button></Text>
      </View>
      <Text>{"\n"}</Text>
      <Text style={styles.header}>TASKS {taskList.length}</Text>
      {taskList.length>0?
      <View>
    
    
       {taskList.map(item=>{
         return(
         <View style={styles.item}>
         <Text style={styles.title}>{item.taskName}</Text>
         <Button title="REMOVE TASK"
      onPress={()=>{

        let newList = taskList.filter(current=>current.taskId!=item.taskId)
        setTaskList(newList);
      }}
      ></Button>
       </View>)


       })}
     </View>
    
      :<></>}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
    
  }, title: {
    fontSize: 24
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold"
  },
  baseText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
});
