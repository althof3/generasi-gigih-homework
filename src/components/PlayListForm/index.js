import style from "./style.module.css";
import Button from "components/Button";

const PlayListForm = ({ handleSubmit, handleChange, form }) => {
  return (
    <div className={style.form}>
      <h2>Add Playlist</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            autoComplete="off"
            onChange={handleChange}
            value={form.title.value}
            id="title"
            name="title"
            type="text"
            required
          />
          {!form.title.isValid && (
            <div className={style.form__error}>Title is too short 😟</div>
          )}
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            required
            onChange={handleChange}
            value={form.desc.value}
            id="desc"
            name="desc"
            rows="3"
            cols="50"
          />
          {!form.desc.isValid && (
            <div className={style.form__error}>Description is too short 😟</div>
          )}
        </div>
        <Button type="submit">SAVE</Button>
      </form>
    </div>
  );
};

export default PlayListForm;
