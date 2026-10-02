import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import GalleryItem from '../../components/GalleryItem';

const photos = [
  { id: '1', image: require('@/assets/home/1.jpg') },
  { id: '2', image: require('@/assets/home/2.png') },
  { id: '3', image: require('@/assets/home/1.jpg') },
  { id: '4', image: require('@/assets/home/3.png') },
  { id: '5', image: require('@/assets/home/1.jpg') },
  { id: '6', image: require('@/assets/home/2.png') },
];

export default function Gallery() {
  const [columns, setColumns] = useState(2);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Фотогалерея</Text>

        <View style={styles.buttons}>
          <Pressable onPress={() => setColumns(2)}>
            <FontAwesome
              name="th"
              size={24}
              color={columns === 2 ? '#222' : '#aaa'}
            />
          </Pressable>

          <Pressable onPress={() => setColumns(1)}>
            <FontAwesome
              name="list"
              size={24}
              color={columns === 1 ? '#222' : '#aaa'}
            />
          </Pressable>
        </View>
      </View>

      <FlatList
        key={columns}
        data={photos}
        numColumns={columns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GalleryItem
            image={item.image}
            columns={columns}
          />
        )}
        columnWrapperStyle={columns === 2 ? styles.row : undefined}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  buttons: {
    flexDirection: 'row',
    gap: 18,
  },

  row: {
    justifyContent: 'space-between',
  },


});