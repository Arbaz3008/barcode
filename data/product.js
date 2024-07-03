export const getProductDetails = (barcode) => {
    const products = {
      '123456789012': {
        name: 'Sample Product',
        price: '$10.00',
        description: 'This is a sample product.',
        image: 'https://via.placeholder.com/150',
      },
      // Add more products as needed
    };
  
    return products[barcode] || null;
  };
  