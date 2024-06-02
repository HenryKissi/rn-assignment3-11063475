import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.tasks}>14 tasks today</Text>
        <View style={styles.profileIcon}>
          {/* Placeholder for profile icon */}
        </View>
      </View>

      <TextInput style={styles.searchBar} placeholder="Search" />

      <Text style={styles.categoryTitle}>Categories</Text>
      <View style={styles.categories}>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://via.placeholder.com/100' }} />
          <View>
            <Text>Exercise</Text>
            <Text>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://via.placeholder.com/100' }} />
          <View>
            <Text>Study</Text>
            <Text>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://via.placeholder.com/100' }} />
          <View>
            <Text>Code</Text>
            <Text>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://images.app.goo.gl/DCbjRnQrp63a9R4F9' }} />
          <View>
            <Text>Cook</Text>
            <Text>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://via.placeholder.com/100' }} />
          <View>
            <Text>Read</Text>
            <Text>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://via.placeholder.com/100' }} />
          <View>
            <Text>Write</Text>
            <Text>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://via.placeholder.com/100' }} />
          <View>
            <Text>Draw</Text>
            <Text>12 Tasks</Text>
          </View>
        </View>
        <View style={styles.category}>
          <Image style={styles.categoryImage} source={{ uri: 'https://via.placeholder.com/100' }} />
          <View>
            <Text>Music</Text>
            <Text>12 Tasks</Text>
          </View>
        </View>
      </View>

      <Text style={styles.ongoingTaskTitle}>Ongoing Task</Text>
      <View style={styles.task}>
        <Text>Mobile App Development</Text>
      </View>
      <View style={styles.task}>
        <Text>Web Development</Text>
      </View>
      <View style={styles.task}>
        <Text>Push Ups</Text>
        </View>
        <View style={styles.task}>
        <Text>Stories</Text>
        </View>
        <View style={styles.task}>
          <Text>Playlist</Text>
        </View>
        <View style={styles.task}>
        <Text>Features</Text>
        </View>
        <View style={styles.task}>
        <Text>Songs</Text>
        </View>
        <View style={styles.task}>
        <Text>Lifestyle</Text>
        </View>
        <View style={styles.task}>
        <Text>Hobbies</Text>
        </View>
        <View style={styles.task}>
        <Text>Software Engineering</Text>
        </View>
        <View style={styles.task}>
        <Text>DCIT courses</Text>
        </View>
        <View style={styles.task}>
        <Text>Fashion</Text>
        </View>
        <View style={styles.task}>
        <Text>Meal Prep</Text>
        </View>
        <View style={styles.task}>
        <Text>Recipe Book</Text>
        </View>
        <View style={styles.task}>
        <Text>Fan favorite</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0', // Cream background color
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasks: {
    fontSize: 16,
    color: 'gray',
  },
  profileIcon: {
    // Add styles for profile icon
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categories: {
    marginBottom: 16,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  ongoingTaskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  task: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 8,
  },
});
