import { Header } from "@components/Header/Header";
import { Highlight } from "@components/Highlight/Highlight";
import { Container } from "./Groups.styles";
import { GroupCard } from "@components/GroupCard/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { EmptyList } from "@components/EmptyList/EmptyList";
import { Button } from "@components/Button/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => GroupCard({ title: item })}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" />
    </Container>
  );
}
