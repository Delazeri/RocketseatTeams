import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Groups } from "@screens/Groups/Groups";
import { Loading } from "@components/Loading/Loading";
import { StatusBar } from "react-native";
import { NewGroup } from "@screens/NewGroup/NewGroup";
import { Players } from "@screens/Players/Players";
import theme from "@theme/index";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={theme.COLORS.GRAY_600}
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
