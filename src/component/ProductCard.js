import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ProductCard = ({product}) => {
    return (
        <View style={styles.card}>
            <View style={styles.imgdiv}>
             <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
             </View>
             <View style={styles.textdiv}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
        {/* <Text style={styles.description}>{product.description}</Text> */}
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 10,
        padding: 20,
        flexDirection:'row'
    }, 
    thumbnail:{
        width: 150,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8
    },
    imgdiv:{
        marginRight: 20
    },
    textdiv:{
        flex: 1
    },
    title:{
        margin: 10,
        fontSize:20,
        
    },
    brand:{
        fontSize:16,
        color: 'gray',
        marginRight: 20
    },
    price: {
        fontSize: 16,
        justifyContent:"center",
        alignContent:'center',
        marginTop:10,
        fontWeight: 'bold',
        color: 'green',
      },
      description: {
        fontSize: 14,
        color: 'gray',
        marginTop: 8,
      },
})

export default ProductCard;
