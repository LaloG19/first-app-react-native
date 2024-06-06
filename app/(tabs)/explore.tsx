import { Button } from "react-native";

export default function TabTwoScreen({ navigation }: any) {
  return (
    <>
      
      <Button title={"Click me, pa"} onPress={() => navigation.navigate("Explorar")} />
      <Button title={"Click me, pa"} onPress={() => navigation.navigate("Explorar")} />
      <Button title={"Click me, pa"} onPress={() => navigation.navigate("Explorar")} />
      <Button title={"Click me, pa"} onPress={() => navigation.navigate("Explorar")} />

    </>
  );
}
