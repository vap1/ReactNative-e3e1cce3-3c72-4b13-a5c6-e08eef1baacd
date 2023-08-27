
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { User } from '../types/UserTypes';
import { dataInputApi } from '../apis/DataInputApi';

type DataInputFormProps = {
  onSubmit: () => void;
};

const DataInputForm: React.FC<DataInputFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<User>({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (key: keyof User, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await dataInputApi({ user });
      Alert.alert('Success', 'Data input successful');
      onSubmit();
    } catch (error) {
      Alert.alert('Error', 'Failed to perform data input');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="User ID"
        value={user.userId}
        onChangeText={(value) => handleInputChange('userId', value)}
      />
      <TextInput
        placeholder="First Name"
        value={user.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
      />
      <TextInput
        placeholder="Last Name"
        value={user.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
      />
      <TextInput
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        placeholder="Phone"
        value={user.phone}
        onChangeText={(value) => handleInputChange('phone', value)}
      />
      <TextInput
        placeholder="Address"
        value={user.address}
        onChangeText={(value) => handleInputChange('address', value)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default DataInputForm;