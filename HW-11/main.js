// #HmvAfRQM
// взяти https://dummyjson.com/docs/carts
// та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts').then(value => value.json()).then(value => {
    document.body.appendChild(document.createElement('h2'));
    document.body.lastChild.innerText = 'Task 1, CARTS:';
    const {carts} = value;
    const container = document.createElement('div');
    container.classList.add('container');
    for (let cart of carts) {
        const card = document.createElement('div');
        for (let field in cart) {
            if (field === 'products') {
                const products = cart[field];
                const product = document.createElement('div');
                product.classList.add('product');
                card.appendChild(product);
                const next = document.createElement('button');
                next.innerText = '▶'
                const previous = document.createElement('button');
                previous.innerText = '◀'
                const img = document.createElement('img');
                const title = document.createElement('h3');
                const info = document.createElement('div');
                const price = document.createElement('span');
                const quantity = document.createElement('span');
                const discount = document.createElement('span');
                info.append(price, quantity, discount);
                let currentItem = 0;
                previous.onclick = function () {
                    if (currentItem > 0) {
                        currentItem--;
                        showProduct(currentItem);
                    }
                }
                next.onclick = function () {
                    if (currentItem < products.length - 1) {
                        currentItem++;
                        showProduct(currentItem);
                    }
                }
                const dots = document.createElement('div');
                dots.classList.add('dots');
                for (let i = 0; i < products.length; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    dot.onclick = function () {
                        currentItem = i;
                        showProduct(currentItem);
                    }
                    dots.appendChild(dot);
                }
                product.append(title, info, previous, img, next, dots);

                showProduct(currentItem);

                function showProduct(n) {
                    img.src = products[n].thumbnail;
                    title.innerText = products[n].title;
                    price.innerText = `Price: ${products[n].price}`;
                    quantity.innerText = `Quantity: ${products[n].quantity}`;
                    discount.innerText = `Discount: ${products[n].discountPercentage}%`;
                    for (let i = 0; i < dots.children.length; i++) {
                        if (i === n)
                            dots.children[i].classList.add('active');
                        else
                            dots.children[i].classList.remove('active');
                    }
                    if (n === 0) previous.classList.remove('active'); else previous.classList.add('active');
                    if (n === products.length - 1) next.classList.remove('active'); else next.classList.add('active');
                }
            } else {
                const p = document.createElement('p');
                p.innerText = field + ': ' + cart[field];
                card.appendChild(p);
            }
        }
        container.appendChild(card);
    }
    document.body.appendChild(container);
});


// #whXxOBlYS0H
// взяти https://dummyjson.com/docs/recipes
// та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes').then(value => value.json()).then(value => {
    document.body.appendChild(document.createElement('h2'));
    document.body.lastChild.innerText = 'Task 2, RECIPES:';
    const {recipes} = value;
    const container = document.createElement('div');
    container.classList.add('container');

    for (let recipe of recipes) {
        const card = document.createElement('div');
        const name = document.createElement('h3');
        name.innerText = recipe.name;
        const rating = document.createElement('h3');
        rating.classList.add('rating');
        rating.innerText = `${recipe.rating} ★ `;
        const difficulty = document.createElement('div');
        difficulty.classList.add('difficulty');
        difficulty.innerText = recipe.difficulty;

        const header = document.createElement('div');
        header.classList.add('card-header');
        header.append(rating, name, difficulty);
        const img = document.createElement('img');
        img.src = recipe.image;
        const tabs = document.createElement('div');
        tabs.classList.add('tabs');
        const tabsContent = document.createElement('div');
        tabsContent.classList.add('tab-content');
        let currentTab;
        const ingredientsTab = document.createElement('p');
        ingredientsTab.innerText = 'Ingredients';
        ingredientsTab.classList.add('tab');

        ingredientsTab.onclick = showIngredients;

        function showIngredients() {
            if (currentTab !== 0) {
                currentTab = 0;
                tabsContent.innerText = '';
                setActiveTab(ingredientsTab);
                const ingredients = document.createElement('ul');
                for (let ingredient of recipe.ingredients) {
                    const li = document.createElement('li');
                    li.innerText = ingredient;
                    ingredients.appendChild(li);
                }
                tabsContent.appendChild(ingredients);
            }
        }

        function setActiveTab(activeTab) {
            const tabs = card.getElementsByClassName('tab');
            for (let tab of tabs) {
                if (tab.classList) tab.classList.remove('active');
            }
            activeTab.classList.add('active');
        }

        const stepsTab = document.createElement('p');
        stepsTab.innerText = 'Instructions';
        stepsTab.classList.add('tab');

        stepsTab.onclick = function () {
            if (currentTab !== 1) {
                setActiveTab(stepsTab);
                currentTab = 1;
                tabsContent.innerText = '';
                const instructionText = document.createElement('p');
                instructionText.classList.add('instruction');
                instructionText.classList.add('instruction-text');
                tabsContent.appendChild(instructionText);
                const next = document.createElement('button');
                next.innerText = '▶'
                const previous = document.createElement('button');
                previous.innerText = '◀'

                let currentStep = 0;
                const dots = document.createElement('div');
                dots.classList.add('dots');
                for (let i = 0; i < recipe.instructions.length; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    dot.onclick = function () {
                        currentStep = i;
                        showInstructions(currentStep);
                    }
                    dots.appendChild(dot);
                }
                next.onclick = function () {
                    if (currentStep < recipe.instructions.length - 1) {
                        currentStep++;
                        showInstructions(currentStep);
                    }
                }
                previous.onclick = function () {
                    if (currentStep > 0) {
                        currentStep--;
                        showInstructions(currentStep);
                    }
                }

                tabsContent.append(previous, next, dots);
                showInstructions(currentStep);

                function showInstructions(n) {
                    instructionText.innerText = (n + 1) + '. ' + recipe.instructions[n];
                    for (let i = 0; i < dots.children.length; i++) {
                        if (i === n)
                            dots.children[i].classList.add('active');
                        else
                            dots.children[i].classList.remove('active');
                    }
                    if (n === 0) previous.classList.remove('active'); else previous.classList.add('active');
                    if (n === recipe.instructions.length - 1) next.classList.remove('active'); else next.classList.add('active');
                }
            }
        }

        const tagsTab = document.createElement('p');
        tagsTab.innerText = 'Tags';
        tagsTab.classList.add('tab');

        tagsTab.onclick = function () {
            if (currentTab !== 2) {
                currentTab = 2;
                tabsContent.innerText = '';
                setActiveTab(tagsTab);
                const tags = document.createElement('ul');
                for (let tag of recipe.tags) {
                    const li = document.createElement('li');
                    li.innerText = tag;
                    tags.appendChild(li);
                }
                const mealTypes = document.createElement('ul');
                mealTypes.classList.add('meal-types');
                for (let type of recipe.mealType) {
                    const li = document.createElement('li');
                    li.innerText = type;
                    mealTypes.appendChild(li);
                }
                tabsContent.append(tags, mealTypes);
            }
        }

        tabs.append(ingredientsTab, stepsTab, tagsTab);
        showIngredients();

        card.append(header, img, tabs, tabsContent);
        container.appendChild(card);
    }

    document.body.appendChild(container);
});