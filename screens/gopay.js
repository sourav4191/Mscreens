import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation, Navigation } from "@react-navigation/native";

export default function App() {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.view1}>
        <TouchableOpacity style={styles.btn1}> 
          <Text style={styles.text1}> gO Pay</Text>
          <Text style={styles.text1}> Rp 500.000 </Text>
          <Text style={{fontSize: 16, color: 'green', fontWeight: 'bold', marginTop: 8}}> Tap to topup </Text>
        </TouchableOpacity>

          <TouchableOpacity>
          <Image style={styles.img} source={require("../image/up.gif")} />
          <Text style={styles.text11}>   Pay</Text>
          </TouchableOpacity>

           <TouchableOpacity>
            <Image style={styles.img} source={require("../image/topup.gif")} />
             <Text style={styles.text11}>   TopUp</Text>
            </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.img} source={require("../image/rocket.gif")} />
          <Text style={styles.text11}> Explore</Text>
        </TouchableOpacity>
      </SafeAreaView>

          <SafeAreaView style={styles.view2}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>  Top picks for you</Text>
            <ScrollView
            horizontal={true}
            style={styles.view3}>
            <TouchableOpacity style={styles.btn2}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn3}>
              <Text style={{color: '#000000', fontWeight: 'bold'}}>Entertainment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn4}>
              <Text style={{color: '#000000', fontWeight: 'bold'}}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn3}>
              <Text style={{color: '#000000', fontWeight: 'bold'}}>Lifestyle</Text>
            </TouchableOpacity>
            </ScrollView>
         </SafeAreaView>
                    
                    <View style={{flex: 0.5/4,flexDirection: 'row'}}>
                    <Image style={styles.img2} source={require("../image/wallet.gif")} />
                      <Text style={{fontWeight: 'bold', marginTop: 25, fontSize: 16,}}>Go Pay</Text>
                      
                        <TouchableOpacity style={styles.btn5}>
                          <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>
                          Apply Promo %
                          </Text>
                       </TouchableOpacity>
                       </View>
                       <View style={styles.view4}>
                       <TouchableOpacity style={styles.btn6}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18, marginTop: 2}}>
                Order GoRide                                         Rs 314.50
                </Text>
                <Text style={{color: '#fff', fontSize: 14, marginTop: 2}}>
                  Cashback Rs 101.12
                </Text>
            </TouchableOpacity>
            </View>
                    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  view1: {
    flexDirection: 'row',
    backgroundColor: '#35809D', 
    flex: 0.9/ 4,
    borderRadius: 20,
  },
  
  btn1: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    width: '35%',
    height: '45%',
    borderRadius: 8,
    borderColor: '#4de',
    margin: 8,
    padding: 5,
    alignSelf: 'center'
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 2,
  },
  text11: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 2,
    color: '#fff',
    marginLeft: 28
  },
  img: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: 80,
    marginLeft: 28,
    borderRadius: 20
  },
  view2: {
    marginTop: 24, 
    backgroundColor: '#fff',
    flex: 0.6/4,
  },
  view3: {
    flexDirection: 'row',
  },
  btn2:{
    width: '15%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  btn3: {
    width: '37%',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#FFFFF7',
    padding: 10,
    borderRadius: 20,
    margin: 5,
    borderWidth: 1,
  },
  btn4: {
    width: '20%',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#FFFFF7',
    padding: 10,
    borderRadius: 20,
    margin: 5,
    borderWidth: 1,
  },
  img2: {
    width: 45,
    height: 45,
    alignSelf: 'flex-start',
    margin: 8,
    borderRadius: 20,
  },
  view4: {
    flexDirection: 'row',
    flex: 1/4
    
  },
  btn5: {
    width: '37%',
    height: '35%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#FFFFF7',
    padding: 5,
    marginLeft: 99,
    alignSelf: 'auto',
    marginTop: 16,
  },
  btn6: {
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    marginLeft: 26,
    borderWidth: 1,
    
  },
});
