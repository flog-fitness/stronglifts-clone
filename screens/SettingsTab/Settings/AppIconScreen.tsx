import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Setting from '../../../models/Setting'

export default function AppIconScreen({ name }: Setting) {
  return (
    <View>
      <Text>AppIconScreen</Text>
      <Text>Name Prop: {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})