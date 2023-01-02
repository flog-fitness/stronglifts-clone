import { RootTabScreenProps } from '../../types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsListScreen from './SettingsListScreen'

export default function SettingsScreen({
  navigation,
}: RootTabScreenProps<'Settings'>) {
  return <SettingsScreenNavigator />;
}

// Settings interface needs a smarter approach
interface SettingsDetailsParam {
  setting: Setting,
}

export type SettingsStackParamList = {
  SettingsList: undefined;

};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

function SettingsScreenNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='SettingsList' component={SettingsListScreen}></SettingsStack.Screen>
      <SettingsStack.Screen name='SettingsList' component={SettingsListScreen}></SettingsStack.Screen>
      <SettingsStack.Screen name='SettingsList' component={SettingsListScreen}></SettingsStack.Screen>
      <SettingsStack.Screen name='SettingsList' component={SettingsListScreen}></SettingsStack.Screen>
      <SettingsStack.Screen name='SettingsList' component={SettingsListScreen}></SettingsStack.Screen>
      <SettingsStack.Screen name='SettingsList' component={SettingsListScreen}></SettingsStack.Screen>
    </SettingsStack.Navigator>
  );
}
