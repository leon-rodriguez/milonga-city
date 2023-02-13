import Card from "./Card";
import { homeList } from "../pages/api/home";

const HomeExperiences = () => {
  //console.log("Data: ", experiencesList);
  return (
    <article className=" p-6 flex justify-evenly bg-[#f0f0f0]">
      {homeList.map((item) => (
        <Card key={item.id} data={item} />
      ))}
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
