
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { User } from '../types/UserTypes';
import SearchApi from '../apis/SearchApi';

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = async () => {
    try {
      const response = await SearchApi.search({ keyword });
      setSearchResults(response.searchResults);
    } catch (error) {
      console.error('Failed to perform search:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => (
          <View>
            <Text>First Name: {item.firstName}</Text>
            <Text>Last Name: {item.lastName}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Address: {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;