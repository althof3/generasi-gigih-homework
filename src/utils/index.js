export const trackDestruction = (data) => {
  const {
    album: {
      images: [imgObj],
      artists: [artist],
      name: albumName,
    },
    external_urls: { spotify },
    name: title,
    id,
  } = data;

  return { id, title, artist, albumName, imgObj, spotify };
};

export const getToken = (opener) => {
  let token;
  let type;

  const newUrl = String(opener.location.href).replace("#", "?");
  const queryString = new URL(newUrl).search;

  if (queryString.length > 0) {
    const params = new URLSearchParams(queryString);
    token = params.get("access_token");
    type = params.get("token_type");
  }
  return { token, type };
};
