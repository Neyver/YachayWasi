import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class Carousel extends React.Component {
  state = {
    active: 0
  }
  change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide != this.state.active){
      this.setState({active:slide});
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          >
          {
            this.props.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image}/>
            ))
          }
        </ScrollView>
        <View style={styles.pagination}>
          {
            this.props.images.map((i, k) => (
              <Text
                key={k}
                style={k==this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {width, height },
  image: { width, height, resizeMode: 'cover' },
  pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
  pagingText: { fontSize: (width/30),color: '#888', margin: 3 },
  pagingActiveText: { fontSize: (width/30),color: '#fff', margin: 3 },
});
