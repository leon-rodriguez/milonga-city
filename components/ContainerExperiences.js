import { experiencesList } from "../pages/api/experiences.js";
import Card from "./Card.js";

const ContainerExperiences = () => {
  return (
    <div className="bg-[#f0f0f0] grid grid-cols-3 gap-y-9 w-full p-11 max-xl:grid-cols-2 max-[895px]:grid-cols-1">
      {experiencesList.map((item) => (
        <div className="flex justify-center" key={item.id}>
          <Card data={item} />
        </div>
      ))}
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
