import React, { useState } from 'react';
import { datasource } from './Data.js';
import { View, Button, Text, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({ navigation }) => {
    const [newBarbie, setNewBarbie] = useState({ name: '', imageUrl: '', description: '' });
    const [category, setCategory] = useState(datasource[0].title); // Default to the first category

    const handleAdd = () => {
        if (!newBarbie.name || !newBarbie.imageUrl || !newBarbie.description) {
            alert("Please fill out all fields!");
            return;
        }
        const sectionIndex = datasource.findIndex((section) => section.title === category);
        if (sectionIndex >= 0) {
            datasource[sectionIndex].data.push({ ...newBarbie, isFavorite: false });
            navigation.navigate("Home"); // Navigate back to Home
        }
    };

    return (
        <View>
            <Text>Add New Barbie:</Text>
            <TextInput
                placeholder="Name"
                style={{ borderWidth: 1, marginBottom: 10 }}
                value={newBarbie.name}
                onChangeText={(text) => setNewBarbie({ ...newBarbie, name: text })}
            />
            <TextInput
                placeholder="Image URL"
                style={{ borderWidth: 1, marginBottom: 10 }}
                value={newBarbie.imageUrl}
                onChangeText={(text) => setNewBarbie({ ...newBarbie, imageUrl: text })}
            />
            <TextInput
                placeholder="Description"
                style={{ borderWidth: 1, marginBottom: 10 }}
                multiline
                numberOfLines={4}
                value={newBarbie.description}
                onChangeText={(text) => setNewBarbie({ ...newBarbie, description: text })}
            />
            <Text>Select Category:</Text>
            <RNPickerSelect
                onValueChange={(value) => setCategory(value)}
                items={datasource.map((section) => ({
                    label: section.title,
                    value: section.title,
                }))}
            />
            <Button title="Add Barbie" onPress={handleAdd} />
        </View>
    );
};

export default Add;
