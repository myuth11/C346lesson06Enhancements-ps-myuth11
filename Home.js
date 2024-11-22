import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { datasource } from './Data.js';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 5,
        textAlign: 'left',
    },
    descriptionStyle: {
        fontSize: 12,
        marginHorizontal: 5,
        textAlign: 'left',
        color: '#555',
    },
    opacityStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    imageStyle: {
        width: 150,
        height: 150,
        marginRight: 10,
        borderRadius: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        const sectionIndex = datasource.findIndex((s) => s.title === section.title);
        return (
            <TouchableOpacity
                style={[styles.opacityStyle, styles.itemContainer]}
                onPress={() => {
                    navigation.navigate("Edit", {
                        sectionIndex: sectionIndex,
                        index: index,
                        item: item,
                    });
                }}
            >
                <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
                <View>
                    <Text style={styles.textStyle}>{item.name}</Text>
                    <Text style={styles.descriptionStyle}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar />
            <Button title="Add Barbie" onPress={() => navigation.navigate("Add")} />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgColor }]}>
                        {title}
                    </Text>
                )}
                keyExtractor={(item, index) => item.name + index}
            />
        </View>
    );
};

export default Home;
