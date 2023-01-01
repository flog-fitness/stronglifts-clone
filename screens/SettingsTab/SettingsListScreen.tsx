import { FlatList, ListRenderItem, Pressable, StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SettingsStackParamList } from './SettingsScreen';

interface Setting {
  name: string;
  // pageLink: undefined
}

type SettingsSection = Setting[];

const userSettings: SettingsSection = [
  { name: 'Profile' },
  { name: 'Pro Membership' },
];

const appSettings: SettingsSection = [
  { name: 'Timer' },
  { name: 'Weight Unit' },
  { name: 'Display Auto Lock' },
  { name: 'Apple Health' },
  { name: 'Apple Watch' },
  { name: 'App Icon' },
];

const infoSettings: SettingsSection = [
  { name: 'Help Center' },
  { name: 'StrongLifts 5x5 Guide' },
  { name: 'Report Issue' },
  { name: 'Request Feature' },
  { name: 'Ask Question' },
  { name: 'Rate This App' },
  { name: 'Export Data' },
];

const dataSettings: SettingsSection = [{ name: 'Reset' }];

const settings: SettingsSection[] = [
  userSettings,
  appSettings,
  infoSettings,
  dataSettings,
];

type SettingsListScreenProps = NativeStackScreenProps<SettingsStackParamList>;

export default function SettingsListScreen({
  navigation,
}: SettingsListScreenProps) {
  
  const renderItem: ListRenderItem<Setting> = ({ item }) => {
    return (
        <View>
          {JSON.stringify(item)}
        </View>
    )
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={mockWorkouts}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  textHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  workoutContainer: {
    backgroundColor: 'red',
    width: '100%',
  },
  list: {
    width: '100%',
  },
  separator: {
    opacity: 0,
    height: 20,
  },
});
