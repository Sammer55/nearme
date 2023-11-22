import { useState } from 'react';
import { TagType } from '../../types/tags';
import { Button, ButtonProps } from 'tamagui';

type Props = {
  onSelectTag?: (tag: TagType) => void;
  item: TagType;
  hideLabel?: boolean;
} & ButtonProps;

const Tag = ({ onSelectTag, item, size = '$3', hideLabel, ...rest }: Props) => {
  const [isHidedLabel, setIsHidedLabel] = useState(hideLabel);

  const hoverStyle = { scale: 0.97, bg: item.color, opacity: 0.5 };

  const handleSelectTag = () => {
    !!onSelectTag && onSelectTag(item);
    hideLabel && setIsHidedLabel(!isHidedLabel);
  };

  return (
    <Button
      {...rest}
      onPress={handleSelectTag}
      key={item.label}
      scale={1}
      animation="bouncy"
      pressStyle={hoverStyle}
      width={isHidedLabel ? '$5' : '$10'}
      size={isHidedLabel ? '$0.5' : size}
      backgroundColor={item.color}>
      {!isHidedLabel && item.label}
    </Button>
  );
};

export default Tag;
