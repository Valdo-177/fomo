import { View, Text, Image } from "react-native";
import React from "react";
import { IEvent } from "../types/events";

type Props = {
  event: IEvent;
};

const CardEvent = ({ event }: Props) => {
  return (
    <View
      // Estilos responsivos de Nativewind
      // w-full en móvil (vertical)
      // sm:w-[48%] para tablet/horizontal (dos columnas)
      // md:w-[31%] para pantallas más grandes (tres columnas)
      className="bg-white rounded-lg overflow-hidden shadow-md w-full mb-4 sm:w-[48%] md:w-[31%]"
      testID={`card-event-${event.public_id}`}
    >
      <Image
        className="w-full h-56 object-cover"
        source={{
          uri:
            event.photo_cover ||
            "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        testID={`card-event-image-${event.public_id}`}
        accessibilityLabel={`Imagen del evento: ${event.title}`}
      />
      <View className="p-4">
        <Text
          className="text-xl font-bold text-gray-800 mb-2"
          testID={`card-event-title-${event.public_id}`}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {event.title}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="text-gray-600 text-sm"
          testID={`card-event-description-${event.public_id}`}
        >
          {event.location}
        </Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          className="text-gray-600 text-base"
          testID={`card-event-description-${event.public_id}`}
        >
          {event.description}
        </Text>
      </View>
    </View>
  );
};

export default CardEvent;