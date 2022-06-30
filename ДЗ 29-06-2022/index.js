//Задание 1
// async function init() {
//     const url = `https://api.thecatapi.com/v1/images/search?limit=15&order=ASC`;
  
//     const res = await fetch(url, {
//       headers: {
//         "x-api-key": "a6d4c1eb-17c5-483c-8a1c-ecae17d6f463"
//       }
//     });
  
//     const cats = await res.json();
//     console.log(cats);
//     return cats;
//   }

// init()

//Задание 2
// async function init(limit) {
//     const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&order=ASC`;
  
//     const res = await fetch(url, {
//       headers: {
//         "x-api-key": "a6d4c1eb-17c5-483c-8a1c-ecae17d6f463"
//       }
//     });
  
//     const cats = await res.json();
//     console.log(cats);
//     return cats;
//   }

// const buttonLoading = document.querySelector("#loading");

// buttonLoading.addEventListener('click', function() {
//     const inputLimit = document.querySelector("#limit");
//     init(inputLimit.value);
// })

//Задание3
// async function init(limit, page) {
//     const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=ASC`;
  
//     const res = await fetch(url, {
//       headers: {
//         "x-api-key": "a6d4c1eb-17c5-483c-8a1c-ecae17d6f463"
//       }
//     });
  
//     const cats = await res.json();
//     console.log(cats);
//     return cats;
//   }

// const buttonLoading = document.querySelector("#loading");

// buttonLoading.addEventListener('click', function() {
//     const inputLimit = document.querySelector("#limit");
//     const inputPage = document.querySelector("#page");
//     init(inputLimit.value, inputPage.value);
// })

//Задание4
// async function init(limit, page) {
//     if (!limit) {
//         limit = 15;
//       }
    
//       if (!page) {
//         page = 1;
//       }
//     const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=ASC`;
  
//     const res = await fetch(url, {
//       headers: {
//         "x-api-key": "a6d4c1eb-17c5-483c-8a1c-ecae17d6f463"
//       }
//     });
  
//     const cats = await res.json();
//     console.log(cats);
//     return cats;
//   }

// const buttonLoading = document.querySelector("#loading");

// buttonLoading.addEventListener('click', function() {
//     const inputLimit = document.querySelector("#limit");
//     const inputPage = document.querySelector("#page");
//     init(inputLimit.value, inputPage.value);
// })

//Задание5
// async function init(limit, page) {
//     if (!limit) {
//         limit = 15;
//       }
    
//       if (!page) {
//         page = 1;
//       }
//     const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=ASC`;
  
//     const res = await fetch(url, {
//       headers: {
//         "x-api-key": "a6d4c1eb-17c5-483c-8a1c-ecae17d6f463"
//       }
//     });
  
//     const cats = await res.json();
//     pageCount++;
//     console.log(cats);
//     console.log(pageCount);
//     return cats;
// }

// const buttonLoading = document.querySelector("#loading");
// const buttonMore = document.querySelector("#more");
// let pageCount = 1

// buttonLoading.addEventListener('click', function() {
//     const inputLimit = document.querySelector("#limit");
//     const inputPage = document.querySelector("#page");
//     init(inputLimit.value, inputPage.value);
// })

// buttonMore.addEventListener("click", function () {
//     init(15, pageCount);
// });

//Задание6
async function init(limit, page) {
    if (!limit) {
        limit = 15;
      }
    
      if (!page) {
        page = 1;
      }
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=ASC`;
  
    const res = await fetch(url, {
      headers: {
        "x-api-key": "a6d4c1eb-17c5-483c-8a1c-ecae17d6f463"
      }
    });
  
    const cats = await res.json();
    pageCount++;
    console.log(pageCount);
    return cats;
  }

const buttonLoading = document.querySelector("#loading");
const buttonMore = document.querySelector("#more");
let pageCount = 1
let cats
let newCats

(async function () {
    cats = await init(15, pageCount);
    console.log(cats);
  })();

buttonLoading.addEventListener('click', function() {
    const inputLimit = document.querySelector("#limit");
    const inputPage = document.querySelector("#page");
    init(inputLimit.value, inputPage.value);
})

buttonMore.addEventListener("click", async function () {
    newCats = await init(15, pageCount);
    cats = cats.concat(newCats)
    console.log(cats)
  });

