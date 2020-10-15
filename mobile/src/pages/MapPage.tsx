import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';

import MapMarker from '../images/map-marker.png';


// -22.9955881,-49.8649668
export default function MapPage() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.9955881,
          longitude: -49.8649668,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={MapMarker}
          coordinate={{
            latitude: -22.9955881,
            longitude: -49.8649668,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
        >
          <Callout
            tooltip={true}
            onPress={() => { alert('Voce clicou :)') }}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Oi, sou um orfanato</Text>
            </View>
          </Callout>

        </Marker>
      </MapView>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>2 Orfanatos Encontrados</Text>
        <TouchableOpacity
          style={styles.createOrphanageBtn}
          onPress={() => { alert('Create Orphanage') }}
        >
          <Feather name='plus' size={20} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: Constants.statusBarHeight + 10,
  },
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
  // * Footer
  footerContainer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },
  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold',
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
