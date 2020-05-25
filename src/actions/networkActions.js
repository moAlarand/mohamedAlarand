import NetInfo from "@react-native-community/netinfo";
import { SET_INTERNET_CONNECTION } from "./types";
import axios from "axios";

export async function initInternetConnection(dispatch) {
  const CancelToken = axios.CancelToken;
  const timeOut = 10000;
  const timePingOut = 5000;
  const timePingErrorOut = 6000;
  let cancel;
  let timeOutListener;
  let timeOutPingListener;

  // poll check internet
  const checkInternet = async () => {
    try {
      if (timeOutPingListener) clearTimeout(timeOutPingListener);

      timeOutPingListener = setTimeout(() => {
        dispatch({
          type: SET_INTERNET_CONNECTION,
          payload: false,
        });
      }, timePingErrorOut);
      await axios.get("https://www.google.com", {
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          cancel = c;
        }),
        timeout: timePingOut,
      });
      if (timeOutPingListener) clearTimeout(timeOutPingListener);
      dispatch({
        type: SET_INTERNET_CONNECTION,
        payload: true,
      });
    } catch (err) {
      if (!axios.isCancel(err)) {
        dispatch({
          type: SET_INTERNET_CONNECTION,
          payload: false,
        });
      }
    }
  };

  const poll = async () => {
    if (cancel) cancel();
    if (timeOut) clearTimeout(timeOutListener);
    await checkInternet();
    timeOutListener = setTimeout(poll, timeOut);
  };
  ///

  // once
  const state = await NetInfo.fetch();
  if (state.isConnected) {
    await poll();
  } else {
    dispatch({
      type: SET_INTERNET_CONNECTION,
      payload: false,
    });
  }

  //listener
  NetInfo.addEventListener(state => {
    if (state.isConnected) {
      poll();
    } else {
      dispatch({
        type: SET_INTERNET_CONNECTION,
        payload: false,
      });
    }
  });
}
