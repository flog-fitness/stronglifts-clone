// export default SettingsScreen({navigation,} : RootTabScreenProps<'Settings'>) {
//   return <SettingsScreenNavigator/>;/*  */
// }

import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function SettingsScreen({ navigation } : RootTabScreenProps<'Settings'>) {
  return <SettingsScreenNavigator/>
}

interface SettingsDetailsParam {
  // setting: Settings,
}

export type SettingsStackParamList = {
  WorkoutList: undefined;
  WorkoutDetails: SettingsDetailsParam;
};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>()

function SettingsScreenNavigator() {
  return(
    <SettingsStack.Navigator>
        <SettingsStack.Screen></SettingsStack.Screen>
    </SettingsStack.Navigator>
  )

}