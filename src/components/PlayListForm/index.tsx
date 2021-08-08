import style from "./style.module.css";
import { InputText, InputTextArea } from "components/Forms";
import { Button } from "@chakra-ui/react";
import { clearSelected } from "redux/TrackSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import useSpotifyApi from "hooks/useSpotifyApi";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const PlayListForm: React.FC = () => {
  const client = useSpotifyApi();
  const dispatch = useAppDispatch();
  const { selectedTracks } = useAppSelector((state) => state.tracks);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit: SubmitHandler<{[key: string]: string}> = (values) => {
    return new Promise<void>((resolve) => {
      client.postPlaylist({ ...values, public: false }, selectedTracks);
      reset();
      dispatch(clearSelected());
      resolve();
    });
  };

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          register={register}
          label="Title"
          name="name"
          errors={errors}
          rules={{
            required: "This is required",
            minLength: {
              value: 10,
              message: "Minimum length should be 10",
            },
          }}
        />
        <InputTextArea
          register={register}
          label="Description"
          name="description"
          errors={errors}
          rules={{
            required: "This is required",
            minLength: {
              value: 20,
              message: "Minimum length should be 20",
            },
          }}
        />

        <Button
          mt={4}
          colorScheme="green"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PlayListForm;
