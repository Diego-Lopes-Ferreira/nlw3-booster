import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';
import api from '../../utils/api';
interface RouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

interface OrphanageItem {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    path: string;
    id: number;
  }>
}

export default function OrphanageData() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as RouteParams;

  const [name, setName] = useState('');
  // const [latitude, setLatitude] = useState(0);
  // const [longitude, setLongitude] = useState(0);
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpening_hours] = useState('');
  const [open_on_weekends, setOpen_on_weekends] = useState(true);

  const [images, setImages] = useState<string[]>([]);

  function addImage(uri: string) {
    const imagesList = images;
    imagesList.push(uri);
    setImages(imagesList);
  }

  function deleteImage(uri: string) {
    Alert.alert('Atenção', 'Deseja excluir essa foto?', [
      {
        text: "Sim, quero excluir",
        onPress: () => {
          const oldImagesList = images;
          const newImagesList = oldImagesList.filter(imageUri => imageUri !== uri);
          setImages(newImagesList);
        },
        style: "default"
      },
      {
        text: "Não, cancelar",
        style: "cancel"
      },
    ])
  }

  async function handleCreateOrphanage() {
    const { latitude, longitude } = params.position;
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    }
    console.log(data)

    const orpanage = new FormData();

    orpanage.append('name', name);
    orpanage.append('latitude', String(latitude));
    orpanage.append('longitude', String(longitude));
    orpanage.append('about', about);
    orpanage.append('instructions', instructions);
    orpanage.append('opening_hours', opening_hours);
    orpanage.append('open_on_weekends', String(open_on_weekends));
    images.forEach((image, index) => {
      orpanage.append('images', {
        name: `image_${index}`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })
    await api.post('/orphanages', orpanage);

    navigation.reset({
      index: 0,
      routes: [{ name: 'MapPage' }]
    });
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (status !== 'granted') {
      alert('Hey, precisamos de acesso as suas fotos para isso :)');
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) { return }

    const { uri } = result;

    addImage(uri);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        value={about}
        onChangeText={text => setAbout(text)}
        multiline
      />
      {
        /*
            <Text style={styles.label}>Whatsapp</Text>
            <TextInput
              style={styles.input}
            />
        */
      }
      <View style={styles.uploadedImagesContainer}>
        {
          images ? (

            images.map(image => (
              <TouchableOpacity
                onPress={() => deleteImage(image)}
                key={image}
              >
                <Image
                  source={{ uri: image }}
                  style={styles.uploadedImage}
                />
              </TouchableOpacity>
            ))
          ) : (
              null
            )
        }
      </View>
      <Text style={styles.label}>Fotos</Text>
      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        value={instructions}
        onChangeText={text => setInstructions(text)}
        multiline
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={opening_hours}
        onChangeText={text => setOpening_hours(text)}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpen_on_weekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={handleCreateOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  uploadedImagesContainer: {
    flexDirection: 'row',
  },
  uploadedImage: {
    height: 64,
    width: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})