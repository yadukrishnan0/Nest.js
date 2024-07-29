
interface Product{
   id:number,
   name: string,
   description:string,
   price:number,
   category:string,
   stock:number,
   imageUrl:string,
}

export const products:Product[] = [
    {
      id: 1,
      name: 'Laptop',
      description: 'A high-performance laptop suitable for all your needs.',
      price: 999.99,
      category: 'Electronics',
      stock: 50,
      imageUrl: 'https://example.com/laptop.jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'A latest generation smartphone with amazing features.',
      price: 799.99,
      category: 'Electronics',
      stock: 100,
      imageUrl: 'https://example.com/smartphone.jpg'
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling over-ear headphones.',
      price: 199.99,
      category: 'Accessories',
      stock: 200,
      imageUrl: 'https://example.com/headphones.jpg'
    },
    {
      id: 4,
      name: 'Office Chair',
      description: 'Ergonomic office chair with lumbar support.',
      price: 299.99,
      category: 'Furniture',
      stock: 75,
      imageUrl: 'https://example.com/officechair.jpg'
    },
    {
      id: 5,
      name: 'Coffee Maker',
      description: 'Brews the perfect cup of coffee every time.',
      price: 99.99,
      category: 'Kitchen Appliances',
      stock: 150,
      imageUrl: 'https://example.com/coffeemaker.jpg'
    }
  ];
  
 
  