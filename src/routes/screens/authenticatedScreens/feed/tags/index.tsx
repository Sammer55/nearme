import { Button, ScrollView, useTheme } from 'tamagui';

type TagType = { label: string; color: any };

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
      {tags.map((item: TagType) => {
        const hoverStyle = { scale: 0.95, bg: item.color, opacity: 0.5 };

        return (
          <Button
            onPress={() => onSelectTag(item)}
            key={item.label}
            scale={1}
            animation="bouncy"
            hoverStyle={hoverStyle}
            pressStyle={hoverStyle}
            width="$10"
            size="$3"
            bg={item.color}>
            {item.label}
          </Button>
        );
      })}
    </ScrollView>
  );
};

export default Tags;
