export const getImageUrl = (imageName) => {
    return new URL(`/assets/${imageName}`, import.meta.url).href;
};

