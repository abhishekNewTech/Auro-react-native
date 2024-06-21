import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { Link } from "expo-router";
import Custombutton from "../components/Custombutton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center  items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px] w-full"
            resizeMode="contain"
          />

          <View className=" mt-5">
            <Text className="text-3xl text-white font-bold text-center relative">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200 relative">Aora</Text>
            </Text>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where Creativity meets innovation: embark on a journey of
              limitless exploration with Aora
            </Text>
          </View>

          <Custombutton title="Continue With Email" handlePress={()=>{ }} containerStyles="w-full mt-7"/>
        </View>
      </ScrollView>
      <Link href="Home">Navigate</Link>
    </SafeAreaView>
  );
}
