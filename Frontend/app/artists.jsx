import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchArtists } from "../app/servies/artists/artists";
import { router } from "expo-router";

export default function Artists() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });

  if (isLoading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.loadingText}>Error loading artists</Text>;
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/artist/${item.id}`)}>
            <View style={styles.artists}>
              <Image source={{ uri: item.photo }} style={styles.artistImage} />
              <Text style={styles.artistName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#F9FAFB", 
  },

  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },

  loadingText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
    color: "#6B7280",
  },

  artists: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,


    elevation: 3,
  },

  artistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
    backgroundColor: "#E5E7EB", 
  },

  artistName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    flexShrink: 1,
  },
});
