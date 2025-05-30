import { Container, Icon, Name } from "./PlayerCard.styles";

import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove}/>
    </Container>
  );
}
