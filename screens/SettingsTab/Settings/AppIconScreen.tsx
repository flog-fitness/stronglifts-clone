import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppIconScreen({ setting }) {
  return (
    <View>
      <Text>AppIconScreen</Text>
      <Text>{JSON.stringify(setting)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})