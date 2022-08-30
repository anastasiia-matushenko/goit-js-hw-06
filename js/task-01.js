const categoriesList = [...document.getElementById('categories').children];
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(item => {
        const title = item.getElementsByTagName("h2")[0].textContent;
        const amount = item.getElementsByTagName("ul")[0].children.length;
        console.log('Category:', title);
        console.log('Elements:', amount);   
    }
);
