import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MenuIcons from '../Svg/MenuIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../component/ProductCard';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const [products, setProducts] = useState([]);
 const navigation = useNavigation(); 
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log('API Response');
      const updatedProducts = data.products || [];

      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleproductpreess = (productId) =>{
    console.log(`Product ${productId} pressed`)
    navigation.navigate('Product', { productId })
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.menu}>
          <MenuIcons />
        </View>
        <ScrollView>
            
          {/* Render product cards */}
          {products.map((product, index) => (
            <TouchableOpacity  key={index} onPress={()=> handleproductpreess(product.id)}>
 <ProductCard  product={product} />
            </TouchableOpacity>
           
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  menu: {
    marginTop: 20,
  },
});

export default Home;
