import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home onLoadOompas={() => null} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const oompas = [
  {
    "first_name": "Marcy",
    "last_name": "Karadzas",
    "favorite": {
      "color": "red",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/1.jpg",
    "profession": "Developer",
    "email": "mkaradzas1@visualengin.com",
    "age": 21,
    "country": "Loompalandia",
    "height": 99,
    "id": 1
  },
  {
    "first_name": "Evangelia",
    "last_name": "Cowin",
    "favorite": {
      "color": "red",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/2.jpg",
    "profession": "Metalworker",
    "email": "ecowin2@visualengin.com",
    "age": 22,
    "country": "Loompalandia",
    "height": 96,
    "id": 2
  },
  {
    "first_name": "Nesta",
    "last_name": "Pidgley",
    "favorite": {
      "color": "blue",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/3.jpg",
    "profession": "Gemcutter",
    "email": "npidgley3@visualengin.com",
    "age": 22,
    "country": "Loompalandia",
    "height": 98,
    "id": 3
  },
  {
    "first_name": "Stearne",
    "last_name": "Nunan",
    "favorite": {
      "color": "blue",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/4.jpg",
    "profession": "Medic",
    "email": "snunan4@visualengin.com",
    "age": 23,
    "country": "Loompalandia",
    "height": 95,
    "id": 4
  },
  {
    "first_name": "Cassius",
    "last_name": "Twamley",
    "favorite": {
      "color": "red",
      "food": "Chocolat",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/5.jpg",
    "profession": "Developer",
    "email": "ctwamley5@visualengin.com",
    "age": 21,
    "country": "Loompalandia",
    "height": 99,
    "id": 5
  },
  {
    "first_name": "Corenda",
    "last_name": "Diggles",
    "favorite": {
      "color": "blue",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/6.jpg",
    "profession": "Metalworker",
    "email": "cdiggles6@visualengin.com",
    "age": 19,
    "country": "Loompalandia",
    "height": 99,
    "id": 6
  },
  {
    "first_name": "Jarrad",
    "last_name": "Jaquiss",
    "favorite": {
      "color": "red",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/7.jpg",
    "profession": "Brewer",
    "email": "jjaquiss7@visualengin.com",
    "age": 22,
    "country": "Loompalandia",
    "height": 98,
    "id": 7
  },
  {
    "first_name": "Kelsy",
    "last_name": "Paramor",
    "favorite": {
      "color": "blue",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/8.jpg",
    "profession": "Medic",
    "email": "kparamor8@visualengin.com",
    "age": 23,
    "country": "Loompalandia",
    "height": 95,
    "id": 8
  },
  {
    "first_name": "Jesselyn",
    "last_name": "Flasby",
    "favorite": {
      "color": "blue",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/0.jpg",
    "profession": "Developer",
    "email": "jflasby9@visualengin.com",
    "age": 23,
    "country": "Loompalandia",
    "height": 97,
    "id": 9
  },
  {
    "first_name": "Georgiana",
    "last_name": "Pauel",
    "favorite": {
      "color": "red",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/1.jpg",
    "profession": "Developer",
    "email": "gpauel10@visualengin.com",
    "age": 19,
    "country": "Loompalandia",
    "height": 99,
    "id": 10
  },
  {
    "first_name": "Alejandra",
    "last_name": "Teideman",
    "favorite": {
      "color": "red",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/2.jpg",
    "profession": "Metalworker",
    "email": "ateideman11@visualengin.com",
    "age": 22,
    "country": "Loompalandia",
    "height": 98,
    "id": 11
  },
  {
    "first_name": "Alexis",
    "last_name": "Inder",
    "favorite": {
      "color": "blue",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/3.jpg",
    "profession": "Gemcutter",
    "email": "ainder12@visualengin.com",
    "age": 20,
    "country": "Loompalandia",
    "height": 98,
    "id": 12
  },
  {
    "first_name": "Ricard",
    "last_name": "Reeman",
    "favorite": {
      "color": "red",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/4.jpg",
    "profession": "Medic",
    "email": "rreeman13@visualengin.com",
    "age": 23,
    "country": "Loompalandia",
    "height": 97,
    "id": 13
  },
  {
    "first_name": "Catlee",
    "last_name": "Annear",
    "favorite": {
      "color": "red",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/5.jpg",
    "profession": "Developer",
    "email": "cannear14@visualengin.com",
    "age": 24,
    "country": "Loompalandia",
    "height": 94,
    "id": 14
  },
  {
    "first_name": "Fleming",
    "last_name": "Pouck",
    "favorite": {
      "color": "blue",
      "food": "Chocolat",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/6.jpg",
    "profession": "Metalworker",
    "email": "fpouck15@visualengin.com",
    "age": 19,
    "country": "Loompalandia",
    "height": 101,
    "id": 15
  },
  {
    "first_name": "Jarid",
    "last_name": "Bunner",
    "favorite": {
      "color": "blue",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/7.jpg",
    "profession": "Brewer",
    "email": "jbunner16@visualengin.com",
    "age": 20,
    "country": "Loompalandia",
    "height": 98,
    "id": 16
  },
  {
    "first_name": "Karry",
    "last_name": "Hethron",
    "favorite": {
      "color": "red",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/8.jpg",
    "profession": "Medic",
    "email": "khethron17@visualengin.com",
    "age": 23,
    "country": "Loompalandia",
    "height": 97,
    "id": 17
  },
  {
    "first_name": "Renell",
    "last_name": "Byrcher",
    "favorite": {
      "color": "blue",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/0.jpg",
    "profession": "Developer",
    "email": "rbyrcher18@visualengin.com",
    "age": 21,
    "country": "Loompalandia",
    "height": 97,
    "id": 18
  },
  {
    "first_name": "Patsy",
    "last_name": "Pergens",
    "favorite": {
      "color": "red",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/1.jpg",
    "profession": "Developer",
    "email": "ppergens19@visualengin.com",
    "age": 24,
    "country": "Loompalandia",
    "height": 96,
    "id": 19
  },
  {
    "first_name": "Paulie",
    "last_name": "Ayree",
    "favorite": {
      "color": "blue",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/2.jpg",
    "profession": "Metalworker",
    "email": "payree20@visualengin.com",
    "age": 20,
    "country": "Loompalandia",
    "height": 98,
    "id": 20
  },
  {
    "first_name": "Todd",
    "last_name": "Lavalle",
    "favorite": {
      "color": "blue",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/3.jpg",
    "profession": "Gemcutter",
    "email": "tlavalle21@visualengin.com",
    "age": 20,
    "country": "Loompalandia",
    "height": 100,
    "id": 21
  },
  {
    "first_name": "Carlie",
    "last_name": "Stainton",
    "favorite": {
      "color": "red",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/4.jpg",
    "profession": "Medic",
    "email": "cstainton22@visualengin.com",
    "age": 21,
    "country": "Loompalandia",
    "height": 97,
    "id": 22
  },
  {
    "first_name": "Dulcinea",
    "last_name": "Gomme",
    "favorite": {
      "color": "red",
      "food": "Chocolat",
    },
    "gender": "F",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/5.jpg",
    "profession": "Developer",
    "email": "dgomme23@visualengin.com",
    "age": 24,
    "country": "Loompalandia",
    "height": 96,
    "id": 23
  },
  {
    "first_name": "Cherry",
    "last_name": "Duesbury",
    "favorite": {
      "color": "blue",
      "food": "cocoa nuts",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/6.jpg",
    "profession": "Metalworker",
    "email": "cduesbury24@visualengin.com",
    "age": 22,
    "country": "Loompalandia",
    "height": 96,
    "id": 24
  },
  {
    "first_name": "Shepard",
    "last_name": "Kenealy",
    "favorite": {
      "color": "red",
      "food": "Chocolat",
    },
    "gender": "M",
    "image": "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/7.jpg",
    "profession": "Brewer",
    "email": "skenealy25@visualengin.com",
    "age": 20,
    "country": "Loompalandia",
    "height": 100,
    "id": 25
  }
];
