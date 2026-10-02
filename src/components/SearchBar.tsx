import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

export default function CustomSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Searchbar
      placeholder="Пошук..."
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={{ backgroundColor: '#f8fafc', borderRadius: 10, marginBottom: 16 }}
    />
  );
}