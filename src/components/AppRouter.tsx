import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useTheme} from '@rneui/themed'
import React from 'react'
import ChooseCity from '../page/ChooseCity'
import ForecastFiveDays from '../page/ForecastFiveDays'
import Main from '../page/Main'
import {ROUTES} from '../types/routes'
import ButtonSearchCity from './MainScreen/ButtonSearchCity'
import Title from './MainScreen/Title'

export type RootStackParamList = {
  Main: undefined
  ForecastFiveDays: undefined
  ChooseCity: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppRouter = () => {
  const {theme} = useTheme()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: theme.colors.primary},
          headerTitleAlign: 'left',
        }}>
        <Stack.Screen
          name={ROUTES.MAIN}
          component={Main}
          options={{
            title: 'Weather-D',
            headerRight: () => <ButtonSearchCity />,
            headerLeft: () => <Title />,
          }}
        />
        <Stack.Screen
          name={ROUTES.CHOOSE_CITY}
          component={ChooseCity}
          options={{title: 'Выбор города'}}
        />
        <Stack.Screen
          name={ROUTES.FORECAST_FIVE_DAYS}
          component={ForecastFiveDays}
          options={{title: 'Прогноз погоды на  5 дней'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
