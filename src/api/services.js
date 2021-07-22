import axios from "axios";
import { profileApi, searchTracks, loginApi, logoutApi, } from "api/endpoints";
import { popupCenter } from 'utils';
import { getToken } from 'utils';

export const fetchTracks = (query = "Bohemian Rhapsody", header) => {
  const tracks = new Promise((resolve) => {
    const res = axios.get(searchTracks(query), {
      headers: {
        Authorization: header,
      },
    });

    res
      .then((result) => {
        resolve(result.data.tracks.items);
      })
      .catch((err) => {
        resolve("error");
      });
  });

  return tracks;
};

export const fetchProfile = (bearerToken) => {
  const profile = new Promise((resolve)=>{

    const res = axios.get(profileApi, {
      headers: {
        Authorization: bearerToken,
      },
    });
    
    res.then(result => {
      const {
        display_name: name,
        images: [img],
      } =  result.data;
      resolve({name, img})
    }).catch(err => {
      resolve('error')
    })
  })

  return profile
};

export const logoutPopUp = () => {

  const logout = new Promise((resolve)=>{
    const opener = popupCenter(logoutApi);

    const logoutInterval = setInterval(() => {
      
      clearInterval(logoutInterval);
      opener.close();
      resolve()
    }, 500);
  })
  return logout
}

export const loginPopUp = () => {

  const login = new Promise((resolve) => {
    const opener = popupCenter(loginApi);

    let checkTokenUrl;
    const getTokenInterval = setInterval(() => {
      try {
        checkTokenUrl = opener.location.href.includes("access_token");
      } catch (error) {}

      if (checkTokenUrl) {
        const { token, type } = getToken(opener);
        clearInterval(getTokenInterval);
        opener.close();
        resolve({token, type})
      }
    }, 100);
  })

  return login
}
