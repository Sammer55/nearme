import { TagType } from '../../types/tags';
import { Button, ButtonProps } from 'tamagui';

type Props = {
  onSelectTag?: (tag: TagType) => void;
  item: TagType;
} & ButtonProps;

const Tag = ({ onSelectTag, item, size = '$3', ...rest }: Props) => {
  const hoverStyle = { scale: 0.95, bg: item.color, opacity: 0.5 };

  const handleSelectTag = () => {
    !!onSelectTag && onSelectTag(item);
  };

  return (
    <Button
      {...rest}
      onPress={handleSelectTag}
      key={item.label}
      scale={1}
      animation="bouncy"
      pressStyle={hoverStyle}
      width="$10"
      size={size}
      backgroundColor={item.color}>
      {item.label}
    </Button>
  );
};

export default Tag;
