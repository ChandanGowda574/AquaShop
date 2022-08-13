import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Fishes',
    imageUrl: 'https://wallpaperaccess.com/full/747278.jpg',
    route: 'shop/fishes',
  },
  {
    id: 2,
        title: 'Supplies',
        imageUrl: 'https://www.aquariumcarebasics.com/images/power-filter-impeller-assembly.webp',
    route: 'shop/supplies',
  },
  {
    id: 3,
        title: 'Foods',
        imageUrl: 'https://img2.exportersindia.com/product_images/bc-full/2019/7/4087215/fish-food-1562310580-4984245.jpeg',
    route: 'shop/foods',
  },
  {
    id: 4,
    title: 'Plants',
    imageUrl: 'https://www.aquariumcarebasics.com/images/ludwigia-peruensis-plant.webp',
    route: 'shop/plants',
  },
  {
    id: 5,
    title: 'Aquarium',
    imageUrl: 'https://0201.nccdn.net/1_2/000/000/09e/0e9/Wallace-640x853.jpg#RDAMDAID13737549',
    route: 'shop/aquariums',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
