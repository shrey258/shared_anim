import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

interface ProfileCardProps {
  imageSource: string;
  name: string;
  description: string;
  style?: ViewStyle;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ 
  imageSource, 
  name, 
  description,
  style 
}) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <Image
        source={{ uri: imageSource }}
        style={styles.image}
        contentFit="cover"
        transition={1000}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    marginVertical: 10,
    width: '100%',
    maxWidth: 350,
    padding: 16,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 12,
  },
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.15,
    color: '#666',
    lineHeight: 24,
  },
});
