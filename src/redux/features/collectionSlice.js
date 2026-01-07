import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("mediaCollection")) || [],
};
export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      const alreadyExist = state.items.find(
        (item) => item.id == action.payload.id
      );

      if (!alreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("mediaCollection", JSON.stringify(state.items));
      }
    },

    removeFromCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("mediaCollection", JSON.stringify(state.items));
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("mediaCollection");
    },
    addedToast: () => {
      toast.success("Added to collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToast: () => {
      toast.error("Removed from collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeAllToast: () => {
      toast.error("Removed all items from collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});
export const {
  addToCollection,
  removeFromCollection,
  clearCollection,
  addedToast,
  removeToast,
  removeAllToast
} = collectionSlice.actions;
export default collectionSlice.reducer;
