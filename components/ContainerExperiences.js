import { useEffect, useState } from 'react';
import Card from './Card.js';

const ContainerExperiences = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/experiences`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        setData(results.data);
      });
  }, []);

  return (
    <div className="w-full min-h-auto">
      <div className="bg-[#f0f0f0] grid grid-cols-3 gap-y-9 w-2/3 p-11 mx-auto max-[1800px]:grid-cols-2 max-[1240px]:grid-cols-1 max-[1240px]:w-2/4 max-[720px]:w-full">
        {!data && 'cargando :('}
        {data && data.length === 0 && 'no hay experiencias disponibles'}
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div className="flex justify-center" key={item.id}>
              <Card data={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContainerExperiences;
