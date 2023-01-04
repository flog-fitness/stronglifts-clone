import { 
  SafeAreaView,
  StyleSheet,
  View, 
  Text, 
  TextInput,
  Keyboard} from "react-native";
import { RootTabScreenProps } from "../types";
import {CalendarList} from 'react-native-calendars';
import {useState} from 'react';

//example of how to mark stuff
//We should add a date field to workouts and pull data from there
const marked = {
  '2023-01-10': { marked: true },
  '2023-01-12': { selected: true },
};

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
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  keyboardType={'default'}
                  keyboardAppearance={'dark'}
                  value={text}
                  multiline={true}
                  onSubmitEditing={Keyboard.dismiss}
              />
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
              <View style = {{paddingTop: 100}}>
                  <Text style = {{color: 'white',}}>Undeveloped</Text>
              </View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
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
