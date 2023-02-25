import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/Telas/Cesta';
import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import * as SplashScreen from 'expo-splash-screen';

import cesta from './src/Telas/mocks/cesta';


export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  SplashScreen.hideAsync();
 
  const [fontCarregada] = useFonts({
     'Montserrat': Montserrat_400Regular,
     'MontserratBold': Montserrat_700Bold
  });

  if (!fontCarregada) {
    return null;
  }

  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta {...cesta}/>
    </SafeAreaView>
  );
}