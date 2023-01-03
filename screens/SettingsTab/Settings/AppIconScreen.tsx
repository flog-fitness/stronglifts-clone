import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Setting from '../../../models/Setting'

interface SetitngsProps {
  setting: Setting;
  onClick?: () => void;
}


export default function AppIconScreen({ setting }: SetitngsProps) {
  return (
    <View>
      <Text>AppIconScreen</Text>
      <Text>Setting Object: {JSON.stringify(setting)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})