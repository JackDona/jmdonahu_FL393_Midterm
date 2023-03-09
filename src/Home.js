import {
    View,
    StyleSheet,
    Image,
} from "react-native";
import {
  Text,
} from "react-native-rapi-ui";
import SwipeCards from "react-native-swipe-cards-deck";
import React, { useEffect, useState } from "react";
import FlipCard from 'react-native-flip-card'
import { ImageBackground } from "react-native";
import ExpoFastImage from 'expo-fast-image';
import * as FileSystem from 'expo-file-system';

// Images created with the help of https://openart.ai/discovery
// and https://www4.lunapic.com/editor/
const images = [
  {
    uri: Image.resolveAssetSource(require('../assets/fire.png')).uri,
    id: 'fire'
  },
  {
    uri: Image.resolveAssetSource(require('../assets/nature.png')).uri,
    id: 'nature'
  },
  {
    uri: Image.resolveAssetSource(require('../assets/horse.png')).uri,
    id: 'horse'
  },
  {
    uri: Image.resolveAssetSource(require('../assets/love.png')).uri,
    id: 'love'
  },
]

function Card({ data }) {
   return (
    <FlipCard
      flipHorizontal={true}
      flipVertical={false}
      friction={100}>
    {/* Face Side */}
    <View style={[styles.card, { backgroundColor: "white" }]}>
      <ExpoFastImage
        style={styles.cardBack}
        uri={data.uri}
        cacheKey={data.image}/>
        {/* <Image style={styles.cardBack} source={{uri: data.uri}}/>  */}
    </View>
    {/* Back Side */}
    <View style={[styles.cardContent, { backgroundColor: "white" }]}>
        <Text size="h1" fontWeight="bold" style={styles.cardTitle}>{data.title}</Text>
        <Text size="xl" fontWeight="regular" style={{marginTop: 30, marginLeft: 15, marginRight: 15}}>{data.text}</Text>
    </View>
</FlipCard>

   );
}
  
function StatusCard({ text }) {
  return (
    <View>
      <Text style={styles.cardsText}>{text}</Text>
    </View>
  );
}



const Home = ({navigation}) => {
  const [cards, setCards] = useState();


  useEffect(() => {
    setTimeout(() => {
      setCards([
        { title: 'The Flame', uri: Image.resolveAssetSource(require('../assets/fire.png')).uri, image: 'fire', text: "\"From the flint blood would come flowing—such a flow that none could staunch it\nHad what you see as my sorrow been the fire that hides within it\"\n\n-Ghalib, Yah na thī hamārī kismat\n\n\n\"Embracing huts and palaces it spread like wild fire. The embers of freedom that smouldered deep inside Burst into flames now, Lucknow and Delhi and Jhansi, Meerut and Kanpur and Patna, all were afire\"\n\n-Chauhan, Rani of Jhansi\n\n"},
        { title: 'The Horse', uri: Image.resolveAssetSource(require('../assets/horse.png')).uri,  image: 'horse', text: "\"The string of pearls shone upon the red uniform, and the unsheathed sword gleamed brilliantly. She set off for battle [on horseback] on the western front.\"\n\n-Varma, Rani Lakshmibai\n\n\n\"\"When they saw [Abhimanyu's] divine courage, all the soldiers were enthused one hundred-fold, and their hearts were filled with waves of joy. Amidst the Pandavas, [Abhimanyu] mounted his grand chariot and advanced toward the enemy soldiers\"\n\n-Gupta, The Slaying of Jayadrath"},
        { title: 'The Landscape', uri: Image.resolveAssetSource(require('../assets/nature.png')).uri,  image: 'nature', text: "Like Spring sliding softly over barrenness,\nLike the slow zephyr gliding over a desert,\nLike peace falling, by chance, over a sick man\"\n\n-Faiz, Verses\n\n\n\"When, saying this, the hero [Abhimanyu] fell on the battlefield, it was if the great peak of Mt Meru had broken off and tumbled down.\"\n\n-Gupta, The Slaying of Jayadrath"},
        { title: 'The Heart', uri: Image.resolveAssetSource(require('../assets/love.png')).uri,  image: 'love', text: "Your beauty still haunts me; what can I do?\nThe world is burdened by sorrows beyond love,\nBy pleasures beyond romance,\nDo not demand that love which can be no more\"\n\n-Faiz, Do Not Ask, My Love, for the Love We Had Before\n\n\n\"Naive heart, what's happened to you?! What, in the end, is the cure for this pain?!\nWe are ardent and she, disaffected; Oh God, what is this state of affairs\"\n\n-Ghalib, [162, 1 & 2]\""},
      ]);
    }, 3000);
  }, []);

  return (
  <View 
    style={styles.container}
    contentContainerStyle={{flexGrow: 1}}
  >
    <View style={styles.titleSection}>
      <Text style={styles.titleText} size="h1" fontWeight="bold">FL393 Poetry Cards</Text>
      <Text style={styles.authorText} size="h3" fontWeight="light">Jack Donahue</Text>
    </View>
    <View style={styles.cardSection}>
      {cards ? (
        <SwipeCards
        cards={cards}
          renderCard={(cardData) => <Card data={cardData} />}
          keyExtractor={(cardData) => String(cardData.title)}
          renderNoMoreCards={() => <StatusCard text="No more cards..." />}
          actions={{
            yup: { show: false },
            nope: { show: false },
            maybe: { show: false }
          }}
          loop={true}
          stackOffsetX={8}

          stack={true}
          stackDepth={4}
        />
      ) : (
        <StatusCard />
      )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede9e9',
    height: '100%',
    width: '100%',
    //borderColor: "red",
    //borderWidth: 2,
  },
  titleSection: {
    justifyContent: 'center',
    marginTop: "10%",
    backgroundColor: '#ede9e9',
    color: '#ede9e9',
    height: '15%',
    width: '100%',
    //borderColor: "red",
    //borderWidth: 2,
  },
  titleText: {
    backgroundColor: '#ede9e9',
    alignSelf: 'center',
  },
  authorText: {
    backgroundColor: '#ede9e9',
    alignSelf: 'center',
    marginTop: 30
  },
  cardSection: {
    backgroundColor: '#ede9e9',
    alignSelf: 'center',
    marginTop: 30,
    height: '60%',
    width: '100%',
    //borderColor: "red",
    //borderWidth: 2,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 500,
    borderRadius: 20,
  },
  cardContent: {
    alignItems: "center",
    width: 300,
    height: 500,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "black"
  },
  cardsText: {
    fontSize: 22,
  },
  cardBack: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  cardTitle: {
    marginTop: 10,
  },
});
export default Home;
  