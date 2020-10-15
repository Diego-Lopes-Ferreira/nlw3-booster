import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

import image from '../images/onboarding-one.png';

function OnboardingOne() {
  const navigation = useNavigation()

  function navigateToOtherOnboarding() {
    navigation.navigate('OnboardingTwo');
  }

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />

      <View style={styles.containerTextBig}>
        <Text style={styles.textBig}>Leve</Text>
        <Text style={styles.textBig}>felicidade</Text>
        <Text style={styles.textBig}>para o</Text>
        <Text style={styles.textBig}>mundo</Text>
      </View>
      <View style={styles.containerTextSmall}>
        <Text style={styles.textSmall}>Visite orfanatos e mude</Text>
        <Text style={styles.textSmall}>o dia dessas crianças.</Text>
      </View>

      <TouchableOpacity
        style={styles.cornerBtn}
        onPress={navigateToOtherOnboarding}
        activeOpacity={0.9}
      >
        <Feather name='arrow-right' size={26} color={'#E3A800'} />
      </TouchableOpacity>
    </View>
  )
}

export default OnboardingOne;


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
    paddingLeft: 40,
    width: '100%',
    marginBottom: 20,
  },
  textBig: {
    color: '#0089a5',
    fontSize: 48,
    lineHeight: 52,
    textAlign: 'left',
    width: '100%',
    fontFamily: 'Nunito_800ExtraBold',
  },
  containerTextSmall: {
    paddingHorizontal: 40,
    marginBottom: 80,
    width: '100%',
  },
  textSmall: {
    color: '#5C8599',
    fontSize: 20,
    fontFamily: 'Nunito_600SemiBold',
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