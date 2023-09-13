import GalleryExperience from './GalleryExperience';
import InformationExperience from './InformationExperience';

const ContainerExperience = ({ id }) => {
  return (
    <div className="min-h-screen w-[1280px] bg-white pt-2">
      <GalleryExperience id={id} />
      <InformationExperience id={id} />
    </div>
  );
};

export default ContainerExperience;
