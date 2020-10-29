export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBJqVnZ7_R8k3ERgjqeoU_z017PODtVzuKbLTHnP07nWN6mwiQ3cbzK8mdeVUFhx6Afm0j2YCTu2zPYDoyzuOEXueXTOk7G_lKo6wlW_f00VCT8BvPgzjchh1tv2arvDr-Zh6BcJHL4zyr7tyh8VGUW3niKo2J9DLVi4Ios-EXOzo7i",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
