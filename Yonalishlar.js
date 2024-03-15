import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Yonalishlar({ navigation }) {
  const [ dasturlash, setDasturlash ] = useState(false);
  const [ dizayn, setDizayn ] = useState(false);
  const [ savodxonlik, setSavodxonlik ] = useState(false);
  const [ inglizTili, setInglizTili ] = useState(false);
    return (
        <ScrollView showsVerticalScrollIndicator={false}  style={styles.container}>
          <Text onPress={() => navigation.navigate('home')}
          style={{ width: "100%", height: 50, fontSize: 35, fontWeight: 'bold', textAlign: "center", backgroundColor: '#0a0a23', 
          color: '#fff', }}> 
          CodeSchool
          </Text>          
          <Text
          style={{ fontSize: 26, color: '#fff', textAlign: 'center', fontWeight: 'bold' }}> 
          Yo'nalishlar
          </Text>
          <View>

          <View style={styles.title}>
            <Text onPress={() => setSavodxonlik((prev) => !prev)} style={styles.text}>Savodxonlik:       {savodxonlik ? true && (
              <Ionicons size={30} style={{ padding: 20 }} color="#fff" name="chevron-up-circle-outline"/>
            ) : (
              <Ionicons size={30}  style={{ padding: 20 }} color="#fff" name="chevron-down-circle-outline"/>
            )}  
            </Text>

          </View>
             {savodxonlik && (
              <View>
              <Text style={styles.text}>Yo'nalish: Dasturlash</Text>
              <Text style={styles.text}>Davomiyligi: 9 0y</Text>
              <Text style={styles.text}>Kurs vaqti: haftada 3 marta</Text>
              <Text style={styles.text}>Mavzular: HTML, CSS, JavaScript</Text>
              <Text style={styles.text}>HTML - 2 oy</Text>
              <Text style={styles.text}>CSS - 2 oy</Text>
              <Text style={styles.text}>JavaScript - 5 oy</Text>
              <Text style={styles.text}>Musobaqar: har oyda</Text>
              <Text style={styles.text}>Kurs Yakunlangandan So'ng Sertifikatni qo'lga kiritasiz</Text>
              </View>
             )}


          <View style={styles.title}>
            <Text onPress={() => setDasturlash((prev) => !prev)} style={styles.text}>Dasturlash:         {dasturlash ? true && (
              <Ionicons size={30} style={{ padding: 20 }} color="#fff" name="chevron-up-circle-outline"/>
            ) : (
              <Ionicons size={30}  style={{ padding: 20 }} color="#fff" name="chevron-down-circle-outline"/>
            )}  
            </Text>

          </View>
             {dasturlash && (
              <View>
              <Text style={styles.text}>Yo'nalish: Dasturlash</Text>
              <Text style={styles.text}>Davomiyligi: 9 0y</Text>
              <Text style={styles.text}>Kurs vaqti: haftada 3 marta</Text>
              <Text style={styles.text}>Mavzular: HTML, CSS, JavaScript</Text>
              <Text style={styles.text}>HTML - 2 oy</Text>
              <Text style={styles.text}>CSS - 2 oy</Text>
              <Text style={styles.text}>JavaScript - 5 oy</Text>
              <Text style={styles.text}>Musobaqar: har oyda</Text>
              <Text style={styles.text}>Kurs Yakunlangandan So'ng Sertifikatni qo'lga kiritasiz</Text>
              </View>
             )}

             <View style={styles.title}>
            <Text onPress={() => setDizayn((prev) => !prev)} style={styles.text}>Grafik Dizayn:     {dizayn ? true && (
              <Ionicons size={30} style={{ padding: 20 }} color="#fff" name="chevron-up-circle-outline"/>
            ) : (
              <Ionicons size={30}  style={{ padding: 20 }} color="#fff" name="chevron-down-circle-outline"/>
            )}  
            </Text>

          </View>
             {dizayn && (
              <View>
              <Text style={styles.text}>Yo'nalish: Dasturlash</Text>
              <Text style={styles.text}>Davomiyligi: 9 0y</Text>
              <Text style={styles.text}>Kurs vaqti: haftada 3 marta</Text>
              <Text style={styles.text}>Mavzular: HTML, CSS, JavaScript</Text>
              <Text style={styles.text}>HTML - 2 oy</Text>
              <Text style={styles.text}>CSS - 2 oy</Text>
              <Text style={styles.text}>JavaScript - 5 oy</Text>
              <Text style={styles.text}>Musobaqar: har oyda</Text>
              <Text style={styles.text}>Kurs Yakunlangandan So'ng Sertifikatni qo'lga kiritasiz</Text>
              </View>
             )}

             <View style={styles.title}>
            <Text onPress={() => setInglizTili((prev) => !prev)} style={styles.text}>Ingliz Tili:            {inglizTili ? true && (
              <Ionicons size={30} style={{ padding: 20 }} color="#fff" name="chevron-up-circle-outline"/>
            ) : (
              <Ionicons size={30}  style={{ padding: 20 }} color="#fff" name="chevron-down-circle-outline"/>
            )}  
            </Text>

          </View>
             {inglizTili && (
              <View>
              <Text style={styles.text}>Yo'nalish: Dasturlash</Text>
              <Text style={styles.text}>Davomiyligi: 9 0y</Text>
              <Text style={styles.text}>Kurs vaqti: haftada 3 marta</Text>
              <Text style={styles.text}>Mavzular: HTML, CSS, JavaScript</Text>
              <Text style={styles.text}>HTML - 2 oy</Text>
              <Text style={styles.text}>CSS - 2 oy</Text>
              <Text style={styles.text}>JavaScript - 5 oy</Text>
              <Text style={styles.text}>Musobaqar: har oyda</Text>
              <Text style={styles.text}>Kurs Yakunlangandan So'ng Sertifikatni qo'lga kiritasiz</Text>
              </View>
             )}
          </View>
        </ScrollView>        

    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#0a0a23",
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  title: {
    padding: 30,
  }
})