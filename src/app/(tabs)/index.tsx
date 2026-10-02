import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import SearchBar from '@/components/SearchBar';
import NewsCard from '../../components/NewsCard';

const news = [
  {
    id: '1',
    image: require('../../../assets/home/1.jpg'),
    title: 'Житомирська політехніка – учасник міжнародного проекту',
    date: '17 вересня 2026 р.',
    description:
      'Житомирська політехніка долучається до міжнародного освітнього проекту.',
  },

  {
    id: '2',
    image: require('../../../assets/home/2.png'),
    title: 'Запрошуємо до участі у VII Всеукраїнській конференції',
    date: '22 жовтня 2026 р.',
    description:
      'Науково-практична конференція «Правова політика України».',
  },

  {
    id: '3',
    image: require('../../../assets/home/3.png'),
    title: 'Новини Житомирської політехніки',
    date: '25 жовтня 2026 р.',
    description:
      'Нова цікава подія університету.',
  }


];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>

      <SearchBar
        placeholder="Пошук..."
        value={searchQuery}
        onChangeText={(text: string) => setSearchQuery(text)}
      />

      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsCard
            image={item.image}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});