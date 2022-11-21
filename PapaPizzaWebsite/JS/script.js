let sum = 0.00;

let bag = [];

let Menu =[
    {
        'name': 'Double Salami',
        'image': 'https://cdn.shopify.com/s/files/1/0261/0701/9363/articles/salami-pizza_2000_x_2000_1000x1000.jpg?v=1601054958',
        'description': 'Double Salami, Double Dutch cheese, parmesan, tomato sauce - 900g',
        'price': 4.00,
        'type': 'pizza'
    },
    {
        'name': 'Salami',
        'image': 'http://restaurantvivendi.ro/wp-content/uploads/2020/11/pizza-happy-sibiu-pizza-salami.jpg',
        'description': 'Salami, Dutch cheese, parmesan - 500g',
        'price': 3.00,
        'type': 'pizza'
    },
    {
        'name': 'Tuna',
        'image': 'https://skinnyspatula.com/wp-content/uploads/2019/12/Tuna-Pizza-with-Red-Onion-and-Black-Olives4-735x735.jpg',
        'description': 'Tuna, Dutch cheese, green - 550g',
        'price': 3.00,
        'type': 'pizza'
    },
    {
        'name': 'Capricciosa',
        'image': 'http://cdn.shopify.com/s/files/1/0571/4136/2868/articles/four_gaz_pizza_giuliz_recette_capricciosa_1200x1200.jpg?v=1640583517',
        'description': 'Ham, Dutch cheese, green, mushrooms - 600g',
        'price': 3.00,
        'type': 'pizza'
    },
    {
        'name': 'Hunter sausages',
        'image': 'https://images.squarespace-cdn.com/content/v1/5fc003922e537a05ef0420df/1616432905765-0ALNTSA90GR56KMJQU38/loaded+pizza+3.jpg',
        'description': 'Hunters sausages, Dutch cheese, mushrooms, parmesan - 550g',
        'price': 4.00,
        'type': 'pizza'
    },
    {
        'name': 'Quattro formaggi',
        'image': 'https://www.insidetherustickitchen.com/wp-content/uploads/2020/07/Quattro-formaggi-pizza-square-Inside-the-rustic-kitchen.jpg',
        'description': 'gorgonzola, fontina, Parmigiano-Reggiano - 550g',
        'price': 3.00,
        'type': 'pizza'
    },
    {
        'name': 'Vegan',
        'image': 'https://hips.hearstapps.com/hmg-prod/images/210302-vegan-spiral-cover-cauliflower-pizza-086-eb-1626711437.jpg?crop=1.00xw:0.667xh;0.00170xw,0.240xh&resize=640:*',
        'description': 'Tofu cheese, egg free bread, green, mushrooms - 600g',
        'price': 3.00,
        'type': 'pizza'
    },

    {
        'name': 'Aperol Spritz',
        'image': 'https://cookieandkate.com/images/2019/05/classic-aperol-spritz-recipe-4.jpg',
        'description': 'Original Aperol Spritz with ice',
        'price': 10.00,
        'type': 'drink',
    },
    {
        'name': 'Red wine',
        'image': 'https://cdnimg.webstaurantstore.com/images/products/large/502907/1902718.jpg',
        'description': 'Red wine made by Papa Pizza winery',
        'price': 13.00,
        'type': 'drink',
    },
    {
        'name': 'Martini',
        'image': 'https://i0.wp.com/www.splashoftaste.com/wp-content/uploads/2022/05/dirty-martini-featured.jpg',
        'description': 'Classic Martini with ice',
        'price': 11.00,
        'type': 'drink',
    },
    {
        'name': 'Coca Cola',
        'image': 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29rZSUyMGJvdHRsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        'description': 'Classic Coca Cola glass bottle',
        'price': 3.00,
        'type': 'drink',
    },
    {
        'name': 'Fanta',
        'image': 'https://st2.depositphotos.com/1050070/12363/i/600/depositphotos_123632376-stock-photo-glass-bottle-of-fanta-orange.jpg',
        'description': 'Classic orange Fanta glass bottle',
        'price': 3.00,
        'type': 'drink',
    },
    {
        'name': 'Sprite',
        'image': 'https://www.kindpng.com/picc/m/127-1277894_sprite-png-bottle-image-sprite-bottle-png-transparent.png',
        'description': 'Classic Sprite bottle',
        'price': 2.50,
        'type': 'drink',
    },
];


let money = document.getElementById('money');

function GetSum()
{
    sum = 0;
    for(let i = 0; i < Menu.length; i++)
    {
        for(let j = 0; j < bag.length; j++)
        {
            if (Menu[i].name === bag[j].name)
            {
                if (bag[j].name !== 'Double Salami')
                    sum += Menu[i].price * bag[j].count_;
                else
                {
                    if (bag[j].count_ % 2 === 0)
                    {
                        sum += bag[j].count_ / 2 * 5;
                    }
                    else
                    {
                        sum += (bag[j].count_ - 1) / 2 * 5 + Menu[i].price;
                    }
                }
            }
        }
    }
    money.textContent = sum.toFixed(2) ;
}

let YourBag = document.getElementById('YourBag');

let special_deal_salami = document.getElementById('special_deal_salami');
let hover_square = document.getElementById('hover_square');
special_deal_salami.addEventListener('mouseenter', ()=>{
    hover_square.style.animation = 'change_opacity 0.5s both';
});
special_deal_salami.addEventListener('mouseleave', ()=>{
    hover_square.style.animation = 'change_opacity_back 0.5s both';
});

let drink_assort = document.getElementById('drink_assort');

for(let i = 0; i < Menu.length; i++){
    if(Menu[i].type === 'drink')
    {
        drink_assort.innerHTML += `
                <div style="display: inline-block; margin-bottom: 20px;">
                    <img src="${Menu[i].image}" style="width: 300px; height: 400px;">
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 30px; font-family: 'Century Gothic'">${Menu[i].name}</div>
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                    ${Menu[i].description}<br>
                    <span style="color: black; font-size: 20px;">${(Menu[i].price).toFixed(2)}$</span></div>
                    <div class="add_to_order">ADD TO ORDER</div>
                </div>`;
    }

}

let add_to_order = document.getElementsByClassName('add_to_order');


let add_spec_salami = document.getElementById('add_spec_salami');

add_spec_salami.addEventListener('click', (e)=>{
        let found = false;
        for (let i = 0; i < bag.length; i++)
        {
            if (bag[i].name === 'Double Salami')
            {
                found = true;
                bag[i].count_++;
            }
        }
        if (!found)
        {
            bag.push({'name': 'Double Salami', 'count_': 1});
        }
        GetSum();
    })

let OurMenuPizzas = document.getElementById('OurMenuPizzas');
let OurMenuDrinks = document.getElementById('OurMenuDrinks');

for (let i = 0; i < Menu.length; i++)
{
    if (Menu[i].type === 'pizza')
        OurMenuPizzas.innerHTML += `
                <div style="display: inline-block; margin-left: 80px; margin-bottom: 20px;">
                    <img src="${Menu[i].image}" style="width: 400px; height: 400px;">
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 30px; font-family: 'Century Gothic'">${Menu[i].name}</div>
                    <div style="height: 100px; width: 400px; margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                    ${Menu[i].description}<br>
                    <span style="color: black; font-size: 20px; overflow: hidden">${(Menu[i].price).toFixed(2)}$</span></div>
                    <div class="add_to_order">ADD TO ORDER</div>
                </div>`;
}

for(let i = 0; i < Menu.length; i++){
    if(Menu[i].type === 'drink')
    {
        OurMenuDrinks.innerHTML += `
                <div style="display: inline-block; margin-left: 20px; margin-bottom: 20px;">
                    <img src="${Menu[i].image}" style="width: 270px; height: 400px;">
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 30px; font-family: 'Century Gothic'">${Menu[i].name}</div>
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                    ${Menu[i].description}<br>
                    <span style="color: black; font-size: 20px;">${(Menu[i].price).toFixed(2)}$</span></div>
                    <div class="add_to_order">ADD TO ORDER</div>
                </div>`;
    }

}

for(let i = 0; i < add_to_order.length; i++)
{
    add_to_order[i].addEventListener('click', (e)=>{
        let found = false;
        for (let j = 0; j < bag.length; j++)
        {
            if (bag[j].name === add_to_order[i].parentNode.children[1].textContent)
            {
                found = true;
                bag[j].count_++;
            }

        }
        if (!found)
        {
            bag.push({
                'name': add_to_order[i].parentNode.children[1].textContent,
                'count_': 1
            });
        }

        GetSum();
    })
}

let menu = document.getElementById('menu');

menu.addEventListener('click', (e)=>{
    OurMenuPizzas.style.display = 'block';
    OurMenuDrinks.style.display = 'block';
    special_deal_salami.style.display = 'none';
    drink_assort.style.display = 'none';
    YourBag.style.display = 'none';
})

let logo_box = document.getElementById('logo_box');
logo_box.addEventListener('click', (e)=>{
    OurMenuPizzas.style.display = 'none';
    OurMenuDrinks.style.display = 'none';
    special_deal_salami.style.display = 'inline-block';
    drink_assort.style.display = 'inline-block';
    YourBag.style.display = 'none';
})







function OpenBag()
{
    YourBag.innerHTML = '<h1 style="margin-left: 42%; font-family: sans-serif; font-weight: bold; font-size: 50px;">BAG</h1>';
    OurMenuPizzas.style.display = 'none';
    OurMenuDrinks.style.display = 'none';
    special_deal_salami.style.display = 'none';
    drink_assort.style.display = 'none';
    for (let i = 0; i < Menu.length; i++)
{
    if(Menu[i].type === 'drink')
    {
        YourBag.style.display = 'block';
        for (let j = 0; j < bag.length; j++)
        {
            if (bag[j].name === Menu[i].name)
            {
                YourBag.innerHTML += `
                <div style="display: inline-block; margin-left: 20px; margin-bottom: 20px;">
                    <img src="${Menu[i].image}" style="width: 270px; height: 400px;">
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 30px; font-family: 'Century Gothic'">${Menu[i].name}</div>
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                    ${Menu[i].description}<br>
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                    ${bag[j].count_}<br>
                    <span style="color: black; font-size: 20px;">${(Menu[i].price).toFixed(2)}$</span></div>
                    <div class="delete_item">DELETE</div>
                </div>`;
            }
        }
    }
    if(Menu[i].type === 'pizza')
    {
        YourBag.style.display = 'block';
        for (let j = 0; j < bag.length; j++)
        {
            if (bag[j].name === Menu[i].name)
            {
                if(bag[j].name !== 'Double Salami')
                {YourBag.innerHTML += `
                <div style="display: inline-block; margin-left: 20px; margin-bottom: 20px;">
                    <img src="${Menu[i].image}" style="width: 400px; height: 400px;">
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 30px; font-family: 'Century Gothic'">${Menu[i].name}</div>
                    <div style="width: 400px; margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                    ${Menu[i].description}<br>
                    <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                    Count: ${bag[j].count_}<br>
                    <span style="color: black; font-size: 20px;">${(Menu[i].price * bag[j].count_).toFixed(2)}$</span></div>
                    <div class="delete_item">DELETE</div>
                </div>`;}
                else{
                    if (bag[j].count_ % 2 === 0)
                    {
                        YourBag.innerHTML += `
                        <div style="display: inline-block; margin-left: 20px; margin-bottom: 20px;">
                            <img src="${Menu[i].image}" style="width: 400px; height: 400px;">
                            <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 30px; font-family: 'Century Gothic'">${Menu[i].name}</div>
                            <div style="width: 400px; margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                            ${Menu[i].description}<br>
                            <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                            Count: ${bag[j].count_}<br>
                            <span style="color: black; font-size: 20px;">${(bag[j].count_ / 2 * 5).toFixed(2)}$</span></div>
                            <div class="delete_item">DELETE</div>
                        </div>`;
                    }
                    else
                    {
                        YourBag.innerHTML += `
                        <div style="display: inline-block; margin-left: 20px; margin-bottom: 20px;">
                            <img src="${Menu[i].image}" style="width: 400px; height: 400px;">
                            <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 30px; font-family: 'Century Gothic'">${Menu[i].name}</div>
                            <div style="width: 400px; margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                            ${Menu[i].description}<br>
                            <div style="margin-bottom: 10px; color: black; font-weight: bold; font-size: 15px; font-family: 'Century Gothic'">
                            Count: ${bag[j].count_}<br>
                            <span style="color: black; font-size: 20px;">${((bag[j].count_ - 1) / 2 * 5 + Menu[i].price).toFixed(2)}$</span></div>
                            <div class="delete_item">DELETE</div>
                        </div>`;
                    }
                }
            }
        }
    }
}
    let delete_item = document.getElementsByClassName('delete_item');
    let delete_list = [];
    for (let i = 0; i < delete_item.length; i++)
    {
        delete_item[i].addEventListener('click', (e)=>{
            for (let j = 0; j < bag.length; j++){
                if (bag[j].name === delete_item[i].parentNode.parentNode.children[1].textContent){
                    if (bag[j].count_ === 1)
                    {
                        delete_list.push(delete_item[i].parentNode.parentNode.children[1].textContent);
                    }
                    else
                        bag[j].count_--;
                }
            }
            for (let j = 0; j < delete_list.length; j++){
                for (let j2 = 0; j2 < bag.length; j2++)
                {
                    if (delete_list[j] === bag[j2].name)
                    {
                        bag.splice(j2, 1);
                        break;
                    }
                }
            }
            OpenBag();
            GetSum();
        })
    }
}
let start_order = document.getElementById('start_order');
start_order.addEventListener('click', OpenBag);

let log_in_box = document.getElementById('logIn_box');
let log_in_field = document.getElementById('log_in_field');
log_in_box.addEventListener('click', ()=>{
    if (log_in_field.style.display === 'none')
    {
        log_in_field.style.display = 'block';
    }
    else {
        log_in_field.style.display = 'none';

    }
})








