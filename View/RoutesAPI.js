// Model/RouteAPI.js

//import  { NativeRouter, Route, Link } from 'react-router-native';


const API_TOKEN = "API_TOKEN_HERE";
const API_URL = "https://api.coopuniverse.fr";
const ART_API_URL = "https://art.hearthstonejson.com/v1/render/latest/frFR/512x/";
                   //https://art.hearthstonejson.com/v1/orig/AT_001.png
                   //https://art.hearthstonejson.com/v1/render/latest/frFR/512x/AT_001.png
const IMAGE_FORMAT = ".png";
const API_IMAGE_CARD_MINI = "https://art.hearthstonejson.com/v1/orig/";

const API_IMAGE_CARD = "https://extension.hearthstone.api.coopuniverse.fr/";



export function getAllCards() {
  const url = API_URL + '/card'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


//23
export function getAllCardsofUser(user) {
  user = 23
  const url = API_URL + '/inventory/{idUser}'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getAllCardsWithFilter(TYPE_FILTER,VALUE_FILTER) {
//https://api.coopuniverse.fr/card?filter=name&value_filter=Effigie
  const url = API_URL + '/card?filter={TYPE_FILTER}&value_filter={VALUE_FILTER}'
 /* if(filter && value)
        {
          url = url + '?filter='+ filter +'&value_filter='+ value +'';
        }
  */

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}



export function getImageofCard(idCard ) {
  return  ART_API_URL + idCard + IMAGE_FORMAT
}

export function getMiniImageofCard(idCard ) {
  return  API_IMAGE_CARD_MINI + idCard + IMAGE_FORMAT
}
