import React from "react";
import { render, screen } from "@testing-library/react";
import TrackList from ".";
import dummyTracks from "utils/constants";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { MemoryRouter } from "react-router-dom";

// const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: jest.fn(),
//   };
//   const next = jest.fn();

//   const invoke = (action) => thunk(store)(next)(action);

//   return { store, next, invoke };
// };

const renderTracklist = (tracks: any[]) => {
  return (
    <Provider store={store}>
      {/* <MemoryRouter> */}
        <TrackList tracks={tracks} />
      {/* </MemoryRouter> */}
    </Provider>
  );
};

test("should render all tracks", () => {
  // render(<TrackList tracks={dummyTracks} />);
  renderTracklist(dummyTracks)
  screen.debug();
});
