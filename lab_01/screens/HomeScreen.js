import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const newsData = [
    {
        id: 0,
        title: `Студент заснув на парі`,
        date: `05.05.2025`,
        text: `Тяжкий злочин, треба розтріляти`,
        source: {uri: 'https://i.pinimg.com/736x/43/52/61/4352617b8af543a1b29a07e18757e530.jpg'}
    },
    {
        id: 1,
        title: `Зупиніть Булінг Над студентами!`,
        date: `05.05.2025`,
        text: `Буль ласка поставьте балл дуже треба))`,
        source: {uri: 'https://i.pinimg.com/736x/7d/25/74/7d2574ab88392b3d0fa57314d6702d9a.jpg'}
    },

];

export default function HomeScreen() {
    return (
        <FlatList
            data={newsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.newsItem}>
                    <Image style={styles.image} source={item.source} />
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                        <Text>{item.text}</Text>
                    </View>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    newsItem: { flexDirection: 'row', padding: 10 },
    image: { width: 60, height: 60, borderRadius: 12, marginRight: 10 },
    title: { fontWeight: 'bold' },
    date: { color: 'gray', fontSize: 12 },
});
