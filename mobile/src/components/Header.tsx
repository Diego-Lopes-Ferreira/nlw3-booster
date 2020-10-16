import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

function HappyHeader({ title, showCancel = false }: HeaderProps) {

  const navigation = useNavigation()
  function goBackToMap() {
    if (!showCancel) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MapPage' }]
      });
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={navigation.goBack}
      >
        <Feather name='arrow-left' size={28} color={'#15b6d6'} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={[styles.btn, showCancel ? styles.notShowBtn : styles.goBackBtn]}
        onPress={goBackToMap}
      >
        <Feather name='x' size={28} color={showCancel ? '#fff' : '#ff669d'} />
      </TouchableOpacity>
    </View>
  );
}

export default HappyHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 12,
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    // borderColor: '#000000',
    borderColor: '#dde3f0',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
  },
  btn: {
    width: 40,
    height: 40,
    //backgroundColor: '#15c3d6',
    borderColor: '#15c3d6',
    borderWidth: 1,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackBtn: {
    borderColor: '#ff669d',
  },
  notShowBtn: {
    borderColor: '#fff',
  },
})