import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { View } from "react-native";

import { Groups } from "@screens/Groups/Groups";
import { Players } from "@screens/Players/Players";
import { NewGroup } from "@screens/NewGroup/NewGroup";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="groups" component={Groups} />
        <Screen name="newGroup" component={NewGroup} />
        <Screen name="players" component={Players} />
      </Navigator>
    </View>
  );
}
