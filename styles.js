
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fundo: {
    width: '100%',
    height: '100%',
  },

  header: {
    paddingLeft: 10,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },

  textoheader: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 18,
    paddingRight: 2,
  },

  hoje: {
    padding: 20,
    paddingTop: 20,
  },

  txtagr: {
    color: 'white',
    fontSize: 15,

  },

  clima: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  alerta: {
    width: 380,
    height: 70,
    backgroundColor: '#b80000',
    borderRadius: 10,
    paddingLeft: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  cHorizontal: {
    width: '100%',
    height: 120,
    backgroundColor: '#01324946',
    borderRadius: 15,
    marginTop: 20,
  },

  clima: {
    padding: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconeClima: {
    width: 50,
    height: 40,
    marginTop: 5,
    marginBottom: 5,
  },

  txtClima: {
    color: 'white',
    fontSize: 16,
  },

  climaVertical: {
    width: '100%',
    height: 290,
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
    width: 35,
    height: 35,
    marginTop: 5,
  },
});

export default styles;