
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
} from 'react-native';

const faqData = [
  {
    title: 'Робота із застосунком',
    data: [
      {
        question: 'Як відкрити новину?',
        answer:
          'Відкрий розділ «Новини» та натисни на потрібну картку.',
      },
      {
        question: 'Як оновити список новин?',
        answer:
          'Потягни список униз, щоб запустити оновлення.',
      },
    ],
  },
  {
    title: 'Обліковий запис',
    data: [
      {
        question: 'Як вийти із застосунку?',
        answer:
          'Відкрий бічне меню та натисни «Вийти».',
      },
      {
        question: 'Що робити, якщо не можу увійти?',
        answer:
          'Переконайся, що поля email і пароля не порожні.',
      },
    ],
  },
  {
    title: 'Навігація',
    data: [
      {
        question: 'Що таке бічне меню?',
        answer:
          'Це меню для переходу між розділами застосунку.',
      },
      {
        question: 'Як повернутися до новин?',
        answer:
          'Відкрий бічне меню та вибери розділ «Новини».',
      },
    ],
  },
];

export default function FAQScreen() {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'bottom']}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Довідковий центр</Text>

        <Text style={styles.subtitle}>
          Відповіді на поширені запитання
        </Text>

        <SectionList
          sections={faqData}
          keyExtractor={(item, index) => item.question + index}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionTitle}>
              {section.title}
            </Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.question}>
                {item.question}
              </Text>

              <Text style={styles.answer}>
                {item.answer}
              </Text>
            </View>
          )}
          contentContainerStyle={styles.list}
          stickySectionHeadersEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#253653',
  },
  subtitle: {
    fontSize: 14,
    color: '#667085',
    marginTop: 6,
    marginBottom: 20,
  },
  list: {
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3559a2',
    marginTop: 12,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e6ef',
  },
  question: {
    fontSize: 15,
    fontWeight: '600',
    color: '#253653',
    marginBottom: 7,
  },
  answer: {
    fontSize: 14,
    color: '#667085',
    lineHeight: 21,
  },
});
