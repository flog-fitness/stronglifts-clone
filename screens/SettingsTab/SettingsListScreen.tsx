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
import Colours from '../../constants/Colors';

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
  data: [{ name: 'Reset' }, { name: 'Export' }],
};

const settings: SettingsSection[] = [
  userSettings,
  appSettings,
  infoSettings,
  dataSettings,
];

type SettingsListScreenProps = NativeStackScreenProps<SettingsStackParamList>;

function assignStyle(data: Setting[], index: number) {
  if (data.length == 1) {
  }

  if (index == 0) {
    return styles.topItem;
  } else if (index + 1 == data.length) {
    return styles.bottomItem;
  } else {
    return styles.item;
  }
}

export default function SettingsListScreen({
  navigation,
}: SettingsListScreenProps) {
  const renderItem: ListRenderItem<SettingsSection> = ({ item }) => {
    // console.log('Item', item.name);
    return (
      <View style={styles.container}>
        {item.data.map((setting, index) => {
          console.log('## Key', index);
          return (
            <Pressable>
              <View style={assignStyle(item.data, index)}>
                <Text style={styles.itemText}>{setting.name}</Text>
              </View>
            </Pressable>
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
    // paddingTop: StatusBar.currentHeight,
    padding: 4,
    marginHorizontal: 8,
    marginVertical: 12,
    // backgroundColor: 'transparent',
    backgroundColor: "#000",
  },
  item: {
    padding: 8,
    backgroundColor: '#f9c2ff',
    borderTopWidth: 1,
    borderColor: Colours.subtextGrey,
  },
  topItem: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    padding: 8,
    backgroundColor: '#f9c2ff',
  },
  bottomItem: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 8,
    backgroundColor: '#f9c2ff',
    borderTopWidth: 1,
    borderColor: Colours.subtextGrey,
  },
  itemText: {
    // color: '#fff',
  },
  header: {
    fontSize: 30,
    backgroundColor: '#cd3',
  },
  title: {
    fontSize: 24,
    backgroundColor: '#cd3',
    color: '#fff',
  },
});
