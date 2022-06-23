import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { useTryAsync } from 'no-try'

import axios from "../customAxios"
import groupByFirstChar from "../helpers/groupByFirstChar"

const initialState = {
  list: [],
  sectionedList: [],
  loading: 'idle', //'idle' | 'pending' | 'succeeded' | 'failed',
}

export const getAllContacts = createAsyncThunk(
  'contactList/getAllContacts',
  async (obj, thunkAPI) => {
    const [error, result] = await useTryAsync(() => axios(obj))
    
    const data = result.data.data.map(obj => ({...obj, personName: obj.firstName + ' ' + obj.lastName}))
    return data
  }
)

export const counterSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllContacts.pending, (state, action) => {
      state.loading = 'pending'
      // state.list = data
      // state.sectionedList = sectionedList
    })
    builder.addCase(getAllContacts.fulfilled, (state, action) => {
      const data = action.payload

      return {...groupByFirstChar(data), loading: 'succeeded'}
      // state.list = data
      // state.sectionedList = sectionedList
    })
  },
})

// Action creators are generated for each case reducer function
// export const { setLoading } = counterSlice.actions

export default counterSlice.reducer