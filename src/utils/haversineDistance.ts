type Props = {
  userLatitude: number;
  userLongitude: number;
  destinyLatitude: number;
  destinyLongitude: number;
};

const haversineDistance = ({
  userLatitude,
  userLongitude,
  destinyLatitude,
  destinyLongitude,
}: Props): string => {
  const earthRadius = 6371;

  const toRadians = (angle: number) => angle * (Math.PI / 180);

  const dLat = toRadians(destinyLatitude - userLatitude);
  const dLon = toRadians(destinyLongitude - userLongitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(userLatitude)) *
      Math.cos(toRadians(destinyLatitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;

  if (distance) return `${distance.toFixed(2)}km`;
};

export default haversineDistance;
