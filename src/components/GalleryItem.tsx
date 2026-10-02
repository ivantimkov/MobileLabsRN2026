import { StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';

type GalleryItemProps = {
  image: any;
  columns: number;
};

export default function GalleryItem({
  image,
  columns,
}: GalleryItemProps) {
  return (
    <Pressable
      style={[
        styles.container,
        columns === 1 && styles.singleColumn,
      ]}
    >
      <Image
        source={image}
        style={styles.image}
        contentFit="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },

  singleColumn: {
    width: '90%',
    alignSelf: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});