import { useState } from "react";
import AuthButton from "components/AuthButton";
import SearchBar from "components/SearchBar";
import TrackList from "components/TrackList";
import Button from "components/Button";
import PlayListForm from "components/PlayListForm";
import Modal from "components/Modal";
import useService from 'hooks/useService';

const initialForm = {
  title: {
    value: "",
    isValid: true,
    min: 10,
  },
  desc: {
    value: "",
    isValid: true,
    min: 20,
  },
  isValid: false,
};

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  
  const client = useService();

  const resetModalForm = () => {
    setIsOpen(false);
    setForm(initialForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqBody = {
      name: form.title.value,
      description: form.desc.value,
      public: false,
    };
    await client.postPlaylist(reqBody, selected);
    resetModalForm();
    setSelected([]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const validation = value.length >= form[name].min;

    setForm({
      ...form,
      [name]: {
        ...form[name],
        value: value,
        isValid: validation,
      },
    });
  };

  return (
    <>
      <h1>Create Playlist</h1>

      {isOpen && (
        <Modal onClose={resetModalForm}>
          <PlayListForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            form={form}
            setForm={setForm}
          />
        </Modal>
      )}

      <AuthButton />
      <SearchBar setTracks={setTracks} />
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        + Create Playlist
      </Button>

      <TrackList
        tracks={tracks}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};

export default Tracks;
