import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  loading: false,
};

const BASE_URL = "https://fakestoreapi.com";

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Server Error");
    }
    const products = await response.json();
    return products;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Add reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(getSingleProduct.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = productSlice.actions; // Add actions here
export default productSlice.reducer;
