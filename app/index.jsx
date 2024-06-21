
import {  Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from "../constants"
import { Link } from 'expo-router';

export default function App() {
  return (
   <SafeAreaView className="bg-primary h-full">
    <ScrollView >
      <View className="w-full justify-center  items-center h-full px-4">
        <Image source={images.logo} className="w-[130px] h-[84px]"  resizeMode='contain'/>
        <Image source={images.cards} className="max-w-[380px] h-[300px] w-full"  resizeMode='contain'/>

<View className="relative mt-5">
  <Text className="text-3xl"></Text>
</View>
      </View>
    </ScrollView>
    <Link href="Home">Navigate</Link>

   </SafeAreaView>
  );
}

