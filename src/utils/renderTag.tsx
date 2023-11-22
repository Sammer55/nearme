import { TagTypes } from '../types/tags';
import Tag from '../components/tag';
import { ButtonProps, useTheme } from 'tamagui';
import { memo } from 'react';

type Props = {
  tag: TagTypes;
  onSelectTag?: () => void;
  hideLabel?: boolean;
} & ButtonProps;

const RenderTag = memo(({ tag, onSelectTag, hideLabel, ...rest }: Props) => {
  const theme = useTheme();

  const tagTypes = {
    all: { label: 'All', color: theme.gray1 },
    gastronomy: { label: 'Gastronomy', color: theme.red10 },
    fashion: { label: 'Fashion', color: theme.purple10 },
    beauty: { label: 'Beauty', color: theme.pink10 },
    services: { label: 'Services', color: theme.blue10 },
    entertainment: { label: 'Entertainment', color: theme.orange10 },
    health: { label: 'Health', color: theme.green10 },
    groceries: { label: 'Groceries', color: theme.red8 },
    technology: { label: 'Technology', color: theme.blue8 },
    artscrafts: { label: 'ArtsCrafts', color: theme.green8 },
  };

  return (
    <Tag
      hideLabel={hideLabel}
      {...rest}
      item={tagTypes[tag]}
      onSelectTag={onSelectTag}
    />
  );
});

export default RenderTag;
