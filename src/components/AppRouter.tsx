import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useTheme} from '@rneui/themed'
import React from 'react'
import ChooseCity from '../page/ChooseCity'
import ForecastOneDay from '../page/ForecastOneDay'
import Main from '../page/Main'
import {ROUTES} from '../types/routes'
import ButtonSearchCity from './MainScreen/ButtonSearchCity'

export type RootStackParamList = {
  Main: undefined
  ForecastOneDay: undefined
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
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name={ROUTES.MAIN}
          component={Main}
          options={{
            title: 'Главный экран',
            headerRight: () => <ButtonSearchCity />,
          }}
        />
        <Stack.Screen
          name={ROUTES.CHOOSE_CITY}
          component={ChooseCity}
          options={{title: 'Выбор города'}}
        />
        <Stack.Screen
          name={ROUTES.FORECAST_ONE_DAY}
          component={ForecastOneDay}
          options={{title: 'Прогноз погоды на день'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
