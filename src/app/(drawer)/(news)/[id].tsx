
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function NewsDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Назад до новин</Text>
        </Pressable>

        <Text style={styles.category}>НОВИНИ УНІВЕРСИТЕТУ</Text>

        <Text style={styles.title}>
          Новини університету: подія №{id}
        </Text>

        <Text style={styles.date}>
          Номер публікації: {id}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.description}>
          Дізнайтеся про освітні події, проєкти та цікаві заходи.
          Ця сторінка демонструє, як відкривати окрему новину
          за її унікальним ідентифікатором.
        </Text>

        <Text style={styles.description}>
          У реальному застосунку тут можна розмістити повний
          текст новини, дату публікації, зображення та інші
          матеріали.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 12,
    marginBottom: 20,
  },
  backText: {
    color: '#3559a2',
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    color: '#5575b8',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  title: {
    color: '#253653',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  date: {
    color: '#7b8495',
    fontSize: 14,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e6ef',
    marginBottom: 20,
  },
  description: {
    color: '#455164',
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 18,
  },
});
