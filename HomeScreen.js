import React, { useState } from "react";
import { View, Text, ScrollView, Image, FlatList, StyleSheet, Button } from 'react-native';
import CodeSchool from '../../../assets/codeschool.png';
import RASM from '../../../assets/js.png';

export default function HomeScreen({ navigation }) {
  const [ people, setPeople ] = useState([
    SavodXonlik = {
      rasm: RASM,
      davomiyligi: 'Davomiyligi 1 oy',
      soha: 'SavodXonlik',
      mojjal: 'Manzil: 1-maktab 3-qavat',
      id: 1,
  },
  Dasturlash = {
      rasm: RASM,
      davomiyligi: '9 oy',
      soha: 'Dasturlash',
      mojjal: 'Manzil: 1-maktab 3-qavat',
      id: 2,
  },
  Dizayn = {
      rasm: RASM,
      davomiyligi: 'Davomiyligi 1 oy',
      soha: 'Grafik Dizayn',
      mojjal: 'Manzil: 1-maktab 3-qavat',
      id: 3,
  },
  InglizTili = {
      rasm: RASM,
      davomiyligi: 'Davomiyligi 1 oy',
      soha: 'Ingliz Tili',
      mojjal: 'Manzil: 1-maktab 3-qavat',
      id: 4,
  }
  ])
    return (
        <ScrollView style={{ backgroundColor: '#fff',}} showsVerticalScrollIndicator={false}>
          <View >
          <Image source={CodeSchool} alt="JS" style={{ width: "390px", height: "200px", margin: "auto",}}/>
          </View>
          <Text
          style={{ width: "100%", height: 150, marginTop: -5, padding: 29,  fontSize: 18,  fontWeight: 'bold', backgroundColor: '#0a0a23', 
          color: '#fff', }}>  
               CodeSchool O'quv Markazida Turli Xil Yo'nalishlarda O'qing Va Sertifikatlarni Qo'lga Kiriting
          </Text>
          
          <View>
          <Image source={CodeSchool} alt="JS" style={{ width: "410px", height: "200px", margin: "auto",}}/>
          </View>
          <View style={{ width: "100%", height: 450, padding: 29, backgroundColor: '#0a0a23',
          }}>
          <Text
          style={{  fontSize: 18,  fontWeight: 'bold', 
          color: '#fff', }}>  
               Fa'ol O'quvchilar:
             </Text>  
             <br />
             <FlatList style={styles.container}
                data={people}
                renderItem={({ item }) => (
                  <View>
                    <Image source={item.rasm} alt="rasm" style={styles.image} />
                    <View style={styles.titles}>
                    <Text style={{ fontSize: 20, fontWeight: 50 }}>{item.davomiyligi}</Text>
                   <br /> <Text style={{ fontSize: 30, fontWeight: 500 }}>{item.soha}</Text>
                   <br />  <Text style={{ fontSize: 20 }}>{item.mojjal}</Text>
                    </View>
                  </View>
                )}
                keyExtractor={( item ) => item.id}
                contentContainerStyle={{ columnGap: 10 }}
                horizontal
                />            
          </View>
          <View style={{ width: "100%", height: 430, padding: 29, backgroundColor: '#0a0a23',
          }}>
          <Text
          style={{  fontSize: 18,  fontWeight: 'bold', 
          color: '#fff', }}>  
               Yo'nalishlar:
             </Text>  
             <br />
             <FlatList style={styles.container}
                data={people}
                renderItem={({ item }) => (
                  <View>
                    <Image source={item.rasm} alt="rasm" style={styles.image} />
                    <View style={styles.titles}>
                    <Text style={{ fontSize: 20, fontWeight: 50 }}>{item.davomiyligi}</Text>
                   <Text style={{ fontSize: 30, fontWeight: 500 }}>{item.soha}</Text>
                     <Text style={{ fontSize: 20 }}>{item.mojjal}</Text>
                    </View>
                  <Text onPress={() => navigation.navigate('yonalish')} style={styles.text}>Batafsil</Text>       
                  </View>
                )}
                keyExtractor={( item ) => item.id}
                contentContainerStyle={{ columnGap: 10 }}
                horizontal
                />   
          </View>          

          
      </ScrollView>      
    )
}

const  styles = StyleSheet.create({
  container: {
    width: 400,
    height: 280,
    backgroundColor: '#fff',
    color: '#0a0a23',
    borderRadius: 15,
  },
  image: {
    borderRadius: 15
  },
  titles: {
    padding: 10,
    fontFamily: "Lato"
  },
  text: {
    width: 200,
    height: 40,
    backgroundColor: '#0a0a23',
    color: '#fff',
    borderRadius: 15,
    fontSize: 25,
    marginLeft: 10,
    textAlign:'center'
  },
  textHeader: {
    width: 200,
    height: 40,
    backgroundColor: '#fff',
    color: '#0a0a23',
    borderRadius: 15,
    fontSize: 25,
    marginLeft: 10,
    textAlign:'center'
  }
})
