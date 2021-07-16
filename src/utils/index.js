export const trackDestruction = (data) => {
  const {
    album: {
      images: [, imgSrc],
      artists: [artist],
      name: albumName,
    },
    external_urls: { spotify },
    name: title,
    id,
  } = data;

  return { id, title, artist, albumName, imgSrc, spotify };
};
