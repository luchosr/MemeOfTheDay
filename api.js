import { fetchStatus } from "./utils.js";
export const ENDPOINT = "https://api.imgflip.com/get_memes";
export const getMemes = URL => fetch(URL).then(fetchStatus);
