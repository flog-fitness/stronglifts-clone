import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';
import Colors from '../../../constants/Colors';

const ProfileScreen = () => {
  return (
    <>
      <View style={styles.section}>
        <Pressable style={styles.containerTop}>
          <View style={styles.verticalFlex}>
            <Text style={styles.mainText}>Victor Smith (username)</Text>
          </View>
        </Pressable>

        <Pressable style={styles.containerBottom}>
          <View style={styles.verticalFlex}>
            <Text style={styles.greyText}>victor@smith.com (email)</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
    // backgroundColor: '#5ee',
  },
  containerTop: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // Border
    borderBottomWidth: 1,
    borderBottomColor: Colors.superLightGrey,
    // Border Radius
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  containerRound: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // Border Radius
    borderRadius: 10,
    // Border
    borderBottomWidth: 1,
    borderBottomColor: Colors.superLightGrey,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // Border
    borderBottomWidth: 1,
    borderBottomColor: Colors.superLightGrey,
  },
  containerBottom: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // Border
    borderBottomWidth: 1,
    borderBottomColor: Colors.superLightGrey,
    // Border Radius
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  verticalFlex: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    // backgroundColor: '#582ef2',
  },
  switchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: '#582',
  },
  headerText: {
    // paddingHorizontal: 10,
    marginHorizontal: 15,
    fontSize: 16,
  },
  mainText: {
    fontSize: 16,
  },
  greyText: {
    color: Colors.subtextGrey,
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: Colors.subtextGrey,
  },
});
