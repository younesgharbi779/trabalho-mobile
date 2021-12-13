import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react"

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

<<<<<<< HEAD
export default function CardCarrinho(props) {
    const{nome, preco, foto, total} = props

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#191c2f" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
            marginVertical: 20,
          }}
        >
          Carrinho
        </Text>

        <View
          style={{
            flexDirection: "row",
            height: 200,
            backgroundColor: "#202430",
            marginHorizontal: 10,
            borderRadius: 5,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 24,
                marginVertical: 20,
              }}
            >
              {nome}
            </Text>
            <Text
              style={{
                color: "#e03b22",
                fontSize: 24,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {preco}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginTop: 25,
                paddingHorizontal: 30,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="minussquare" size={24} color="#fff" />
                <Text
                  style={{
                    marginHorizontal: 8,
                    color: "#fff",
                    fontWeight: "bold",
                    marginTop: 3,
                  }}
                >
                  1
                </Text>
                <AntDesign name="plussquare" size={24} color="#fff" />
              </View>

              <FontAwesome name="remove" size={30} color="#e03b22" />
            </View>
          </View>

          <View style={{ width: "50%" }}>
            <Image
              source={{
                uri:` ${foto}`,
              }}
              style={{ width: 200, height: 200, borderRadius: 2 }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
=======
import { styles } from './styles'
export default function CardCarrinho(props) {
    const { nome, preco, foto, total } = props

    return (
        <>

            <View style={styles.mainContainer}>

                <View style={styles.infoContainer}>

                    <Text style={styles.gameName}>{nome}</Text>

                    <Text style={styles.price}>{preco}</Text>

                    <View style={styles.iconsContainer}>

                        <TouchableOpacity>
                        <AntDesign name="minussquareo" size={24} color="#fff" />
                        </TouchableOpacity>
                        
                        <Text style={styles.quantity}>1</Text>

                        <TouchableOpacity>
                            <AntDesign name="plussquareo" size={24} color="#fff" />
                        </TouchableOpacity>
                        
                    </View>

                    <TouchableOpacity style={styles.removeButton}>
                        <FontAwesome name="remove" size={26} color="#e03b22" />
                    </TouchableOpacity>

                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: ` ${foto}`,
                        }}
                        style={styles.image}
                    />
                </View>

            </View>
        </>
    );
}
>>>>>>> afc4997a77010c73724111081d644464cd512bdf
