export const fetchStatus = fetchResponse => {
  if (fetchResponse.ok) {
    console.log(`Successful request! ${fetchResponse.status}`);
  } else {
    console.error(`Oops, we got an error ${fetchResponse.status}`);
  }
  return fetchResponse.json();
};
export const structureMeme = fetchResponse =>
  fetchResponse.data.memes.map(meme => {
    const { id, name, width, height, url } = meme;
    return { id, name, width, height, url };
  });
export const filterDimension = memes =>
  memes.filter(meme => meme.width < 500 && meme.height < 500);
export const sortMemes = memes => memes.sort((a, b) => a.id - b.id);
export const errorLog = error =>
  console.log(`Oops, we got an error ${error.message}`);
