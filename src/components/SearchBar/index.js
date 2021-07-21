import { searchTracks } from "api/endpoints";
import axios from "axios";
import { useState } from "react";
import Button from "components/Button";
import style from "./style.module.css";

const SearchBar = ({ authHeader, setTracks }) => {
  const [search, setSearch] = useState("");

  const getTracks = async (query) => {
    try {
      const res = await axios.get(searchTracks(query), {
        headers: {
          Authorization: authHeader,
        },
      });
      const trackList = await res.data.tracks.items;
      setTracks(trackList);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    getTracks(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className={style.formBar} onSubmit={handleInput}>
      <input
        placeholder="Find tracks..."
        className={style.inputBar}
        type="text"
        value={search}
        onChange={handleChange}
      />
      <Button additionalStyle={style.buttonBar} type="submit">
        🔍
      </Button>
    </form>
  );
};

export default SearchBar;
