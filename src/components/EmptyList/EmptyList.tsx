import { Container, Message } from "./EmptyList.styles";

type Props = {
  message: string;
};

export function EmptyList({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
