import { randomNumber } from './randomNumber';

export const getStorageImage = () => {
    const index = randomNumber(4);
    return `https://firebasestorage.googleapis.com/v0/b/here-your-duckdam.appspot.com/o/images%2F${index}.png?alt=media`;
};
