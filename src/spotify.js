export const authEndpoint = "https://accounts.spotify.com/authorize";
//  https://actionjacks.github.io/mySpotify/
//  http://localhost:3000/
const redirectUri = "https://actionjacks.github.io/mySpotify/";

const clientId = "73f1db292a6b40c8aba61a4beacbd7c1";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
