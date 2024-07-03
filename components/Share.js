import React from 'react';
import { Button, Share } from 'react-native';

const ShareButton = ({ barcode }) => {
  const handleShare = () => {
    Share.share({
      message: `Check out this product: ${barcode}`,
    });
  };

  return <Button title="Share" onPress={handleShare} />;
};

export default ShareButton;
