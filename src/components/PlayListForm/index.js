import { useEffect } from "react";
import style from "./style.module.css";
import Button from "components/Button";
import { InputText, InputTextArea } from "components/Forms";

const PlayListForm = ({ handleSubmit, handleChange, form, setForm }) => {
  
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      isValid: prevForm.desc.isValid && prevForm.title.isValid,
    }));
  }, [setForm, form.title.isValid, form.desc.isValid]);

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <InputText
          autoComplete="off"
          onChange={handleChange}
          value={form.title.value}
          label="Title"
          name="title"
          required
          isValid={form.title.isValid}
        />
        <InputTextArea
          required
          onChange={handleChange}
          value={form.desc.value}
          label="Description"
          name="desc"
          rows="3"
          cols="50"
          isValid={form.desc.isValid}
        />
        <Button
          additionalStyle={!form.isValid ? style.btn__invalid : ""}
          type="submit"
          disabled={!form.isValid}
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default PlayListForm;
