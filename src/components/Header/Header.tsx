import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./Header.styles";
import logoPng from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};
export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();
  function handleGoHome() {
    navigation.navigate("groups");
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoHome}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoPng} />
    </Container>
  );
}
