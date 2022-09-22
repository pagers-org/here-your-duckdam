import { STORAGE_IMAGE_URL } from '@shared/constant/StorageImageUrl';
export const getStorageImage = (index: number) => {
    return `${STORAGE_IMAGE_URL}%2F${index}.png?alt=media`;
};
