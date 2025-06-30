import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, ScrollView, } from 'react-native';
import styles from './styles.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo'; 
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
//teste


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
          <Text style={{ color: 'white', fontSize: 15, paddingLeft:10}}>Agora</Text>
          <View style={styles.climaheader}>
            <Text style={{ color: 'white', fontSize: 60, }}>33°</Text>
            <Feather name="sun" size={60} color="#f3dd1b" />
          </View>
          <Text style={{ color: 'white', fontSize: 15, paddingTop: 10, paddingLeft:10 }}>Máxima: 34º / Mínima: 17º</Text>
        </View>

        <View style={styles.alerta}>
        <MaterialCommunityIcons name="alert" size={40} color="#f3dd1b" />
          <Text style={{ color: '#ebc29b', paddingLeft: 20, }}>Alerta Laranja, Baixa Umidade</Text>
        </View>
      <View>
        <Text style={{ color: 'white', fontSize: 15, paddingTop: 10, paddingLeft: 20, }}>Previsão do tempo de hora em hora</Text>
      <ScrollView style={styles.cHorizontal} horizontal>
            <View style={styles.clima}>
              <Text style={styles.txtClima}>30º</Text>
              <Fontisto name="cloudy" size={30} color="#fff" style={styles.iconeClima} />
              <Text style={styles.txtClima}>Agora</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>27º</Text>
              <Feather name="cloud-drizzle" size={30} color="#4a7ba2" style={styles.iconeClima} />
              <Text style={styles.txtClima}>13:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>25º</Text>
              <Feather name="cloud-drizzle" size={30} color="#4a7ba2" style={styles.iconeClima} />
              <Text style={styles.txtClima}>14:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>25º</Text>
              <Fontisto name="cloudy" size={30} color="#fff" style={styles.iconeClima} />
              <Text style={styles.txtClima}>15:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>25º</Text>
              <Fontisto name="cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>16:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>24º</Text>
              <Fontisto name="cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>17:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>23º</Text>
              <Feather name="cloud" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>18:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>22º</Text>
              <Fontisto name="night-alt-cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} /> 
              <Text style={styles.txtClima}>19:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>21º</Text>
              <Fontisto name="night-alt-cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>20:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>20º</Text>
              <Fontisto name="night-alt-cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>21:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>20º</Text>
              <Fontisto name="night-alt-cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>22:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>19º</Text>
              <Entypo name="cloud" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>00:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>19º</Text>
              <Entypo name="cloud" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>01:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>18º</Text>
              <Entypo name="cloud" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>02:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>18º</Text>
              <Entypo name="cloud" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>03:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>17º</Text>
              <Entypo name="cloud" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>04:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>17º</Text>
              <Entypo name="cloud" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>05:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>18º</Text>
              <Feather name="sunrise" size={30} color="#fad921" style={styles.iconeClima} />
              <Text style={styles.txtClima}>06:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>19º</Text>
              <Feather name="sunrise" size={30} color="#fad921" style={styles.iconeClima} />
              <Text style={styles.txtClima}>07:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>20º</Text>
              <FontAwesome5 name="cloud-sun" size={24} color="#fff" style={styles.iconeClima} />
              <Text style={styles.txtClima}>08:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>22º</Text>
              <Fontisto name="cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>09:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>25º</Text>
              <Fontisto name="cloudy" size={30} color="#e9e9e9" style={styles.iconeClima} />
              <Text style={styles.txtClima}>10:00</Text>
            </View>

            <View style={styles.clima}>
              <Text style={styles.txtClima}>27º</Text>
              <Feather name="sun" size={30} color="#fad921" style={styles.iconeClima} /> 
              <Text style={styles.txtClima}>11:00</Text>
            </View>
      </ScrollView>    

          <Text style={{ color: 'white', fontSize: 15, paddingTop: 10, paddingLeft:20 }}>Previsão do tempo para 7 dia(s)</Text>

          <View style={styles.climaVertical}>
            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Hoje</Text>
              <Fontisto name="cloudy" size={30} color="#fff" style={[styles.iconeVertical, { marginLeft: 149 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>30º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Terça-Feira</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 108 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>37º / 18º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Quarta-Feira</Text>
              <FontAwesome5 name="cloud-sun" size={24} color="#efd070" style={[styles.iconeVertical, { marginLeft: 99 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>34º / 20º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Quinta-Feira</Text>
              <Fontisto name="cloudy" size={30} color="#fff" style={[styles.iconeVertical, { marginLeft: 98 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>32º / 20º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Sexta-Feita</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 108 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>38º / 24º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Sábado</Text>
              <Feather name="sun" size={30} color="#fad921" style={[styles.iconeVertical, { marginLeft: 132 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>35º / 22º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Domingo</Text>
              <Feather name="cloud-lightning" size={30} color="#d2e3f1" style={[styles.iconeVertical, { marginLeft: 122 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>22º / 12º</Text>
            </View>
          </View>

          <View style={styles.informacoes}>
            <View style={styles.infoClima}>
              <Text style={styles.textInfo}>Vento</Text>
              <Text style={styles.numeroInfo}>10 km/h</Text>
              <Text style={styles.textInfo}>Leve - Do leste</Text>
            </View>

            <View style={styles.infoClima}>
            <Text style={styles.textInfo}>Umidade</Text>
              <Text style={styles.numeroInfo}>12%</Text>
              <Text style={styles.textInfo}>Ponto de condensação 2%</Text>
            </View>
          </View>

      </View>

      <StatusBar style="auto" />
    </ScrollView>
  </ImageBackground>
  );
}
