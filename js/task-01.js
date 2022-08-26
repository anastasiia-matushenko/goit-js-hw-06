const categoriesList = [...document.getElementById('categories').children];
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(item => {
        const elem = [...item.children];
        const title = elem.find(el => el.tagName === 'H2').textContent;
        const amount = elem.find(el => el.tagName === 'UL').children.length;
        console.log('Category:', title);
        console.log('Elements:', amount);   
    }
);
