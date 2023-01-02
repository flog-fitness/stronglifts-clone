import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { View } from '../../components/Themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SettingsStackParamList } from './SettingsScreen';

interface Setting {
  name: string;
  // pageLink: undefined
}

interface SettingsSection {
  title: string;
  data: Setting[];
}

const userSettings: SettingsSection = {
  title: 'User',
  data: [{ name: 'Profile' }, { name: 'Pro Membership' }],
};

const appSettings: SettingsSection = {
  title: 'Application Settings',
  data: [
    { name: 'Timer' },
    { name: 'Weight Unit' },
    { name: 'Display Auto Lock' },
    { name: 'Apple Health' },
    { name: 'Apple Watch' },
    { name: 'App Icon' },
  ],
};

const infoSettings: SettingsSection = {
  title: 'Information',
  data: [
    { name: 'Help Center' },
    { name: 'StrongLifts 5x5 Guide' },
    { name: 'Report Issue' },
    { name: 'Request Feature' },
    { name: 'Ask Question' },
    { name: 'Rate This App' },
    { name: 'Export Data' },
  ],
};

const dataSettings: SettingsSection = {
  title: 'Data',
  data: [{ name: 'Reset' }],
};

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
  const renderItem: ListRenderItem<SettingsSection> = ({ item }) => {
    // console.log('Item', item.name);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        {item.data.map((setting) => {
          return (
            <View style={styles.item}>
              <Text style={styles.itemText}>{setting.name}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* User Settings */}
      <FlatList data={settings} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: '#000',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
  },
  itemText: {
    color: '#fff',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#cd3',
  },
  title: {
    fontSize: 24,
    backgroundColor: '#cd3',
    color: '#fff',
  },
});
