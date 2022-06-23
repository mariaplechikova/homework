const cats = [
    { id: "1", favorite: false },
    { id: "2", favorite: true },
    { id: "3", favorite: false }
  ];
  
  function getFavorite() {
    const catsFavorite = [];
  
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].favorite === true) {
        catsFavorite.push(cats[i]);
      }
    }
    console.log(catsFavorite);
    return catsFavorite;
  }
  
//   getFavorite();
  
  function functiongetCatsById(id) {
    let cat;
  
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].id === id) {
        cat = cats[i];
  
        break
      } else {
        cat = null
      }
    }
    console.log(cat);
    return cat;
  }
  
//   functiongetCatsById("3");
  
  function setFavoriteById(id, favorite) {
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].id === id) {
        cats[i].favorite = favorite
      }
    }
    console.log(cats);
  }
  
//   setFavoriteById('1', true)
  
  function toggleFavoriteById(id) {
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].id === id) {
        cats[i].favorite = !cats[i].favorite
      }
    }
    console.log(cats);
  }
  
  toggleFavoriteById('2',)