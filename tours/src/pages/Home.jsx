import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../component/Cards";
import Loading from "../component/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://course-api.com/react-tours-project"
    );
    setTours(response.data);
    setLoading(false);
  };

  const removeItem = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="conatiner text-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          {tours.length === 0 ? (
            <button
              className="bg-cyan-500 text-white p-3 rounded-md text-2xl mt-20"
              onClick={getData}
            >
              Refresh
            </button>
          ) : (
            <>
              <h1 className="text-center relative mt-20 mb-20 text-5xl font-bold text-slate-800">
                Our Tours
                <div className="absolute mt-3 -bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-cyan-500" />
              </h1>
              <Cards tours={tours} removeItem={removeItem} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
