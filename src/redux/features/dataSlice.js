import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const getData = createAsyncThunk(
  "fetchData",
  async ({ lang, country }) => {
    const data = fetch(
      `https://gnews.io/api/v4/search?q=example&lang=${
        lang ?? "en" ?? "zh" ?? "fr"
      }&country=${
        country ?? "in" ?? "cn" ?? "fr"
      }&max=10&apikey=1966e504881b0656e2feda068db73d72`
    )
      .then((res) => res.json())
      .then((json) =>
        json.articles?.map((item, i) => {
          return {
            ...item,
            id: i,
          };
        })
      );
    data.then((abc) => console.log(abc));
    return data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateLike: (state, action) => {
      state.data[action.payload].like = state.data[action.payload].like + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log(current(state), "state", action);
      action.payload?.map((data) => {
        state.data[data.id] = {
          ...(state.data[data.id] || { like: 0 }),
          ...data,
        };
      });
    });
  },
});

export const { updateLike } = dataSlice.actions;
export default dataSlice.reducer;
