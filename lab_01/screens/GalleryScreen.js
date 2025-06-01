import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const dummyImages = Array(10).fill().map((_, i) => ({
    id: i.toString(),
    uri: 'https://i.pinimg.com/736x/e3/a3/63/e3a363931a518c001f65ccb7c30f149d.jpg',
}));

export default function GalleryScreen() {
    return (
        <FlatList
            data={dummyImages}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={({ item }) => (
                <Image style={styles.img} source={{ uri: item.uri }} />
            )}
        />
    );
}

const styles = StyleSheet.create({
    img: {
        width: '30%',
        aspectRatio: 1,
        margin: '1.5%',
        borderRadius: 8,
        backgroundColor: '#eee',
    },
});
