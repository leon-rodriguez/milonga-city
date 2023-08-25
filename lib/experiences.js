export const getExperiences = (id) => {
  return fetch(`http://localhost:3000/api/experiences/${id}`).then(
    (results) => {
      return results.json();
    }
  );
};
