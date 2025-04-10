import GalleryExperience from "./GalleryExperience";
import InformationExperience from "./InformationExperience";
import { useState, useEffect } from "react";

const ContainerExperience = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!id) return;
    fetch(`/api/experiences/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setData(results.data);
      });
  }, [id]);

  return (
    <div className="min-h-screen w-[1280px] bg-white pt-20 ">
      <GalleryExperience data={data} />
      <InformationExperience id={id} data={data} />
    </div>
  );
};

export default ContainerExperience;
