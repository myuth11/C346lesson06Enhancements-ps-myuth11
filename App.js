import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity, Button, TextInput, Alert, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const datasource = [
  {
    title: 'Classic Barbies',
    data: [
      { name: 'Original Barbie', imageUrl: 'https://i.pinimg.com/474x/95/42/d2/9542d26eed3394184b0037612c00afe8.jpg', description: '1959 Barbie', isFavorite: false },
      { name: 'Malibu Barbie', imageUrl: 'https://i.pinimg.com/736x/97/aa/1a/97aa1a04ce58f5e34b9e291a0d4e0163.jpg', description: '1970s Beach Barbie', isFavorite: false }
    ],
    bgColor: '#FFC0CB'
  },
  {
    title: 'Modern Barbies',
    data: [
      { name: 'Astronaut Barbie', imageUrl: 'https://i.pinimg.com/474x/b8/cd/f7/b8cdf796591025938b36ba80a9e7eaa6.jpg', description: 'Space Explorer Barbie', isFavorite: false },
      { name: 'President Barbie', imageUrl: 'https://i.pinimg.com/474x/2e/d0/93/2ed0938bffef986b2e5f03d09ee8562b.jpg', description: 'Leader Barbie', isFavorite: false }
    ],
    bgColor: '#FFFF00'
  },
  {
    title: 'Career Barbies',
    data: [
      { name: 'Designer Barbie', imageUrl: 'https://i.pinimg.com/474x/30/ca/33/30ca3389013e8f53ffed1fce835e94fa.jpg', description: 'Designer Barbie', isFavorite: false },
      { name: 'Programmer Barbie', imageUrl: 'https://i.pinimg.com/474x/80/51/c6/8051c636a071aed5012e50a7bfd98536.jpg', description: 'Programmer Barbie', isFavorite: false }
    ],
    bgColor: 'purple'
  }
];

export default function App() {
  const [barbies, setBarbies] = useState(datasource);
  const [newBarbie, setNewBarbie] = useState({ name: '', imageUrl: '', description: '' });

  const toggleFavorite = (sectionIndex, itemIndex) => {
    const updatedBarbies = [...barbies];
    updatedBarbies[sectionIndex].data[itemIndex].isFavorite = !updatedBarbies[sectionIndex].data[itemIndex].isFavorite;
    setBarbies(updatedBarbies);
  };

  const handleAddBarbie = () => {
    if (!newBarbie.name || !newBarbie.imageUrl || !newBarbie.description) {
      Alert.alert('Please fill out all fields.');
      return;
    }

    const updatedBarbies = [...barbies];
    updatedBarbies[0].data.push({ ...newBarbie, isFavorite: false });
    setBarbies(updatedBarbies);
    setNewBarbie({ name: '', imageUrl: '', description: '' });
  };

  const renderItem = ({ item, section, index }) => {
    const animatedScale = new Animated.Value(1);

    const animatePress = () => {
      Animated.sequence([
        Animated.timing(animatedScale, { toValue: 0.95, duration: 100, useNativeDriver: true }),
        Animated.timing(animatedScale, { toValue: 1, duration: 100, useNativeDriver: true }),
      ]).start();
    };

    return (
        <Animated.View style={[styles.itemContainer, { transform: [{ scale: animatedScale }] }]}>
          <TouchableOpacity onPress={animatePress} style={{ flex: 1 }}>
            <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorite(section.index, index)}>
            <FontAwesome name={item.isFavorite ? 'heart' : 'heart-o'} size={24} color={item.isFavorite ? 'red' : 'gray'} />
          </TouchableOpacity>
        </Animated.View>
    );
  };

  return (
      <View style={styles.container}>
        <SectionList
            sections={barbies}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgColor } }) => (
                <View style={[styles.header, { backgroundColor: bgColor }]}>
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
            keyExtractor={(item, index) => item.name + index}
        />

        {/* Add Barbie Form */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Add a New Barbie</Text>
          <TextInput
              style={styles.input}
              placeholder="Name"
              value={newBarbie.name}
              onChangeText={(text) => setNewBarbie({ ...newBarbie, name: text })}
          />
          <TextInput
              style={styles.input}
              placeholder="Image URL"
              value={newBarbie.imageUrl}
              onChangeText={(text) => setNewBarbie({ ...newBarbie, imageUrl: text })}
          />
          <TextInput
              style={styles.input}
              placeholder="Description"
              value={newBarbie.description}
              onChangeText={(text) => setNewBarbie({ ...newBarbie, description: text })}
          />
          <Button title="Add Barbie" onPress={handleAddBarbie} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
  },
  formContainer: {
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
});
