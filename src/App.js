import Directory from './components/directory/directory.components';
import './App.css'

const App =()=> {
  const categories = [
    {
      id: 1,
      title: 'Fishes',
      imageUrl: 'https://wallpaperaccess.com/full/747278.jpg',
    },
    {
      id: 2,
      title: 'Supplies',
      imageUrl: 'https://www.aquariumcarebasics.com/images/power-filter-impeller-assembly.webp',
    },
    {
      id: 3,
      title: 'Foods',
      imageUrl: 'https://img2.exportersindia.com/product_images/bc-full/2019/7/4087215/fish-food-1562310580-4984245.jpeg',
    },
    {
      id: 4,
      title: 'Plants',
      imageUrl: 'https://www.aquariumcarebasics.com/images/ludwigia-peruensis-plant.webp',
    },
    {
      id: 5,
      title: 'Aquarium',
      imageUrl: 'https://0201.nccdn.net/1_2/000/000/09e/0e9/Wallace-640x853.jpg#RDAMDAID13737549',
    },
  ];
 
    return <Directory categories={categories} />;
}

export default App;
