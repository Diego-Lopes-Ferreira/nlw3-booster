import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

// import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import MapMarker from '../images/map-marker.png';

import api from '../utils/api';

interface OrphanageItem {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

// -22.9955881,-49.8649668
export default function MapPage() {

  const [orphanagesList, setOrphanagesList] = useState<OrphanageItem[]>([])
  const navigation = useNavigation();

  useFocusEffect(() => {
    async function fetchOrphanagesData() {
      const { data } = await api.get('/orphanages');
      const orphanages = data;
      if (orphanages) {
        setOrphanagesList(orphanages);
      }
    }
    fetchOrphanagesData();
  })

  function handleNavigateToOrphanageDetail(id: number) {
    navigation.navigate('OrphanageDetails', { id });
  }
  function handleStartCreateOrphanageRoutine() {
    navigation.navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.9955881,
          longitude: -49.8649668,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {
          orphanagesList.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={MapMarker}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                }}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.8,
                }}
              >
                <Callout
                  tooltip={true}
                  onPress={() => handleNavigateToOrphanageDetail(orphanage.id)}
                >
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>{orphanage.name}</Text>
                  </View>
                </Callout>
              </Marker>
            ) // return
          }) // map
        }
      </MapView>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>{orphanagesList.length} Orfanatos Encontrados</Text>
        {/* <SharedElement id='add_orphanage_transition_id'> */}
        <TouchableOpacity
          style={styles.createOrphanageBtn}
          onPress={handleStartCreateOrphanageRoutine}
        >
          <Feather name='plus' size={20} color={'#ffffff'} />
        </TouchableOpacity>
        {/* </SharedElement> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // marginTop: Constants.statusBarHeight + 10,
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
