
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fundo: {
    width: '100%',
    height: '100%',
  },

  header: { //Cosmorama, localizacao
    paddingLeft: 10,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  textoheader: { //texto Cosmorama
    color: 'white',
    paddingLeft: 20,
    fontSize: 18,
    paddingRight: 2,
  },

  hoje: { //Temp
    padding: 10,
  },

  climaheader: { //Temp e icone
    flexDirection: 'row',
    alignItems: 'center', 
    paddingLeft: 10, 
  },

  alerta: { //Alerta
    width: "95%",
    height: 70,
    backgroundColor: '#b80000',
    borderRadius: 10,
    paddingLeft: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  cHorizontal: { //scroll horizontal
    width: '95%',
    alignSelf: 'center', //esse eu peguei do gemini
    height: 120,
    backgroundColor: '#01324946',
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 10,
  },

  clima: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconeClima: {
    marginTop: 5,
    marginBottom: 5,
  },

  txtClima: {
    color: 'white',
    fontSize: 16,
  },

  climaVertical: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '95%',
    alignSelf: 'center', //esse eu peguei do gemini
    backgroundColor: '#00000046',
    borderRadius: 15,
    marginTop: 20,
  },

  dia: {
    flexDirection: 'row',
  },

  nomeDia: {
    color: 'white',
    fontSize: 15,
    marginLeft: 15,
    marginTop: 10,
  },

  iconeVertical: {
    marginLeft: 100,
    marginBottom: 5,
    marginTop: 5,
  },

  informacoes: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    width: '95%', 
    alignSelf: 'center', 
    marginBottom: 10, 
  },
  
  infoClima: {
    width: "48%",
    height: 160,
    backgroundColor: '#00000046',
    borderRadius: 20,
  },

  textInfo: {
    padding: 15,
    color: 'white',
    fontSize: 16,
  },

  numeroInfo: {
    color: 'white',
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default styles;