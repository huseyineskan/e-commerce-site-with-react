import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Server Error");
    }
    const products = await response.json();
    return products;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Add reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = productsSlice.actions; // Add actions here
export default productsSlice.reducer;
