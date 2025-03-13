import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  FlatList,
  RefreshControl,
  StatusBar,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { ResponseGetEvents } from "../types/response.type";
import { IEvent } from "../types/events";
import { Colors, WindowSize } from "../theme/GlobalStyles";
import CardEvent from "../components/CardEvent";
import { RootStackParamList } from "../navigation/types.";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = ({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [eventsCopy, setEventsCopy] = useState<IEvent[]>([]); // Copia original
  const [search, setSearch] = useState<string>("");
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const GetData = async () => {
    try {
      setRefreshing(true);
      const {
        data: { events },
      } = await axios.get<ResponseGetEvents>(
        "https://back-dev.holafomo.com/api/events/list-public/?limit=25"
      );
      setEvents(events);
      setEventsCopy(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const handleSearch = (value: string) => {
    const searchTerm = value.trim().toLowerCase();
    setSearch(value);

    if (searchTerm.length === 0) {
      setEvents([...eventsCopy]);
      return;
    }

    const filtered = eventsCopy.filter((event) =>
      event?.title?.toLowerCase().includes(searchTerm)
    );
    setEvents(filtered);
  };

  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={{ gap: 10 }}>
        <Text
          style={{ fontWeight: "800", color: Colors.primary, fontSize: 32 }}
        >
          Encuentra eventos en tendencia
        </Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#e4e4e7",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 8,
            gap: 5,
          }}
        >
          <Icon name="search-outline" size={22} color={Colors.primary} />
          <TextInput
            placeholder="Buscar"
            value={search}
            placeholderTextColor={Colors.primary}
            style={{ color: Colors.primary, fontSize: 16, flex: 1 }}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <FlatList
        data={events}
        renderItem={({ item }) => <CardEvent event={item} />}
        keyExtractor={(item) => item.public_id}
        style={{ marginTop: 8, height: WindowSize.height * 0.8 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={GetData} />}
      />
    </View>
  );
};

export default HomeScreen;
