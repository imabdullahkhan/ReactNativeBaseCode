import React from 'react'
import { useAuth } from '../../contexts/Auth';
import { View } from 'react-native'
import Button from '../../components/Button/Button';
import bs from '../../style/BasicStyle';

export default function SignIn() {
  const auth = useAuth();

  return (
    <View style={[bs.justifyContentEnd, bs.height100, bs.paddingXl]}>
      <Button text="LOGIN" onPress={auth.signIn} />
    </View>
  );
}