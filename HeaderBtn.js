import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderBtn = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('yonalish')} style={styles.text}>Kurslar</Text>
    </View>
  )
}

export default HeaderBtn;


const styles = StyleSheet.create({
    text: {
      width: 180,
      height: 40,
      backgroundColor: '#0a0a23',
      color: '#fff',
      borderRadius: 15,
      fontSize: 25,
      fontWeight: 500,
      marginRight: 10,
      textAlign:'center'
    },
  })