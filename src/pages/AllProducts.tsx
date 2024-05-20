import axios from "axios";
import { useEffect, useState } from "react"
import PlantCard from "../components/PlantCard";

type Plant = {
  id: string;
  plantName: string;
  plantSubtitle: string;
  plantType: string;
  price: string;
  discountPercentage: string;
  label: string;
  labelArray: { plantType: string; label: string }[];
  features: string;
  description: string;
  imgUrl: string;
}

function AllProducts() {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    document.title = 'Todos os produtos - PlantPeace'
  }, [])

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/plants');
        setPlants(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlants();
  }, [plants]);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] p-[100px]">
      {plants.length > 0 && plants.map(plant => (
        <PlantCard
          key={plant.id}
          id={plant.id}
          plantName={plant.plantName}
          price={plant.price}
          discountPrice={plant.discountPercentage}
          label={plant.label}
          className="flex flex-col max-w-[389px] my-6 drop-shadow-md cursor-pointer"
        />
      ))}
    </main>
  )
}

export default AllProducts
