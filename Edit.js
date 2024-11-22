import React, { useState } from 'react';
import { datasource } from './Data.js';
import { View, Button, Text, TextInput } from 'react-native';

const Edit = ({ navigation, route }) => {
    const [updatedBarbie, setUpdatedBarbie] = useState(route.params.item);

    const handleSave = () => {
        let sectionIndex = route.params.sectionIndex;
        let index = route.params.index;
        datasource[sectionIndex].data[index] = updatedBarbie; // Update Barbie in the datasource
        navigation.navigate("Home"); // Navigate back to Home
    };

    const handleDelete = () => {
        let sectionIndex = route.params.sectionIndex;
        let index = route.params.index;
        datasource[sectionIndex].data.splice(index, 1); // Remove Barbie from the datasource
        navigation.navigate("Home"); // Navigate back to Home
    };

    return (
        <View>
            <Text>Name:</Text>
            <TextInput
                value={updatedBarbie.name}
                style={{ borderWidth: 1, marginBottom: 10 }}
                onChangeText={(text) => setUpdatedBarbie({ ...updatedBarbie, name: text })}
            />
            <Text>Image URL:</Text>
            <TextInput
                value={updatedBarbie.imageUrl}
                style={{ borderWidth: 1, marginBottom: 10 }}
                onChangeText={(text) => setUpdatedBarbie({ ...updatedBarbie, imageUrl: text })}
            />
            <Text>Description:</Text>
            <TextInput
                value={updatedBarbie.description}
                style={{ borderWidth: 1, marginBottom: 10 }}
                multiline
                numberOfLines={4}
                onChangeText={(text) => setUpdatedBarbie({ ...updatedBarbie, description: text })}
            />
            <View style={{ flexDirection: "row" }}>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button title='Save' onPress={handleSave} />
                </View>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button title='Delete' onPress={handleDelete} />
                </View>
            </View>
        </View>
    );
};

export default Edit;
