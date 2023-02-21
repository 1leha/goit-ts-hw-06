const refs = {
  cathegoryList: document.getElementById("categories"),
};

const parceCathegory = (cathegoryies) => {
  console.log(`Number of categories: ${cathegoryies.children.length}`);

  [...cathegoryies.children].forEach((el) => {
    // console.log(el);
    const cathegoryName = el.querySelector("h2");
    const cathegoryElements = el.querySelectorAll("li");

    console.log(`Category: ${cathegoryName.textContent}`);
    console.log(`Elements: ${cathegoryElements.length}`);
  });
};

parceCathegory(refs.cathegoryList);
