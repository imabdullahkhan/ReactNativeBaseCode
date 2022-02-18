import React from 'react'
import { useAuth } from '../../contexts/Auth';
import { View } from 'react-native'
import bs from '../../style/BasicStyle';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';

export default function Location() {
  const auth = useAuth();

  return (
    <View style={[bs.paddingLg, bs.justifyContentBetween, bs.height100]}>
      <Text>LOCATION SCREEN</Text>
      <Button text="LOGOUT" onPress={auth.signOut} />
    </View>
  )
}