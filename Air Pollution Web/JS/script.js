let country_picker = document.getElementById('country_picker');
let state_picker = document.getElementById('state_picker');
let city_picker = document.getElementById('city_picker');
let pollution_level = document.getElementById('pollution_level');

let myKey = '07cbe16e-1015-4f8e-9d8b-59449165a420'
function get_data(dataKey, country = null, state = null, city = null){
    return new Promise((resolve, reject)=>{
        let myData = [];
        let requestURL
        if (country === null && state === null && city === null){// get countries
            requestURL = `http://api.airvisual.com/v2/countries?key=${dataKey}`;
        }
        else if (country !== null && state === null && city === null){// get states
            requestURL = `http://api.airvisual.com/v2/states?country=${country}&key=${dataKey}`;
        }
        else if(country !== null && state !== null && city === null){// get cities
            requestURL = `http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${dataKey}`;
        }
        else if (country !== null && state !== null && city !== null){
            requestURL = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${dataKey}`;
        }
            let request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                let data = request.response;
                if (country !== null && state !== null && city !== null){
                    resolve(data.data.current.pollution);
                }
                else{
                    for (let i = 0; i < data.data.length; i++) {
                        if (country === null && state === null && city === null){// get countries
                            myData.push(data.data[i].country);
                        }
                        else if (country !== null && state === null && city === null){// get states
                            myData.push(data.data[i].state);
                        }
                        else if(country !== null && state !== null && city === null){// get cities
                            myData.push(data.data[i].city);
                        }
                    }
                    resolve(myData);
                }

            }
    })
}
//old version of get_data()
// function get_data(dataKey, country = null, state = null, city = null){
//     return new Promise((resolve, reject)=>{
//         let myData;
//         if (country === null && state === null && city === null){// get countries
//             myData = [];
//             let requestURL = `http://api.airvisual.com/v2/countries?key=${dataKey}`;
//             let request = new XMLHttpRequest();
//             request.open('GET', requestURL);
//             request.responseType = 'json';
//             request.send();
//             request.onload = function () {
//                 let data = request.response;
//                 for (let i = 0; i < data.data.length; i++) {
//                     myData.push(data.data[i].country);
//                 }
//                 resolve(myData);
//             }
//         }
//         else if (country !== null && state === null && city === null){// get states
//             myData = [];
//             let requestURL = `http://api.airvisual.com/v2/states?country=${country}&key=${dataKey}`;
//             let request4 = new XMLHttpRequest();
//             request4.open('GET', requestURL);
//             request4.responseType = 'json';
//             request4.send();
//             request4.onload = function () {
//                 let data = request4.response;
//                 for (let i = 0; i < data.data.length; i++) {
//                     myData.push(data.data[i].state);
//                 }
//                 resolve(myData);
//             }
//         }
//         else if(country !== null && state !== null && city === null){// get cities
//             myData = [];
//             let requestURL = `http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${dataKey}`;
//             let request2 = new XMLHttpRequest();
//             request2.open('GET', requestURL);
//             request2.responseType = 'json';
//             request2.send();
//             request2.onload = function () {
//                 let data = request2.response;
//                 for (let i = 0; i < data.data.length; i++) {
//                     myData.push(data.data[i].city);
//                 }
//                 resolve(myData);
//             }
//         }
//         else if (country !== null && state !== null && city !== null){
//             let requestURL = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${myKey}`;
//             let request2 = new XMLHttpRequest();
//             request2.open('GET', requestURL);
//             request2.responseType = 'json';
//             request2.send();
//             request2.onload = function () {
//                 let data = request2.response;
//                 resolve(data.data.current.pollution);//
//             }
//         }
//     })
// }

let cn;// list of countries
let st;// list of states
let ct;// list of cities
let info;// info about chosen city

get_data(myKey).then(value => {
    cn = value;
}).then(()=>{
    for (let i = 0; i < cn.length; i++){
        let o = document.createElement('option');
        o.textContent = cn[i];
        country_picker.appendChild(o);
        if (cn[i] === 'USA'){
            country_picker.options[i].selected = 'selected';
        }
    }
})

function renew_pollution(){
    get_data(myKey,
        country_picker.options[country_picker.options.selectedIndex].textContent,
        state_picker.options[state_picker.options.selectedIndex].textContent,
        city_picker.options[city_picker.options.selectedIndex].textContent).then(value => {
            console.log(value);
        pollution_level.appendChild(document.createElement('br'));

        let ts = document.createElement('span');
        ts.textContent = ' ts: ' +  value.ts + " " + '; ';
        ts.style.color = 'white';
        pollution_level.appendChild(ts);
        pollution_level.appendChild(document.createElement('br'));

        let aqius = document.createElement('span');
        aqius.textContent = ' ts: ' +  value.aqius + " " + '; ';
        aqius.style.color = 'white';
        pollution_level.appendChild(aqius);
        pollution_level.appendChild(document.createElement('br'));

        let mainus = document.createElement('span');
        mainus.textContent = ' ts: ' +  value.mainus + " " + '; ';
        mainus.style.color = 'white';
        pollution_level.appendChild(mainus);
        pollution_level.appendChild(document.createElement('br'));

        let aqicn = document.createElement('span');
        aqicn.textContent = ' ts: ' +  value.aqicn + " " + '; ';
        aqicn.style.color = 'white';
        pollution_level.appendChild(aqicn);
        pollution_level.appendChild(document.createElement('br'));

        let maincn = document.createElement('span');
        maincn.textContent = ' ts: ' +  value.maincn + " " + '; ';
        maincn.style.color = 'white';
        pollution_level.appendChild(maincn);
        pollution_level.appendChild(document.createElement('br'));
    })
}


function renew_city(){
    get_data(myKey,
        country_picker.options[country_picker.options.selectedIndex].textContent,
        state_picker.options[state_picker.options.selectedIndex].textContent).then(value => {
        console.log(value);
        ct = value;
    }).then(()=>{
        for (let i = city_picker.options.length - 1; i >= 0; i--){
            city_picker.remove(i);
        }
        for (let i = 0; i < ct.length; i++){
            let o = document.createElement('option');
            o.textContent = ct[i];
            city_picker.appendChild(o);
        }
    }).then(()=>{
        renew_pollution();
    })
}

function renew_state(){
    get_data(myKey, country_picker.options[country_picker.options.selectedIndex].textContent).then(value => {
        st = value;
    }).then(()=>{
        for (let i = state_picker.options.length - 1; i >= 0; i--){
            state_picker.remove(i);
        }
        for (let i = 0; i < st.length; i++){
            let o = document.createElement('option');
            o.textContent = st[i];
            state_picker.appendChild(o);
        }
    }).then(()=>{
        renew_city();
    })
}


country_picker.addEventListener('input', renew_state);

state_picker.addEventListener('input', renew_city);


city_picker.addEventListener('input', renew_pollution);





