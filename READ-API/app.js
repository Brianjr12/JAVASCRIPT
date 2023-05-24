const url = "https://rickandmortyapi.com/api/character";
const html = document.getElementById("results");
const ul = document.createElement("ul");

const readApi = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    const characters = data.results;
    //* iterate the array for get the characters
    characters.forEach((character) => {
      //* create elements html
      const li = document.createElement("li");
      const img = document.createElement("img");
      const parrfs = document.createElement("p");
      //* take the name and image of the characters
      parrfs.innerText = character.name;
      img.src = character.image;
      //* add the html elements to the DOM
      li.appendChild(parrfs);
      li.appendChild(img);
      ul.appendChild(li);
    });
    html.appendChild(ul);
  } catch (error) {
    console.log(error);
  }
};
readApi();
