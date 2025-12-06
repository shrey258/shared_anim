import { ScrollView, StyleSheet } from "react-native";
import { ProfileCard } from "../components/ProfileCard";

const profiles = [
  {
    id: "julian",
    imageSource:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Julian Wan",
    description:
      "Creative designer and photographer based in San Francisco. Passionate about creating beautiful user experiences and capturing moments.",
  },
  {
    id: "maria",
    imageSource:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Maria S.",
    description:
      "Software Engineer who loves React Native and open source. Coffee enthusiast and weekend hiker.",
  },
];

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          imageSource={profile.imageSource}
          name={profile.name}
          description={profile.description}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});
