import { experiencesList } from '../pages/api/experiences.js';
import Card from './Card.js';

const ContainerExperiences = () => {
  return (
    <div className="w-full min-h-auto">
      <div className="bg-[#f0f0f0] grid grid-cols-3 gap-y-9 w-2/3 p-11 mx-auto max-[1800px]:grid-cols-2 max-[1240px]:grid-cols-1 max-[1240px]:w-2/4 max-[720px]:w-full">
        {experiencesList.map((item) => (
          <div className="flex justify-center" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  //   try {
  //     // Fetch data from external API
  //     const res = await fetch(`http://localhost:3000/api/experiences`);
  //     const data = await res.json();

  //     // Pass data to the page via props
  //     return { props: { data } };
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  return experiencesList;
}
export default ContainerExperiences;

//flex flex-wrap justify-evenly
