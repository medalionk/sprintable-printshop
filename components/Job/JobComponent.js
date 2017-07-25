import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity  } from 'react-native';

import Container from '../../containers';
import ProfilePage from '../../containers/Profile/ClientViewContainer'

var {height, width} = Dimensions.get('window');

class JobComponent extends Component {
  constructor(props) {
        super(props);
    }
  
    viewClient(){
      this.navigator.push({title: 'Profile', Page: ProfilePage})
    } 

    render() {
      return (
           <Container> 
              <View style={styles.profileImage}>
                    <TouchableOpacity onPress={() => this.viewClient(props.navigator)}>
                        <Image
                          source={{ uri: this.props.data.customer.thumbnail}}
                          style={styles.thumbnail}
                        />
                      </TouchableOpacity>
                  </View>
                  <Text style={[styles.nameText, styles.centerText]}>
                    {this.props.data.customer.name}
                  </Text>
                  <Text style={[styles.priceText]}>
                    Price: {this.props.data.price}
                  </Text>
                  <Text style={[styles.quantityText]}>
                    Quantity: {this.props.data.quantity}
                  </Text>
                  <Text style={[styles.text]}>
                    Order Created: {this.props.data.created_date}
                  </Text>
                  <Text style={[styles.text]}>
                    Delivery Date: {this.props.data.delivery_date}
                  </Text>
                  <Text style={[styles.text]}>
                    Delivery Address: {this.props.data.delivery_address}
                  </Text>
                  <Text style={[styles.descriptionText]}>
                    Note: {this.props.data.description}
                  </Text>
                  <Text style={[styles.statusText]}>
                    Status: {this.props.data.status}
                  </Text>
                  <View>
                    <Image source={{ uri: this.props.data.image}} style={styles.picture} />
                  </View>
           </Container>
        );
  }
    
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 50, 
    width: 50, 
    borderRadius: 25,
  },
  picture: {
    height: height * .3,
    width: width * .85,
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5, 
    marginBottom: 5
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 22,
  },
  quantityText: {
    //fontWeight: 'bold',
  },
  priceText: {
    fontStyle: 'italic',
  },
  statusText: {
    color: 'green',
    fontWeight: 'bold',
  },
  descriptionText: {
    color: 'grey',
  },
  text: {
    
  },
});

export default JobComponent;