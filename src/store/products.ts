import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocalProduct } from '../domain/product';

interface State {
  items: LocalProduct[];
}

const initialState: State = {
  items: [],
};

export const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<LocalProduct>) => {
      state.items.push(action.payload);
    },
    update: (state, action: PayloadAction<LocalProduct>) => {
      const { id } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { reducer } = slice;
export const { add, remove, update } = slice.actions;
