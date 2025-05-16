          import { useState } from "react";

          import { Container, Form, HeaderList, NumberOfPlayers } from "./Players.styles";

          import { FlatList } from "react-native";

          import { Highlight } from "@components/Highlight/Highlight";
          import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
          import { Header } from "@components/Header/Header";
          import { Input } from "@components/Input/Input";
          import { Filter } from "@components/Filter/Filter";
          import { PlayerCard } from "@components/PlayerCard/PlayerCard";
          import { EmptyList } from "@components/EmptyList/EmptyList";
          import { Button } from "@components/Button/Button";
          import { useRoute } from "@react-navigation/native";

          type RouteParams = {
            group: string;
          };

          export function Players() {
            const [team, setTeam] = useState("Time A");
            const [players, setPlayers] = useState([]);

            const route = useRoute();
            const { group } = route.params as RouteParams;

            return (
              <Container>
                <Header showBackButton />
                <Highlight title={group} subTitle="Adicione a galera e separe os times" />
                <Form>
                  <Input placeholder="Nome da turma" autoCorrect={false} />
                  <ButtonIcon icon="add" />
                </Form>
                <HeaderList>
                  <FlatList
                    data={["Time A", "Time B", "Time C"]}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <Filter
                        title={item}
                        isActive={item === team}
                        onPress={() => setTeam(item)}
                      />
                    )}
                    horizontal
                  />
                  <NumberOfPlayers>{players.length}</NumberOfPlayers>
                </HeaderList>
                <FlatList
                  data={players}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <PlayerCard name={item} onRemove={() => {}} />
                  )}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 },
                  ]}
                  ListEmptyComponent={() => (
                    <EmptyList message="Não há jogadores cadastrados" />
                  )}
                />
                <Button title="Remover turma" type="SECONDARY" />
              </Container>
            );
          }
