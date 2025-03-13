import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { IEvent } from "../types/events";

type Props = {
  event: IEvent;
};

const CardEvent = ({ event }: Props) => {
  return (
    <View
      style={styles.card}
      testID={`card-event-${event.public_id}`} // testID ÚNICO basado en el ID del evento
    >
      <Image
        style={styles.image}
        source={{
          uri:
            event.photo_cover ||
            "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        testID={`card-event-image-${event.public_id}`} // testID único para la imagen
        accessibilityLabel={`Imagen del evento: ${event.title}`}
      />
      <View style={styles.content}>
        <Text style={styles.title} testID={`card-event-title-${event.public_id}`}>
          {event.title}
        </Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.description}
          testID={`card-event-description-${event.public_id}`}
        >
          {event.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 4,
    overflow: "hidden",
    borderColor: "#e4e4e7",
    position: "relative",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  content: {
    padding: 10,
    borderRadius: 8,
    width: "100%",
    height: 100,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});

export default CardEvent;
