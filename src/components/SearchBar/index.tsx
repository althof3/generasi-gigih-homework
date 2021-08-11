import Button from "components/Button";
import style from "./style.module.css";

interface ISearchBar {
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInput: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<ISearchBar> = ({ search, handleChange, handleInput }) => {
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
