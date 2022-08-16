import { loginFailure, loginStart, loginSuccess, reset } from "./userRedux";
import {
  getPostStart,
  getPostSuccess,
  getPostFailure,
  updatePostStart,
} from "./postRedux";
import { getEventStart, getEventSuccess, getEventFailure } from "./eventRedux";
import { axiosInstance } from "../config";

// Login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(reset());
};

// Get All Posts
export const getPosts = async (dispatch) => {
  dispatch(getPostStart());
  try {
    const res = await axiosInstance.get("/posts");
    dispatch(getPostSuccess(res.data));
  } catch (err) {
    dispatch(getPostFailure());
  }
};

// Get Post by Id
export const getPost = async (id, dispatch) => {
  dispatch(getPostStart());
  try {
    const res = await axiosInstance.get(`/posts/${id}`);
    dispatch(getPostSuccess(res.data));
  } catch (err) {
    dispatch(getPostFailure());
  }
};

export const updatePost = async (id, post, dispatch) => {
  dispatch(updatePostStart());
  try {
    // update
    dispatch(getPostSuccess({ id, post }));
  } catch (err) {
    dispatch(getPostFailure());
  }
};

// Get All Events
export const getEvents = async (dispatch) => {
  dispatch(getEventStart());
  try {
    const res = await axiosInstance.get("/events");
    dispatch(getEventSuccess(res.data));
  } catch (err) {
    dispatch(getEventFailure());
  }
};

// Comment
export const comment = (value, id) =>
  axiosInstance.post(`posts/${id}/comments`, { value });

export const commentNote = (value, id) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.commentNote(value, id);
    dispatch(comment(data));
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};
