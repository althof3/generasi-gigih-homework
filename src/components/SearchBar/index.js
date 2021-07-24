import { useState } from "react";
import Button from "components/Button";
import style from "./style.module.css";
import { fetchTracks } from "api/services";

const SearchBar = ({ authHeader, setTracks }) => {
  const [search, setSearch] = useState("");

  const getTracks = async (query) => {
    try {
      const tracks = await fetchTracks(query, authHeader);
      setTracks(tracks);
    } catch (error) {
      alert(error);
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
        placeholder="Bohemian"
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
