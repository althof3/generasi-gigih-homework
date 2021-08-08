import { createSlice } from "@reduxjs/toolkit";

interface initialTypes {
  selectedTracks: any[],
  trackList: any[],
}

const initialState: initialTypes = {
  selectedTracks: [],
  trackList: [],
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    storeTracks: (state, action) => {
      state.trackList = action.payload;
    },

    addSelected: (state, action) => {
      state.selectedTracks = [...state.selectedTracks, action.payload];
    },
    removeSelected: (state, action) => {
      state.selectedTracks = [
        ...state.selectedTracks.filter((currUri) => currUri !== action.payload),
      ];
    },
    clearSelected: (state) => {
      state.selectedTracks = [];
    },
  },
});

export const { storeTracks, addSelected, removeSelected, clearSelected } =
  tracksSlice.actions;

export default tracksSlice.reducer;
