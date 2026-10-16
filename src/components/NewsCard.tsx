import { SafeAreaView } from 'react-native-safe-area-context';
import { memo } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type NewsCardProps = {
  id: string;
  title: string;
  description: string;
  onPress: () => void;
};

function NewsCard({
  id,
  title,
  description,
  onPress,
}: NewsCardProps) {
  return (

    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.number}>НОВИНА №{id}</Text>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <Text style={styles.more}>Читати далі →</Text>
    </Pressable>

  );
}

export default memo(NewsCard);

const styles = StyleSheet.create({
  card: {
    height: 144,
    padding: 14,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e6ef',
    justifyContent: 'space-between',
  },
  number: {
    color: '#5575b8',
    fontSize: 11,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#253653',
  },
  description: {
    fontSize: 13,
    color: '#667085',
  },
  more: {
    fontSize: 12,
    color: '#3559a2',
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
});
