import { StatusBar } from 'expo-status-bar';
import { 
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
ImageBackground} from 'react-native';
import EditarImovel from './src/pages/Editar_Imovel/editarImovel';


export default function App() {
  return (

    <View style={styles.container}>
      <ImageBackground style = {styles.bg}
      source = {require('./src/assets/Image/background.png')}>
      <EditarImovel  style={{position:'absolute'}}/>
      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',

   
  },
  bg:{
    flex:1,
    justifyContent: 'center'
    
  }


})
