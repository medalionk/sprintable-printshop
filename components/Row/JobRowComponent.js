import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity  } from 'react-native';
import { Card, ListItem, Grid, Col, Row } from 'react-native-elements'

var {height, width} = Dimensions.get('window');

class RowComponent extends Component {
  constructor(props) {
        super(props);
    }

  render() {
    return (
      <TouchableOpacity  onPress={() => { this.props.onPress(this.props.data.id) }}>
        <View style={styles.container}>
          <Card 
            title={this.props.data.title}>
            <Grid 
              containerStyle={styles.grid}>
              <Col size={0.25}>
                <TouchableOpacity onPress={() => console.log('customer image pressed')}>
                  <Image
                    source={{ uri: this.props.data.customer.thumbnail}}
                    style={styles.thumbnail}
                  />
                </TouchableOpacity>
              </Col>
              <Col>
                <Row size={0.75}>
                  <Text style={styles.nameText}>{this.props.data.customer.name}</Text>
                </Row>
                <Row>
                  <Text style={styles.priceText}>{this.props.data.price}</Text>
                </Row>
                <Row>
                  <Text style={styles.quantityText}>{this.props.data.quantity}</Text>
                </Row>
                <Row>
                  <Text style={styles.descriptionText}>{this.props.data.description}</Text>
                </Row>
              </Col>
            </Grid>
            <View>
              <Image source={{ uri: this.props.data.image}} style={styles.picture} />
            </View>
          </Card>  
        </View>
      </TouchableOpacity >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
  },
  thumbnail: {
    height: 50, 
    width: 50, 
    borderRadius: 25,
  },
  picture: {
    height: height * .3,
    alignItems: 'center',
  },
  grid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
  },
  nameText: {
   fontSize: 22
  },
  quantityText: {
    fontWeight: 'bold',
  },
  priceText: {
    color: 'green',
    fontStyle: 'italic'
  },
  descriptionText: {
    color: 'grey'
  },
});

export default RowComponent;
