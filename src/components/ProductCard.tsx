import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: product.images[0] }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text variant="titleMedium" numberOfLines={1}>
          {product.title}
        </Text>
        <Text variant="titleLarge" style={styles.price}>
          ${product.price}
        </Text>
        <Text variant="bodySmall" style={styles.seller}>
          {product.seller.name}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  info: {
    padding: 12,
  },
  price: {
    marginTop: 4,
    color: '#2196F3',
  },
  seller: {
    marginTop: 4,
    color: '#666',
  },
});