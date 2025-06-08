import AuthButton from "@/components/AuthButton";
import { Image, Text, View } from "react-native";
import FrameSVG from "../assets/images/Frame_SVG";
import styles from "./index.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <FrameSVG style={styles.svgStyle} />
        <Image
          source={require("../assets/images/img_1.png")}
          resizeMode="contain"
          style={styles.titleStyle}
        />
        <Image
          source={require("../assets/images/group_2.png")}
          resizeMode="contain"
          style={styles.imgStyle}
        />
      </View>

      <View style={styles.textContainer}>
        <View style={styles.textStyle1}>
          <Text style={{ fontSize: 30, fontFamily: "Roboto_700Bold" }}>
            We are what we do
          </Text>
        </View>
        <View style={[styles.textStyle2, { marginTop: 12 }]}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              fontFamily: "Roboto_300Light",
              color: "#A1A4B2",
            }}
          >
            Thousand of people are using silent moon for smalls mediation
          </Text>
        </View>
      </View>
      <View style={styles.SignInContainer}>
        <View>
          <AuthButton
            text="SIGN UP"
            onPress={() => {
              console.log("Sign In");
            }}
            style={{ marginHorizontal: 20 }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ fontFamily: "Roboto_500Medium", color: "#A1A4B2" }}>
            ALREADY HAVE AN ACCOUNT?{" "}
            <Text
              onPress={() => {
                console.log("Sign In Clicked");
              }}
              style={{ color: "#8E97FD" }}
            >
              {" "}
              LOG IN
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
