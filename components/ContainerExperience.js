import GalleryExperience from './GalleryExperience';
import InformationExperience from './InformationExperience';
import Carrusel from './Carrusel';

const ContainerExperience = ({ id }) => {
  return (
    <div className="min-h-screen w-[1280px] bg-white pt-2">
      {/* <Carrusel /> */}
      <GalleryExperience />
      <InformationExperience id={id} />
    </div>
  );
};

export default ContainerExperience;
