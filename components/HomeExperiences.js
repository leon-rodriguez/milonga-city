import Card from "./Card";
import { homeList } from "../pages/api/home";

const HomeExperiences = () => {
  //console.log("Data: ", experiencesList);
  return (
    <article className=" p-6  bg-[#f0f0f0] min-h-[750px]">
      <h1 className="text-center font-bold text-4xl mb-2">TRENDING TOURS</h1>
      <h3 className="text-center text-lg mb-8">
        JOIN MILONGA CITY TO ENJOY BUENOS AIRES EXPERIENCES
      </h3>
      <div className="flex justify-evenly flex-wrap">
        {homeList.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </article>
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
  return homeList;
}

export default HomeExperiences;
