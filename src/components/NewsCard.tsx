import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

type NewsCardProps = {
  image: ImageSourcePropType;
  title: string;
  date: string;
  description: string;
};

export default function NewsCard({
  image,
  title,
  date,
  description,
}: NewsCardProps) {
  return (
    <View style={styles.card}>

      <Image
        source={image}
        style={styles.image}
      />

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.date}>
        {date}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 12,
    marginBottom: 16,

    padding: 12,

    backgroundColor: '#ffffff',

    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },

  image: {
    width: '100%',
    height: 160,

    borderRadius: 10,

    resizeMode: 'cover',

    marginBottom: 10,
    backgroundColor: '#f1f5f9',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',

    color: '#222222',

    marginBottom: 5,
  },

  date: {
    fontSize: 12,
    color: '#888888',

    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,

    color: '#555555',
  },
});