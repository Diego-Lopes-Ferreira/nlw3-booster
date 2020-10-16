import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

function OrphanageDetail() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.calloutContainer}>
        <Text style={styles.calloutText}>Oi, sou um orfanato</Text>
      </View>
      <Text style={styles.text}>Oi, page ORPHANAGE DETAIL</Text>
      <TouchableOpacity
        style={styles.createOrphanageBtn}
        onPress={() => { navigation.goBack() }}
      >
        <Feather name='plus' size={20} color={'#ffffff'} />
      </TouchableOpacity>

    </View>
  )
}

export default OrphanageDetail;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#0089a5',
    fontSize: 28,
    fontFamily: 'Nunito_600SemiBold',
  },
  // * CallOut
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: '#ffffffcc',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_600SemiBold',
  },
  // * Btn
  createOrphanageBtn: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});