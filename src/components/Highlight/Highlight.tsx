import { Container, SubTitle, Title } from "./Highlight.styles";

type Props = {
  title: string;
  subTitle: string;
};
export function Highlight({ title, subTitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
