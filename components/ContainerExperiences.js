import { experiencesList } from "../pages/api/experiences.js";
import Card from "./Card.js";

const ContainerExperiences = () => {
  return (
    <div className="grid grid-cols-3 gap-y-9 w-full p-11 bg-[#f0f0f0]">
      {experiencesList.map((item) => (
        <div className="flex justify-center ">
          <Card key={item.id} data={item} />
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
