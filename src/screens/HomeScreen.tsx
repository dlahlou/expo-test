import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setProducts } from '../store/slices/productsSlice';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

export default function HomeScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const products = useSelector((state: RootState) => state.products.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products from API
    // For now, we'll use mock data
    const mockProducts = [
      {
        id: '1',
        title: 'Vintage Jacket',
        description: 'Beautiful vintage leather jacket',
        price: 89.99,
        images: ['https://example.com/jacket.jpg'],
        seller: {
          id: '1',
          name: 'John Doe',
          type: 'individual'
        },
        category: 'Clothing',
        condition: 'Used - Like New',
        createdAt: new Date().toISOString(),
      },
    ];
    dispatch(setProducts(mockProducts));
  }, []);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search items"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FilterBar />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    margin: 16,
  },
  productList: {
    padding: 8,
  },
});