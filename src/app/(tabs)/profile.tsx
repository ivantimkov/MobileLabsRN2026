import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Switch,
  Alert,
} from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('Тімков Іван Сергійович');
  const [email, setEmail] = useState('timkov@student.ztu.edu.ua');
  const [group, setGroup] = useState('ІПЗк-24-1');

  const [notifications, setNotifications] = useState(true);

  // Кнопка хрестик
  const clearFields = () => {
    setName('');
    setEmail('');
    setGroup('');
  };

  // Кнопка галочка
  const saveChanges = () => {
    Alert.alert(
      'Профіль',
      'Дані введено!'
    );
  };

  return (
    <View style={styles.container}>

      {/* Верхня частина */}
      <View style={styles.top}>

        <View style={styles.buttons}>

          {/* Хрестик */}
          <Pressable
            style={styles.circleButton}
            onPress={clearFields}
          >
            <FontAwesome
              name="times"
              size={20}
              color="#fff"
            />
          </Pressable>

          {/* Галочка */}
          <Pressable
            style={styles.circleButton}
            onPress={saveChanges}
          >
            <FontAwesome
              name="check"
              size={20}
              color="#fff"
            />
          </Pressable>

        </View>

      </View>

      {/* Аватар */}
      <View style={styles.avatar}>
        <FontAwesome
          name="user"
          size={55}
          color="#666"
        />
      </View>

      {/* ПІБ */}
      <View style={styles.nameSection}>

        <Text style={styles.label}>
          ПІБ
        </Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Введіть ПІБ"
        />

      </View>

      {/* Контакти */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          КОНТАКТИ
        </Text>

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Введіть Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>
          Група
        </Text>

        <TextInput
          style={styles.input}
          value={group}
          onChangeText={setGroup}
          placeholder="Введіть групу"
        />

      </View>

      {/* Налаштування */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          НАЛАШТУВАННЯ
        </Text>

        <View style={styles.notification}>

          <View style={styles.notificationLeft}>

            <FontAwesome
              name="bell-o"
              size={20}
              color="#5575b8"
            />

            <Text style={styles.notificationText}>
              Сповіщення
            </Text>

          </View>

          <Switch
            value={notifications}
            onValueChange={setNotifications}
          />

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  top: {
    height: 130,
    backgroundColor: '#35559b',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    padding: 15,
  },

  circleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#6d89c2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 125,
    height: 125,
    borderRadius: 63,
    backgroundColor: '#eeeeee',
    borderWidth: 3,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -65,
  },

  nameSection: {
    paddingHorizontal: 20,
    marginTop: 15,
  },

  label: {
    fontSize: 13,
    color: '#657184',
    marginBottom: 5,
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#d9dee7',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#455164',
    marginBottom: 12,
  },

  card: {
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#718096',
    marginBottom: 12,
  },

  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  notificationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  notificationText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
  },
});