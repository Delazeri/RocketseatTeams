import { TouchableOpacityProps } from "react-native";
import { Container, ButtonIconProps, Icon } from "./ButtonIcon.styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon type={type} name={icon} />
    </Container>
  );
}
