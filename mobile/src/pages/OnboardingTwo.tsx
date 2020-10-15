import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

import image from '../images/onboarding-two.png';

function OnboardingTwo() {

  const navigation = useNavigation();

  function startApp() {
    // proccess
    navigation.reset({
      index: 0,
      routes: [{ name: 'MapPage' }],
    });
  }

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />

      <View style={styles.containerTextBig}>
        <Text style={styles.textBig}>Escolha um orfanato no mapa e faça uma visita</Text>
      </View>

      <TouchableOpacity
        style={styles.cornerBtn}
        onPress={startApp}
        activeOpacity={0.9}
      >
        <Feather name='arrow-right' size={26} color={'#E3A800'} />
      </TouchableOpacity>
    </View>
  )
}

export default OnboardingTwo;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#D3E2E5'
  },
  image: {
    position: 'absolute',
    top: Constants.statusBarHeight + 10,

  },
  containerTextBig: {
    paddingRight: 40,
    width: '100%',
    marginBottom: 80,
  },
  textBig: {
    color: '#0089a5',
    fontSize: 48,
    lineHeight: 52,
    textAlign: 'right',
    width: '100%',
    fontFamily: 'Nunito_800ExtraBold',
  },
  cornerBtn: {
    width: 56,
    height: 56,
    backgroundColor: '#F8ECD3',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});