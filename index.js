import axios from "axios";

const consoleFetchedData = (data) =>
  //console.log(data);
  data.forEach((element) => {
    console.log("Nome:", element.name);
    console.log("Idade média:", element.age);
    console.log("Quantidade de registros", element.count);
    console.log("-----------------------");
  });

async function fetchAgifyData(country) {
  const baseUrl = `https://api.agify.io/`;

  try {
    return axios
      .get(baseUrl, {
        params: {
          name: ["victor","milson","gabriela","patricia","wagner","brenda",],
          ...country && {country_id: country},
        },
      })
      .then((data) => consoleFetchedData(data.data))
      .catch((e) => console.warn(`Error: ${e}`));
  } catch (e) {
    console.warn(`Error: ${e}`);
  }
}

fetchAgifyData("CA");
