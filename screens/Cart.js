import React from 'react';
import { Text, View, Image } from 'react-native';
// import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-paper';

const Cart = () => {

  return (
    <View
      style={{
        // flexDirection: 'row',
        // justifyContent:'space-around'
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,
        marginBottom: 5,
        flexDirection: "column"

      }}
    >



      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          padding: 20,
          //  flex: 0.3,
          // backgroundColor: "#fff",
          borderWidth: 2,
          flexDirection: 'row',
          marginBottom: 10,


        }}

      >

        <View>
          <Image style={{
            width: 100, height: 100, borderWidth: 1, borderColor: "#000", borderRadius: 1

          }} source={require('../assets/cardpic.jpg')} />
        </View>

        <View style={{ backgroundColor: "pink", width: 190 }}>

          <View style={{ marginLeft: 25, marginRight: 25 }} >
            <Text style={{ color: 'black', paddingBottom: 10 }}>Nike Air</Text>
            <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text>
            <Text style={{ color: 'black', paddingTop: 20 }}>$267</Text>
            {/* <button>
              <FontAwesome5 name={'plus'} size={14} style={{ color: "grey" }} />
            </button> */}




          </View>
          <View style={{flexDirection:"row"}}>
            <Button style={{ width: 2 }} icon="plus" mode="outlined" onPress={() => console.log('Pressed')}>

            </Button>
            <Button style={{ width: 2 }} icon="plus" mode="outlined" onPress={() => console.log('Pressed')}>

            </Button>
            <Button style={{ width: 1,height:30 }} icon="plus" mode="outlined" onPress={() => console.log('Pressed')}>

            </Button>
          </View>


        </View>


      </View>

      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          padding: 20,
          //  flex: 0.3,
          backgroundColor: "#fff",
          borderWidth: 2,
          flexDirection: 'row',
          marginBottom: 10,
          height: 200

        }}

      >

        <View>
          <Image style={{
            width: 100, height: 100, borderWidth: 1, borderColor: "#000", borderRadius: 1

          }} source={require('../assets/cardpic.jpg')} />
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }}>

          <View style={{ flexGrow: 1, marginLeft: 25 }} >
            <Text style={{ color: 'black', paddingBottom: 10 }}>Nike Air</Text>
            <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text>
            <Text style={{ color: 'black', paddingTop: 20 }}>$267</Text>


          </View>

          <View >
            <View style={{ flexGrow: 1, flexDirection: "row", marginTop: 10 }} >
              <FontAwesome5 name={'heart'} size={30} style={{ color: "red", paddingRight: 20 }} />
              <FontAwesome5 name={'trash'} size={30} style={{ color: "grey" }} />
            </View>
            <View style={{ flexDirection: "column", flexWrap: "wrap", backgroundColor: "blue" }} >
              <Button><FontAwesome5 name={'plus'} size={14} style={{ color: "grey" }} /></Button>
              <Button><FontAwesome5 name={'one'} size={14} style={{ color: "grey" }} /></Button>
              <Button><FontAwesome5 name={'minus'} size={14} style={{ color: "grey" }} /></Button>
            </View>

          </View>
          {/* <Text style={{ color: 'black', marginRight: 15,padding:2 }}>
          
            Icon Here</Text> */}
        </View>

      </View>


      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          padding: 20,
          //  flex: 0.3,
          backgroundColor: "#fff",
          borderWidth: 2,
          flexDirection: 'row',
          height: 200

        }}

      >

        <View>
          <Image style={{
            width: 100, height: 100, borderWidth: 1, borderColor: "#000", borderRadius: 1

          }} source={require('../assets/earphonepic.png')} />
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }}>

          <View style={{ flexGrow: 1, marginLeft: 25 }} >
            <Text style={{ color: 'black', paddingBottom: 10 }}>Nike Air</Text>
            <Text style={{ color: 'black', paddingBottom: 8 }}>36 Miami</Text>
            <Text style={{ color: 'black', paddingTop: 20 }}>$267</Text>


          </View>

          <View >
            <View style={{ flexGrow: 1, flexDirection: "row", marginTop: 10, width: 100 }} >
              <FontAwesome5 name={'heart'} size={30} style={{ color: "red", paddingRight: 20 }} />
              <FontAwesome5 name={'trash'} size={30} style={{ color: "grey" }} />
            </View>
            <View style={{ backgroundColor: "blue", paddingRight: 0 }} >
              <Button><FontAwesome5 name={'plus'} size={14} style={{ color: "grey" }} /></Button>
              <Button><FontAwesome5 name={'one'} size={14} style={{ color: "grey" }} /></Button>
              <Button><FontAwesome5 name={'minus'} size={14} style={{ color: "grey" }} /></Button>
            </View>

          </View>
          {/* <Text style={{ color: 'black', marginRight: 15,padding:2 }}>
          
            Icon Here</Text> */}
        </View>

      </View>





    </View>


  );
}

export default Cart;