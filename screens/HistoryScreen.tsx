import { 
  SafeAreaView,
  StyleSheet,
  View, 
  Text, 
  TextInput,
  Keyboard,
  ListViewComponent,
  ScrollView} from "react-native";
import { RootTabScreenProps } from "../types";
import {CalendarList} from 'react-native-calendars';
import {useState} from 'react';
import Workout from "../models/Workout";


const mockWorkouts: Workout[] = [
	{
		name: "Workout B",
		exercises: [
			{ name: "Deadlift", sets: 3, reps: 5, weight: 125 },
			{ name: "DB OHP", sets: 3, reps: 5, weight: 30 },
			{ name: "Chinups", sets: 3, reps: 5, weight: "BW" },
		],
		scheduled: new Date(),
        completed: new Date("2023-01-12"),
        note: 'Took a little too much pree and woke up in the ER',
        id: 1
	},
	{
		name: "Workout A",
		exercises: [
			{ name: "Squat", sets: 3, reps: 8, weight: 95 },
			{ name: "Bench", sets: 3, reps: 5, weight: 50 }, // this guys weak af
			{ name: "BB Row", sets: 3, reps: 5, weight: 65 },
		],
		scheduled: new Date(),
        completed: new Date("2023-01-13"),
        note: 'Scalled back my pre by 30% did not wake up in the ER',
        id: 2,
	},
	{
		name: "Workout B",
		exercises: [
			{ name: "Deadlift", sets: 3, reps: 5, weight: 125 },
			{ name: "DB OHP", sets: 3, reps: 5, weight: 30 },
			{ name: "Chinups", sets: 3, reps: 5, weight: "BW" },
		],
		scheduled: new Date(),
        completed: new Date("2023-01-15"),
        note: 'Had to stop half way to pee :(',
        id: 3,
	},
	{
		name: "Workout A",
		exercises: [
			{ name: "Squat", sets: 3, reps: 8, weight: 95 },
			{ name: "Bench", sets: 3, reps: 5, weight: 50 },
			{ name: "BB Row", sets: 3, reps: 5, weight: 65 },
		],
		scheduled: new Date(),
        completed: new Date("2023-01-23"),
        note: 'Great Pump',
        id: 4,
	},
];


//example of how to mark stuff
//We should add a date field to workouts and pull data from there
const marked = {

    '2023-01-10': { marked: true },
    '2023-01-12': { selected: true },
  
};

const testMarked = {
    
}

export default function HistoryScreen({
navigation,
}: RootTabScreenProps<"History">) {

  const [DisplayedTab, setDisplayedTab] = useState('calendar'); //calendar tab displayed as default
  const [text, onChangeText] = useState("notes...");
  
  //tabs for List/Calendar/Notes.
  if (DisplayedTab == 'calendar'){
      return (
          <View style={styles.historyContainer}>
              <View style = {styles.selectionDiv}>
                      <Text style = {styles.unselectedText} onPress = {()=> setDisplayedTab('list')}>{'List'}</Text>
                      <Text style = {styles.selectedText} onPress = {()=> setDisplayedTab('calendar')}>{'Calendar'}</Text>
                      <Text style = {styles.unselectedText} onPress = {()=> setDisplayedTab('notes')}>{'Notes'}</Text>
              </View>
              <SafeAreaView style={styles.calendarWrapper}>
                  <CalendarList   //there is an error with the calendars current date. It marks the current day on every month...
                      style={{
                          borderWidth: 10,
                          borderColor: 'black',
                      }}
                      theme={{
                          calendarBackground: 'black',
                          dayTextColor: '#fff',
                          textDisabledColor: '#444',
                          monthTextColor: '#888',
                      }}
                      markedDates = {marked}  //display marked dates
                  />
              </SafeAreaView> 
          </View>
      );
  } else if (DisplayedTab === 'notes'){
      return (
          <View style={styles.historyContainer}> 
            <View style = {styles.selectionDiv}>
                    <Text style = {styles.unselectedText} onPress = {()=> setDisplayedTab('list')}>{'List'}</Text>
                    <Text style = {styles.unselectedText} onPress = {()=> setDisplayedTab('calendar')}>{'Calendar'}</Text>
                    <Text style = {styles.selectedText} onPress = {()=> setDisplayedTab('notes')}>{'Notes'}</Text>
            </View> 
            
            <>
                {mockWorkouts
                .filter((workout): boolean => !!workout.completed)
                .sort((a, b) => (a.completed! < b.completed! ? 1 : -1))
                .map((workout)=>{
                    return(
                        <View key = {workout.id} style={styles.workoutListCard}>
                            <Text style={styles.notesText}>{workout.note}</Text>
                            <Text style={styles.notesText}>{workout.completed?.toDateString()}</Text>
                        </View>
                    )
                })}
            </>


          </View>
          
      );
  } else if (DisplayedTab === 'list'){
      return (
          <View style={styles.historyContainer}> 
              <View style = {styles.selectionDiv}>
                      <Text style = {styles.selectedText} onPress = {()=> setDisplayedTab('list')}>{'List'}</Text>
                      <Text style = {styles.unselectedText} onPress = {()=> setDisplayedTab('calendar')}>{'Calendar'}</Text>
                      <Text style = {styles.unselectedText} onPress = {()=> setDisplayedTab('notes')}>{'Notes'}</Text>
              </View>
              <ScrollView>
                {mockWorkouts
                .filter((workout): boolean => !!workout.completed)
                .sort((a, b) => (a.completed! < b.completed! ? 1 : -1))
                .map((workout)=>{
                    return(
                        <View key = {workout.id} style={styles.workoutListCard}>
                            <View style={styles.activityRow}>
                                <Text style={[styles.notesText, styles.left]}>{workout.name}</Text>
                                <Text style={[styles.notesText, styles.right]}>{workout.completed?.toDateString()}</Text>
                            </View>
                            <>
                                {workout.exercises.map((exercise)=>{
                                    return(
                                        <>
                                        <View style={styles.separator}/>
                                        <View key = {(exercise.name)} style = {styles.activityRow}>
                                            <Text style={[styles.notesText, styles.left]}>{exercise.name}</Text>
                                            <Text style={[styles.notesText, styles.right]}>{
                                                exercise.reps + 'x' 
                                                + exercise.sets + ' ' 
                                                + exercise.weight + 'lbs'}
                                            </Text>
                                        </View>
                                        </>
                                    )
                                })}
                            </>
                            
                        </View>
                    )
                })}
            </ScrollView>
          </View>
      );
  }
}

const styles = StyleSheet.create({

//workout List card
workoutListCard: {
    backgroundColor: '#5A5A5A',
    color: 'white',
    height: 'auto',
    width: 335,
    padding: 5,
    margin: 'auto',
    marginTop: 10,
    borderRadius: 10,
  },
  activityRow:{
    flexDirection: 'row'
  },
  left:{
    marginLeft: 0,
    marginRight: 'auto'
  },
  right:{
    marginRight: 0,
    marginLeft: 'auto'
  },
  notesText: {
    padding: 5,
    color: 'white',
  },
  separator: {
    backgroundColor: 'white',
    opacity: 0.2,
    width: '100%',
    height: 1,
  },


historyContainer: { //page container
  flex: 1,
  alignItems: "center",
  paddingTop: 1,
  paddingHorizontal: 20,
  backgroundColor: 'black',
},
  selectionDiv: { //selection header container
      flexDirection: 'row',
      width: '100%',
      height: 30,
      margin: 10,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 60,
      justifyContent: 'space-between',
      backgroundColor: '#5A5A5A',
      borderRadius: 10,
  },
  unselectedText: { //selection text container (unselected)
      width: '33%',
      height: 'auto',
      backgroundColor: '#5A5A5A',
      color: 'white',
      fontWeight: 'bold',
      padding: 6,
      borderRadius: 10,
      textAlign: 'center',
      overflow: 'hidden',
  },
  selectedText: { //could probably change to just a background color and add to styles of selected text
      width: '33%',
      height: 'auto',
      backgroundColor: '#a9a9a9',
      color: 'white',
      fontWeight: 'bold',
      padding: 6,
      borderRadius: 10,
      borderColor: 'grey',
      textAlign: 'center',
      overflow: 'hidden',
  },
  calendarWrapper:{
      height: '100%', 
      width: 400,
      justifyContent: "center",    
  },
  input: {
      backgroundColor: '#5A5A5A',
      color: 'white',
      height: '30%', 
      width: 350,
      margin: 'auto',
      borderRadius: 10,
      padding: 10,
      overflow: 'hidden'
  },

});
