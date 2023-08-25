import { useRouter } from 'next/router';

const Booking = () => {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/experiences`)
      .then((results) => {
        return results.json();
      })
      .then((results) => {
        const devolverCard = results.data.find((item) => {
          if (item.id == id) {
            return item;
          }
        });
        setData(devolverCard);
      });
  }, []);
  return <div>a</div>;
};

export default [id];
