import { Header } from "@components/Header/Header";
import { Container, Content, Icon } from "./NewGroup.styles";
import { Highlight } from "@components/Highlight/Highlight";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subTitle="cire a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
