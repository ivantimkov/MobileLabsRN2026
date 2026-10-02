import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>

        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Лабораторна робота 1
          </Text>

          <Text style={styles.subtitle}>
            Тімков І.C., ІПЗк-24-1
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },

  header: {
    height: 60,
    backgroundColor: '#ffffff',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  textContainer: {
   position: 'absolute',
   left: 0,
   right: 0,
   alignItems: 'center',
   justifyContent: 'center',
 },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },

  subtitle: {
    fontSize: 11,
    color: '#777777',
    marginTop: 2,
  },
});