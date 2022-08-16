import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts = action.payload;
    },
    getPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updatePostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updatePostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts[
        state.posts.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.post;
    },
    updatePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // Get Comments
    comment: (state, action) => {
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note._id !== action.payload) {
            return action.payload;
          }
          return note;
        }),
      };
    },
  },
});

// The actions
export const {
  getPostStart,
  getPostSuccess,
  getPostFailure,
  updatePostStart,
  updatePostSuccess,
  updatePostFailure,
} = postSlice.actions;

// The reducer
export default postSlice.reducer;

// // The selector
// export const selectAllPosts = (state) => state.posts;

// export const selectPostById = (state, postId) =>
//   state.posts.find((post) => post.id === postId);

// export const commentPosts = (value, id) => async (dispatch) => {
//   try {
//     const { data } = await axiosInstance.commentPosts(value, id);
//     dispatch(comment(data));
//     return data.comment;
//   } catch (error) {
//     console.log(error);
//   }
// };
