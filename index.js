import { getMemes, ENDPOINT } from "./api.js";
import {
  structureMeme,
  filterDimension,
  sortMemes,
  errorLog
} from "./utils.js";

getMemes(ENDPOINT)
  .then(structureMeme)
  .then(filterDimension)
  .then(sortMemes)
  .then(console.log)
  .catch(errorLog);
