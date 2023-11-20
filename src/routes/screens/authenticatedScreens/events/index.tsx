import Input from '@/components/input';
import { companies } from '@/db/companies';
import { CompanyType } from '@/types/companies';
import { useForm } from 'react-hook-form';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { H3, Stack, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import Company from './event';
import { useMemo } from 'react';
import { events } from '@/db/events';
import { EventType } from '@/types/events';
import EmptyState from '@/components/emptyState';

const EventsScreen = () => {
  const { top } = useSafeAreaInsets();

  const { control, watch } = useForm();

  const search = watch('search');

  const renderItem = ({ item }: { item: EventType }) => <Company item={item} />;

  const filteredCompanies = useMemo(() => {
    return events.filter((item: EventType) => {
      if (!search) return true;

      const searchLowerCase = search.toLowerCase();
      const address = item.address.toLowerCase();
      const name = item.name.toLowerCase();

      const filterByAddress = address.includes(searchLowerCase);
      const filterByName = name.includes(searchLowerCase);
      const occurrences = filterByAddress || filterByName;

      return occurrences;
    });
  }, [search]);

  return (
    <LinearGradient
      flex={1}
      paddingTop={top + 16}
      colors={['$purple1', 'black']}
      start={[1, 1]}
      end={[0, 0.2]}
      position="relative">
      <YStack space="$2" flex={1}>
        <YStack paddingHorizontal="$3" space="$2">
          <H3>Let's go to an event!</H3>
          <Input
            name="search"
            control={control}
            placeholder="Search by name, company, address or ..."
          />
        </YStack>
        <Stack paddingHorizontal="$3" flex={1}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 8 }}
            data={filteredCompanies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<EmptyState />}
          />
        </Stack>
      </YStack>
    </LinearGradient>
  );
};

export default EventsScreen;
