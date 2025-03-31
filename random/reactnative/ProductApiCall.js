import React, { useEffect, useState } from "react";
import {View,Text,FlatList} from 'react-native'
const Products =(props) =>{
    const  [products,setProducts]=useState([])

    const loadData=async()=>{
        fetch('https://dummyjson.com/products').then((res)=>{
            return res.json()
        }).then((data)=>{
            setProducts(data)
        }).catch((error)=>{
            //handle error here
        })
    }

    useEffect(()=>{
        loadData()
    },[])

    return(
        <View>
            <FlatList
                data={products}
                keyExtractor={(item,index)=>index}
                renderItem={({item})=>{
                    return(
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
                />

        </View>
    )
}

export default Products;