import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { H3, Separator, Text, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import Tags from './tags';
import { useCallback, useMemo, useState } from 'react';
import { TagTypes } from '@/types/tags';
import { posts } from '@/db/posts';
import { PostType } from '@/types/posts';
import Post from './post';
import { FlatList } from 'react-native';
import EmptyState from '@/components/emptyState';

const FeedScreen = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { top } = useSafeAreaInsets();

  const onSelectTag = (tag: TagTypes) => setSelectedTag(tag);

  const renderItem = ({ item }: { item: PostType }) => <Post item={item} />;

  const filteredPosts = useMemo(() => {
    return posts.filter((item) => {
      if (selectedTag === 'all') return true;
      if (selectedTag) return item.tags.includes(selectedTag);
      if (!selectedTag) return item;
    });
  }, [selectedTag]);

  const ListHeaderComponent = useCallback(
    () => (
      <YStack space="$3">
        <YStack paddingHorizontal="$3" space="$1">
          <H3>Explore</H3>
          <Text fontSize="$5">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{' '}
            <Text fontWeight="bold">Lorem ipsum</Text>.
          </Text>
        </YStack>
        <Tags onSelectTag={onSelectTag} />
      </YStack>
    ),
    [],
  );

  return (
    <LinearGradient
      flex={1}
      paddingTop={top + 16}
      colors={['black', '$blue4Dark']}
      start={[1, 1]}
      end={[0, 0.2]}
      position="relative">
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        data={filteredPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<EmptyState />}
        ItemSeparatorComponent={() => (
          <Separator borderWidth="$0.25" borderColor="white" opacity={0.5} />
        )}
      />
    </LinearGradient>
  );
};

export default FeedScreen;
