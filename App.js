import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, ScrollView, } from 'react-native';
import styles from './styles.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function App() {
  return (
 
<ImageBackground source={require('./assets/fundo.jpg')} style={styles.fundo}>
    <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="menu" size={32} color="white" />
          <Text style={styles.textoheader}>Cosmorama</Text>
          <Ionicons name="location-sharp" size={20} color="white" />
        </View>

        <View style={styles.hoje}>
          <Text style={styles.txtagr}>Agora</Text>
          <View style={styles.clima}>
            <Text style={{ color: 'white', fontSize: 60, }}>33°</Text>
            <Feather name="sun" size={60} color="#f7f7f7" />
          </View>
          <Text style={{ color: 'white', fontSize: 15, paddingTop: 10, }}>Máxima: 34º / Mínima: 17º</Text>
        </View>

        <View style={styles.alerta}>
        <MaterialCommunityIcons name="alert" size={40} color="#f3dd1b" />
          <Text style={{ color: '#ebc29b', paddingLeft: 20, }}>Alerta Laranja, Baixa Umidade</Text>
        </View>
      <View style={styles.hero}>
      <Text style={styles.txtagr}>Previsão do tempo de hora em hora</Text>

      <ScrollView style={styles.cHorizontal} horizontal>
        
            <View style={styles.clima}>
              <Text style={styles.txtClima}>33º</Text>
              <Feather name="sun" size={30} color="#fad921" style={styles.iconeClima} />
              <Text style={styles.txtClima}>Agora</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>31º</Text>
              <Fontisto name="cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>14:00</Text>
            </View>
        
            <View style={styles.clima}>
              <Text style={styles.txtClima}>33º</Text>
              <Feather name="sun" size={30} color="#fad921" style={styles.iconeClima} />
              <Text style={styles.txtClima}>Agora</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>31º</Text>
              <Fontisto name="cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>14:00</Text>
            </View>
        
            <View style={styles.clima}>
              <Text style={styles.txtClima}>33º</Text>
              <Feather name="sun" size={30} color="#fad921" style={styles.iconeClima} />
              <Text style={styles.txtClima}>Agora</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>31º</Text>
              <Fontisto name="cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>14:00</Text>
            </View>
        
            <View style={styles.clima}>
              <Text style={styles.txtClima}>33º</Text>
              <Feather name="sun" size={30} color="#fad921" style={styles.iconeClima} />
              <Text style={styles.txtClima}>Agora</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>31º</Text>
              <Fontisto name="cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>14:00</Text>
            </View>
      </ScrollView>    

            <Text style={[styles.txtagr, { paddingTop: 20 }]}>Previsão do tempo para 7 dia(s)</Text>

            <View style={styles.climaVertical}>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Hoje</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 150 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>34º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Terça-Feira</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 106 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>35º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Quarta-Feira</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 150 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>34º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Quinta-Feira</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 106 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>35º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Sexta-Feita</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 150 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>34º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Sábado</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 106 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>35º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Domingo</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 106 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>35º / 17º</Text>
            </View>
            
            </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  </ImageBackground>
  );
}
