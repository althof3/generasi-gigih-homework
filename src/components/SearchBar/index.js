import { useState } from "react";
import Button from "components/Button";
import style from "./style.module.css";
import useService from "hooks/useService";

const SearchBar = ({ setTracks }) => {

  const [search, setSearch] = useState("");
  const client = useService();
  
  const handleInput = async(e) => {
    e.preventDefault();
    const tracks = await client.getTracks(search);
    setTracks(tracks);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className={style.formBar} onSubmit={handleInput}>
      <input
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
