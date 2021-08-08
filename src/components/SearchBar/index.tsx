import Button from "components/Button";
import style from "./style.module.css";

const SearchBar: React.FC<{
  search: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleInput: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ search, handleChange, handleInput }) => {
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
