export const trackDetail = (data) => {
  const {
    album: {
      images: [imgObj],
      artists: [artist],
      name: albumName,
    },
    external_urls: { spotify },
    name: title,
    id,
    uri
  } = data;

  return { id, title, artist, albumName, imgObj, spotify, uri };
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

export const popupCenter = (url) => {
  const w = 500;
  const h = 580;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const left = (width - w) / 2;
  const top = (height - h) / 4;

  const newWindow = window.open(
    url,
    "_blank",
    `scrollbars=yes,
    width=${w}, 
    height=${h}, 
    top=${top}, 
    left=${left}`
  );

  return newWindow
};
