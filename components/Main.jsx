import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, View, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import {} from "react-native-web";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
      {games.length === 0 ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <ScrollView>
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
