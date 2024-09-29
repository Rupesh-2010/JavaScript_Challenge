const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    console.log("gettitng Data....");
    let responce = await fetch(URL);
    console.log(responce); //JSON file madhe yeil
    let data = await responce.json();
    console.log(data)
}
