import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  RefreshControl,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {ResponseGetEvents} from '../types/response.type';
import {IEvent} from '../types/events';
import {Colors} from '../theme/GlobalStyles';
import CardEvent from '../components/CardEvent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types.';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = ({}: {navigation: HomeScreenNavigationProp}) => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [eventsCopy, setEventsCopy] = useState<IEvent[]>([]);
  const [search, setSearch] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const GetData = async () => {
    try {
      setRefreshing(true);
      const {
        data: {events},
      } = await axios.get<ResponseGetEvents>(
        'https://back.holafomo.com/api/events/list-public/?limit=25',
      );
      setEvents(events);
      setEventsCopy(events);
    } catch (error) {
      console.error('Error fetching events:', error);
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

    const filtered = eventsCopy.filter(event =>
      event?.title?.toLowerCase().includes(searchTerm),
    );
    setEvents(filtered);
  };

  return (
    <View className="flex-1 bg-white p-5">
      <StatusBar backgroundColor={Colors.primary} />
      <View className="mb-5">
        <Text className="text-4xl font-bold text-[#F95F2E] mb-2">
          Encuentra eventos en tendencia
        </Text>
        <View className="flex-row items-center bg-zinc-100 rounded-2xl px-4 py-2">
          <Icon name="search-outline" size={22} color={Colors.primary} />
          <TextInput
            placeholder="Buscar"
            value={search}
            placeholderTextColor={Colors.primary}
            className="text-primary text-base flex-1 ml-2"
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={GetData} />
        }>
        <View className="flex-row flex-wrap justify-between">
          {events.map(item => (
            <CardEvent key={item.public_id} event={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
