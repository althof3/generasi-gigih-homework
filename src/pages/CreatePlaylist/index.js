import PlayListForm from "components/PlayListForm";
import useSpotifyApi from "hooks/useSpotifyApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelected } from "redux/TrackSlice";

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

const CreatePlaylist = () => {
  const [form, setForm] = useState(initialForm);
  const dispatch = useDispatch();
  const { selectedTracks } = useSelector((state) => state.tracks);
  const client = useSpotifyApi();

  const resetModalForm = () => {
    setForm(initialForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqBody = {
      name: form.title.value,
      description: form.desc.value,
      public: false,
    };
    await client.postPlaylist(reqBody, selectedTracks);
    resetModalForm();
    dispatch(clearSelected());
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
    <div>
      <h1>Create Playlist</h1>
        <PlayListForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          form={form}
          setForm={setForm}
        />
    </div>
  );
};

export default CreatePlaylist;
