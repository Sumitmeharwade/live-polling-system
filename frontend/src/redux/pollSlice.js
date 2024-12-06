import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { io } from 'socket.io-client';

const backendUrl = 'https://live-polling-system-backend-p7ss.onrender.com/api/polls';

export const fetchPolls = createAsyncThunk('polls/fetchPolls', async () => {
  const response = await axios.get(backendUrl);
  return response.data;
});

export const createPoll = createAsyncThunk('polls/createPoll', async (pollData) => {
  const response = await axios.post(backendUrl, pollData);
  return response.data.poll;
});


export const submitAnswer = createAsyncThunk('polls/submitAnswer', async (pollId, answer) => {
    const response = await axios.post(backendUrl, pollId, answer);
    return response.data.poll;
  });


// const socket = io('http://localhost:4000');

// export const connectToSocket = () => (dispatch) => {
//   socket.on('pollUpdated', (updatedPoll) => {
//     dispatch(fetchPolls()); // Re-fetch all polls or update state with the new poll
//   });
// };
// export const submitAnswer = (pollId, answer) => () => {
//     socket.emit('submitAnswer', { pollId, answer });
//   };

const pollSlice = createSlice({
  name: 'polls',
  initialState: {
    polls: [],
    status: 'idle',
  },
  reducers: {
    setPolls: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolls.fulfilled, (state, action) => {
        state.polls = action.payload;
        state.status = 'succeeded';
      })
      .addCase(createPoll.fulfilled, (state, action) => {
        state.polls.push(action.payload);
      });
  },
});
export const { setPolls} = pollSlice.actions;
export default pollSlice.reducer;
