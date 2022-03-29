import React, {useState} from "react";
import {AspectRatio, Box, Button, Center, Icon, Image, Stack, Text, VStack} from "native-base";
import {TouchableOpacity, View} from "react-native";
import {FlatGrid} from 'react-native-super-grid';
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";


export function Dashboard({route}: any, {props}: any) {
    const navigation = useNavigation();
    const [counter, setCounter] = useState(0);


    const increase = () => {
        setCounter(count => count + 1);
    };

    React.useLayoutEffect(() => {
        return navigation.setOptions({
            headerRight: () => (
                // @ts-ignore
                <Cart cartcounter={counter}/>
            ),
        });
    }, [navigation, counter]);
    const data = [
        {
            id: "1",
            name: "Am Jacket",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
            price: "200",
            hero: "OMG This just came out today!",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png"
        }, {
            id: "2",
            name: "BB Jacket",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
            price: "99",
            info: "This is the latest and greatest product from Derp corp.",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png"
        }, {
            id: "3",
            name: "Am Shoes",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
            price: "300",
            offer: "BOGOF",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png"
        }, {
            id: "4",
            name: "Am Bag",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
            price: "99",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png"
        }, {
            id: "5",
            name: "CC Jacket",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
            price: "405",
            offer: "No srsly GTFO",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png"
        }, {
            id: "6",
            name: "Hello Jacket",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
            price: "120",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png"
        }, {
            id: "7",
            name: "AD Rubbers",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
            price: "500",
            info: "This is the latest and greatest product from Derp corp.",
            offer: "info with offer",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png"
        }
    ];


    return (
        <VStack
            flex="1"
            px="2"
            py="2"
            _light={{bg: "white"}}
            _dark={{bg: "coolGray.800"}}
            space="3"
            justifyContent="space-between"
            borderTopRightRadius={{base: "2xl", md: "xl"}}
            borderBottomRightRadius={{base: "0", md: "xl"}}
            borderTopLeftRadius={{base: "2xl", md: "0"}}
        >
            <FlatGrid
                itemDimension={130}
                data={data}
                spacing={10}
                renderItem={({item}) => (
                    <View>
                        <Box alignItems="center">
                            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
                                 _light={{
                                     backgroundColor: "gray.50"
                                 }}>
                                <Box>
                                    <TouchableOpacity onPress={() => {
                                        // @ts-ignore
                                        navigation.navigate('ProductDetail', {
                                            proName: item.name,
                                            proPrice: item.price,
                                            proDetail: item.detail,
                                            proImg: item.image,
                                            proCart: counter
                                        });
                                    }}>
                                        <AspectRatio w="100%" ratio={16 / 9} style={{backgroundColor: '#E6E6FA'}}>
                                            <Image
                                                h="100%"
                                                w="100%"
                                                alt="img"
                                                resizeMode="stretch"
                                                source={{
                                                    uri: item.image
                                                }}
                                            />
                                        </AspectRatio>
                                    </TouchableOpacity>
                                    <Center style={{marginBottom: 0}} bg="violet.500" _dark={{
                                        bg: "violet.400"
                                    }} _text={{
                                        color: "warmGray.50",
                                        fontWeight: "700",
                                        fontSize: "xs"
                                    }} position="absolute" bottom="0" px="3" py="1.5">
                                        {item.name}
                                    </Center>
                                </Box>
                                <Stack p="3" space={3}>
                                    <Stack space={2}>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text fontSize="14px" fontFamily={'WorkSans'} style={{
                                                alignSelf: 'flex-start',
                                                textAlign: 'left'
                                            }}>USD {item.price}</Text>
                                            <Button
                                                _text={{
                                                    fontWeight: "medium",
                                                    fontFamily: "WorkSans"
                                                }}
                                                _light={{
                                                    bg: "#2579bc",
                                                }}
                                                onPress={increase}
                                            >
                                                <Icon
                                                    size="15px"
                                                    color="#FFF"
                                                    as={Ionicons}
                                                    name={'cart'}
                                                />
                                            </Button>
                                        </View>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </View>
                )}
            />
        </VStack>
    );
}

//@ts-ignore
export default function Cart(props: any) {
    const navigation = useNavigation();
    return (
        // @ts-ignore
        <TouchableOpacity onPress={() => navigation.navigate('CartView')}>
            <View>
                <Ionicons
                    name={'ios-cart'}
                    size={25}
                    color={'white'}
                    style={{marginRight: 15, marginHorizontal: 15, position: 'relative'}}
                />
                <View
                    style={{
                        position: 'absolute',
                        backgroundColor: 'red',
                        width: 16,
                        height: 16,
                        borderRadius: 15 / 2,
                        right: 10,
                        top: -5,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: "#FFFFFF",
                            fontSize: 8,
                        }}>
                        {props.cartcounter}
                    </Text>
                </View>
                <View>

                </View>
            </View>
        </TouchableOpacity>
    );
}
