import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function OnlineDarsScreen({ navigation }) {
    return (
        <View style={styles.container}>
          <Text onPress={() => navigation.navigate('home')}
          style={{ width: "100%", height: 50, fontSize: 35, fontWeight: 'bold', textAlign: "center", backgroundColor: '#0a0a23', 
          color: '#fff', }}> 
          CodeSchool
          </Text>        
          <Text
          style={{ fontSize: 26, color: '#fff', fontWeight: 'bold' }}> 
            Kursga Yozilish
          </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#0a0a23"
  }
})