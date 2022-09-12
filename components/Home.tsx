import { View, Text, StyleSheet, Alert, Button, Image, } from 'react-native'
import React, { useState } from 'react'
import TabNavigator from 'react-native-tab-navigator';

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

  const [tab, setTab] = useState('home')
  return (
    <View style={
      styles.container
    }>
      <Button title='alert' color={'#000'} onPress={handleAlert}></Button>
      <TabNavigator>
        <TabNavigator.Item
          selected={tab === 'home'}
          title="Home"
          renderIcon={() => <Image source={require('../res/images/ic_polular.png')} />}
          renderSelectedIcon={() => <Image source={require('../res/images/ic_polular.png')} />}
          badgeText="1"
          onPress={() => setTab('home')}>
          {'home'}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={tab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={require('../res/images/ic_trending.png')} />}
          renderSelectedIcon={() => <Image source={require('../res/images/ic_trending.png')} />}
          renderBadge={() => <div>renderBadge</div>}
          onPress={() => setTab('profile')}>
          {'profileView'}
        </TabNavigator.Item>
      </TabNavigator>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})