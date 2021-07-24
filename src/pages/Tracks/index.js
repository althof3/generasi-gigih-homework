import { useState } from "react";
import AuthButton from "components/AuthButton";
import SearchBar from "components/SearchBar";
import TrackList from "components/TrackList";
import Button from "components/Button";
import PlayListForm from "components/PlayListForm";
import Modal from "components/Modal";
import { addToPlaylist, createPlaylist } from "api/services";

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
};

const Tracks = () => {
  const [authHeader, setAuthHeader] = useState();
  const [profile, setProfile] = useState();
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);

  const resetModalForm = () => {
    setIsOpen(false);
    setForm(initialForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: form.title.value,
      description: form.desc.value,
      public: false,
    };
    try {
      const { id, name } = await createPlaylist(profile.id, data, authHeader);
      await addToPlaylist(id, selected, authHeader);
      resetModalForm();
      setSelected([]);
      alert(`Tracks Added to ${name}`);
    } catch (error) {
      alert(error);
    }
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
          />
        </Modal>
      )}

      <AuthButton
        profile={profile}
        setProfile={setProfile}
        authHeader={authHeader}
        setAuthHeader={setAuthHeader}
      />
      <SearchBar authHeader={authHeader} setTracks={setTracks} />
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
