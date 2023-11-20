import Input from '@/components/input';
import { companies } from '@/db/companies';
import { CompanyType } from '@/types/companies';
import { useForm } from 'react-hook-form';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { H3, Stack, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import Company from './company';
import { useMemo } from 'react';
import EmptyState from '@/components/emptyState';

const ListScreen = () => {
  const { top } = useSafeAreaInsets();

  const { control, watch } = useForm();

  const search = watch('search');

  const renderItem = ({ item }: { item: CompanyType }) => (
    <Company item={item} />
  );

  const filteredCompanies = useMemo(() => {
    return companies.filter((item: CompanyType) => {
      if (!search) return true;

      const searchLowerCase = search.toLowerCase();
      const tags = item.tags.map((tag) => tag.toLowerCase());
      const address = item.address.toLowerCase();
      const name = item.name.toLowerCase();

      const filterByAddress = address.includes(searchLowerCase);
      const filterByName = name.includes(searchLowerCase);
      const filterByCategory = tags.some((tag) =>
        tag.includes(searchLowerCase),
      );
      const occurrences = filterByAddress || filterByName || filterByCategory;

      return occurrences;
    });
  }, [search]);

  return (
    <LinearGradient
      flex={1}
      paddingTop={top + 16}
      colors={['$green1', 'black']}
      start={[1, 1]}
      end={[0, 0.2]}
      position="relative">
      <YStack space="$2" flex={1}>
        <YStack paddingHorizontal="$3" space="$2">
          <H3>Find something you need</H3>
          <Input
            name="search"
            control={control}
            placeholder="Search by name, category or address"
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

export default ListScreen;
