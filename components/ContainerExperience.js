import GalleryExperience from './GalleryExperience';
import InformationExperience from './InformationExperience';

const ContainerExperience = () => {
  return (
    <div className="min-h-screen w-[1280px] bg-white pt-2">
      <GalleryExperience />
      <InformationExperience />
    </div>
  );
};

export default ContainerExperience;
