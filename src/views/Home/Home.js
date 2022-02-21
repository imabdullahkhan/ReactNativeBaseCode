import React from 'react'
import { useAuth } from '../../contexts/Auth';
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setCounter } from '../../redux/actions/countActions'
import bs from '../../style/BasicStyle';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { themeColor } from '../../style/Theme';
import { setTheme } from '../../redux/actions/generalActions';
import { Themes } from '../../constants'

export default function Home() {
  const auth = useAuth();
  const count = useSelector(state => state.count.count)
  const dispatch = useDispatch();

  const handleAddPress = () => dispatch(setCounter(count + 1));
  
  
  const theme = useSelector(state => state.general.theme);
  const handleThemeChangePress = () => dispatch(setTheme(Themes.LIGHT === theme ? Themes.DARK : Themes.LIGHT));
  const { text } = themeColor(theme);
  return (
    <View
      style={[bs.paddingLg, bs.justifyContentBetween, bs.height100]}
    >
      <View style={[bs.flexDirectionRow, bs.justifyContentBetween]}>
        <Text color={text}>Persisting Counter :: {count}</Text>
        <Button text="Counter + 1" style={[bs.width30]} onPress={handleAddPress} />
      </View>
      <Button text="CHANGE THEME" onPress={handleThemeChangePress} />
      <Button text="LOGOUT" onPress={auth.signOut} />
    </View>
  )
}