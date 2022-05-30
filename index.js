import fetch from "node-fetch";

const consoleFetchedData = (data) => {
  data.forEach((element) => {
    console.log("Nome:", element.name);
    console.log("Idade média:", element.age);
    console.log("Quantidade de registros", element.count);
    console.log("-----------------------");
  });
};

async function fetchAgifyData(country) {
  const baseUrl = `https://api.agify.io/?name[]=victor&name[]=milson&name[]=gabriela&name[]=patricia&name[]=wagner&name[]=brenda`;
  const completeUrl = country ? baseUrl + `&country_id=${country}` : baseUrl;

  try {
    const request = await fetch(completeUrl);
    return request.json();
  } catch (e) {
    console.warn(`Error: ${e}`);
  }
}

fetchAgifyData("CA").then((data) => consoleFetchedData(data));
fetchAgifyData().then((data) => consoleFetchedData(data));
