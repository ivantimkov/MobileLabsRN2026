
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { router } from 'expo-router';

import NewsCard from '../../../components/NewsCard';

type News = {
  id: string;
  title: string;
  description: string;
};

function createNews(start: number, count: number): News[] {
  return Array.from({ length: count }, (_, index) => {
    const id = start + index;

    return {
      id: String(id),
      title: `Новини університету: подія №${id}`,
      description: `Дізнайтеся про освітні події, проєкти та цікаві заходи. Запис №${id}.`,
    };
  });
}

const INITIAL_NEWS = createNews(1, 120);
const ITEM_HEIGHT = 156;

export default function NewsScreen() {
  const [news, setNews] = useState(INITIAL_NEWS);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const refreshNews = () => {
    setRefreshing(true);

    setTimeout(() => {
      setNews(createNews(1, 120));
      setHasMore(true);
      setRefreshing(false);
    }, 800);
  };

  const loadMoreNews = () => {
    if (loadingMore || !hasMore || refreshing) {
      return;
    }

    setLoadingMore(true);

    setTimeout(() => {
      setNews((currentNews) => {
        const nextId = currentNews.length + 1;

        if (nextId > 200) {
          setHasMore(false);
          return currentNews;
        }

        return [...currentNews, ...createNews(nextId, 20)];
      });

      setLoadingMore(false);
    }, 800);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <Text style={styles.heading}>Стрічка новин</Text>

        <Text style={styles.subtitle}>
          Новин у списку: {news.length}
        </Text>

        <FlatList
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NewsCard
              id={item.id}
              title={item.title}
              description={item.description}
              onPress={() =>
                router.push(`/(drawer)/(news)/${item.id}`)
              }
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshNews}
            />
          }
          onEndReached={loadMoreNews}
          onEndReachedThreshold={0.5}
          getItemLayout={(_, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator
                style={styles.loader}
                color="#3559a2"
              />
            ) : null
          }
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
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#253653',
  },
  subtitle: {
    fontSize: 13,
    color: '#667085',
    marginTop: 5,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  separator: {
    height: 12,
  },
  loader: {
    marginVertical: 20,
  },
});
