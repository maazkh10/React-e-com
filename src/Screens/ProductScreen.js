import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import HeartIcon from '../Svg/HeartIcon';
import BackIcon from '../Svg/BackIcon';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = ({ route }) => {
  const { productId } = route.params;
  const [productDet, setProductDet] = useState(null);

  const navigation = useNavigation();
  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  const fetchProductDetail = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      console.log('Product Detail', data);
      setProductDet(data);
    } catch (error) {
      console.error('Error getting the product detail', error);
    }
  };

  useEffect(() => {
    console.log('Image URLs:', productDet?.images);
  }, [productDet]);

  if (!productDet) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate ("Home")}>
          <BackIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <HeartIcon isFav={ ""} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={productDet.images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{productDet.title}</Text>
        <Text style={styles.description}>{productDet.description}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${productDet.price}</Text>
          </View>
          <View style={styles.additionalInfoContainer}>
            <Text style={styles.category}>Category: {productDet.category}</Text>
            <Text style={styles.stock}>Stock: {productDet.stock}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>Rating: {productDet.rating} </Text>
              {renderStars(productDet.rating)}
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTitle}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderStars = (rating) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <View style={styles.starContainer}>
      {[...Array(filledStars)].map((_, index) => (
        <Text key={index} style={styles.star}>
          ★
        </Text>
      ))}
      {halfStar && <Text style={styles.star}>★</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  image: {
    marginTop: 100,
    height: 120,
    width: 200,
    resizeMode: 'cover',
    margin: 10,
    borderRadius: 20,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginRight: 100
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  additionalInfoContainer: {
    flex: 1,
    marginLeft: 20,
  },
  category: {
    fontSize: 18,
  
    color: '#000',
    marginBottom: 2,
  },
  stock: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 20,
    color: '#FFD700', // Gold color
    marginLeft: 5,
  },
  btn: {
    backgroundColor: '#24a8af',
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
    width: '50%',
  },
  btnTitle: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ProductScreen;
