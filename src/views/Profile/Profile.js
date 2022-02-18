import React from 'react'
import { useAuth } from '../../contexts/Auth';
import { View } from 'react-native'
import BasicStyle from '../../style/BasicStyle';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

export default function Profile() {
  const auth = useAuth();

  return (
    <View style={[BasicStyle.paddingLg, BasicStyle.justifyContentBetween, BasicStyle.height100]}>
      <Text>PROFILE SCREEN</Text>
      <Button text="LOGOUT" onPress={auth.signOut} />
    </View>
  )
}