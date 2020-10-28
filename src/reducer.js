export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCrkIBPPJUwujrKh3_aGClKKULfjlhRzg3z6nlOGR6WF1d1cdQLwcfDH93Rs75j-ckB8FUVX2qsq5KIY2xcg8tnAZ0Q3jHV4ZHEcDPwd0EN-to_Up8TeQCZvyNDVJzDLxLAMABqZASOUH0HZcJ9-ldlbtyqK_VHAGSjID0eRFkELgh9",
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

    default:
      return state;
  }
};

export default reducer;
