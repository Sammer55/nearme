import { ScrollView, useTheme } from 'tamagui';
import { TagType } from '../../../../../types/tags';
import Tag from '../../../../../components/tag';

type Props = {
  onSelectTag: (tag: TagType) => void;
};

const Tags = ({ onSelectTag }: Props) => {
  const theme = useTheme();

  const tags = [
    { label: 'All', color: theme.gray1 },
    { label: 'Gastronomy', color: theme.red10 },
    { label: 'Fashion', color: theme.purple10 },
    { label: 'Beauty', color: theme.pink10 },
    { label: 'Services', color: theme.blue10 },
    { label: 'Entertainment', color: theme.orange10 },
    { label: 'Health', color: theme.green10 },
    { label: 'Groceries', color: theme.red8 },
    { label: 'Technology', color: theme.blue8 },
    { label: 'ArtsCrafts', color: theme.green8 },
  ];

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      space="$2"
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}>
      {tags.map((item: TagType) => (
        <Tag item={item} onSelectTag={onSelectTag} />
      ))}
    </ScrollView>
  );
};

export default Tags;
