
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { Redirect, router } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

function CustomDrawerContent() {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <Text style={styles.heading}>МЕНЮ</Text>

        <Pressable
          style={styles.item}
          onPress={() => router.navigate('/(drawer)/(news)')}
        >
          <Text style={styles.itemText}>Новини</Text>
        </Pressable>

        <Pressable
          style={styles.item}
          onPress={() => router.navigate('/(drawer)/faq')}
        >
          <Text style={styles.itemText}>Довідка</Text>
        </Pressable>

        <View style={styles.separator} />

        <Pressable
          style={styles.item}
          onPress={() => {
            logout();
            router.replace('/login');
          }}
        >
          <Text style={styles.logoutText}>Вийти</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default function DrawerLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Drawer
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{
        headerTitle: 'Мій застосунок',
      }}
    >
      <Drawer.Screen
        name="(news)"
        options={{
          title: 'Новини',
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="faq"
        options={{
          title: 'Довідка',
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#7b8495',
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#253653',
  },
  logoutText: {
    fontSize: 16,
    color: '#d14343',
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e6ef',
    marginVertical: 12,
  },
});
