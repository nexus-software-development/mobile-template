import { Text, View } from 'react-native';

import { useSelector } from 'react-redux';
import { AuthState } from '@/store/slices/auth';

export const Home = () => {
  const { username } = useSelector((state: { auth: AuthState }) => state.auth);

  return (
    <View>
      <Text>Home</Text>
      <Text>{username}</Text>
    </View>
  );
};
