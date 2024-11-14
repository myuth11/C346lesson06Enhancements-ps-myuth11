import React from 'react';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity } from 'react-native';

const datasource = [
  {
    title: 'Classic Barbies',
    data: [
      { name: 'Original Barbie', imageUrl: 'https://i.pinimg.com/474x/95/42/d2/9542d26eed3394184b0037612c00afe8.jpg', description: '1959 Barbie' },
      { name: 'Malibu Barbie', imageUrl: 'https://i.pinimg.com/736x/97/aa/1a/97aa1a04ce58f5e34b9e291a0d4e0163.jpg', description: '1970s Beach Barbie' }
    ],
    bgColor: '#FFC0CB' // Corrected to hex value for light pink
  },
  {
    title: 'Modern Barbies',
    data: [
      { name: 'Astronaut Barbie', imageUrl: 'https://i.pinimg.com/474x/b8/cd/f7/b8cdf796591025938b36ba80a9e7eaa6.jpg', description: 'Space Explorer Barbie' },
      { name: 'President Barbie', imageUrl: 'https://i.pinimg.com/474x/2e/d0/93/2ed0938bffef986b2e5f03d09ee8562b.jpg', description: 'Leader Barbie' }
    ],
    bgColor: '#FFFF00' // Yellow color in hex
  },
  {
    title: 'Career Barbies',
    data: [
      {name:'Designer Barbie',imageUrl:'https://i.pinimg.com/474x/30/ca/33/30ca3389013e8f53ffed1fce835e94fa.jpg',description:'Designer Barbie'},
      {name:'Programmer Barbie',imageUrl:'https://i.pinimg.com/474x/80/51/c6/8051c636a071aed5012e50a7bfd98536.jpg',description:'Programmer Barbie'}
    ],
    bgColor:'purple'
  }
];

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgColor } }) => (
                <View style={[styles.header, { backgroundColor: bgColor }]}>
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
            keyExtractor={(item, index) => item.name + index}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
    color:'baby blue'

  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius:20,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  descriptionText: {
    fontSize: 14,
    color: '#666'
  }
});
