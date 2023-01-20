import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import Controls from "../components/Controls";
import { ALL_COUNTRIES } from "../config";
import List from "../components/List";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setfilteredCountries] = useState([]);
  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((item) => item.region.includes(region));
    }
    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setfilteredCountries(data);
  };
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);
  console.log("RENDER HOMAPAGE");
  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);
  const navigate = useNavigate();
  const uploadCountries = !filteredCountries.length
    ? countries
    : filteredCountries;
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {uploadCountries.map((el) => {
          const countryInfo = {
            img: el.flags.png,
            name: el.name,
            info: [
              {
                title: "Population",
                description: el.population.toLocaleString(),
              },
              { title: "Region", description: el.region },
              { title: "Capital", description: el.capital },
            ],
          };
          return (
            <Card
              key={el.name}
              onClick={() => navigate(`/country/${el.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
