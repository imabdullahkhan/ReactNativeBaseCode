import React from 'react'
import { useAuth } from '../../contexts/Auth';
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setCounter } from '../../redux/actions/countActions'
import bs from '../../style/BasicStyle';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

export default function Home() {
  const auth = useAuth();
  const count = useSelector(state => state.count.count)
  const dispatch = useDispatch();

  const handleAddPress = () => dispatch(setCounter(count + 1));

  return (
    <View
      style={[bs.paddingLg, bs.justifyContentBetween, bs.height100]}
    >
      <View style={[bs.flexDirectionRow, bs.justifyContentBetween]}>
        <Text>Persisting Counter :: {count}</Text>
        <Button text="Counter + 1" style={[bs.width30]} onPress={handleAddPress} />
      </View>
      <Button text="LOGOUT" onPress={auth.signOut} />
    </View>
  )
}