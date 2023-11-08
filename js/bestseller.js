//key = LIsSvtHWYOUErdws7XnMxQDP5iAkZhkl
const container = document.getElementById("container");

async function bestSeller() {
    let res = await fetch("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=LIsSvtHWYOUErdws7XnMxQDP5iAkZhkl");
    let data = await res.json();


    for (let i = 0; i < 7; i++) {

        let title_div = document.createElement("div");
        let title_h3 = document.createElement("h3");
        let author_div = document.createElement("div");
        let author_p = document.createElement("p");
        let description_div = document.createElement("div");
        let description_p = document.createElement("p");

        title_div.setAttribute("class", "div-all");
        author_div.setAttribute("class", "div-all");
        description_div.setAttribute("class", "div-all");

        title_h3.textContent += data.results[i].title;
        author_p.textContent += `By ${data.results[i].author}`;
        description_p.textContent += data.results[i].description;

        container.appendChild(title_div);
        container.appendChild(author_div);
        container.appendChild(description_div);
        title_div.appendChild(title_h3);
        title_div.appendChild(author_div);
        title_div.appendChild(description_div)
        author_div.appendChild(author_p);
        description_div.appendChild(description_p);
    }


    console.log(data.results);

}

bestSeller()





