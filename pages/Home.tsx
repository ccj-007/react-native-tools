import { View, Text, StyleSheet, Alert, Button, Image, } from 'react-native'
import React, { useState } from 'react'
import ScanQRCode from "../components/ScanQRCode";

export default function Home() {
  const handleAlert = () => {
    Alert.alert('提示', '发现新版本，是否现在更新',
      [{
        text: '取消',
        onPress: () => console.log('Cancel'),
        style: 'cancel'
      }, {
        text: '确认',
        onPress: () => console.log('OK'),
        style: 'default'
      }])
  }

  return (
    <View style={
      styles.container
    }>
      <ScanQRCode></ScanQRCode>
      <Button title='alert' color={'#000'} onPress={handleAlert}></Button>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})