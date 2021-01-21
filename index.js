// ui related code

var isNav = false;
function navToggle() {
    if (!isNav) {
        document.querySelector('.burger-nav').style.display = "flex";
        isNav = true;
    }
    else {
        document.querySelector('.burger-nav').style.display = "none"
        isNav = false
    }
}


// dsiplaying nested objects

var json = [{
    "name": "x1",
    "value": "100",
    "levels": [
        {
            "name": "x11",
            "value": "101",
            "levels": [
                {
                    "name": "x12",
                    "value": "1011"
                }
            ]
        }
    ]
},
{
    "name": "x2",
    "value": "100",
    "levels": [
        {
            "name": "x21",
            "value": "201",
            "levels": [
                {
                    "name": "x22",
                    "value": "2011"
                },
                {
                    "name": "x23",
                    "value": "20110"
                }
            ]
        },
        {
            "name": "x32",
            "value": "202"

        }
    ]
}
]



json.map(item => iteration(item));
function iteration(data,obj={}){    // prints required onjs in console
    var obj1={
        ...obj,
        [data.name] : [data.value]
    }

    const keys = Object.keys(obj);

    keys.map(key=>obj1[key]=[...obj1[key],data.value])


    if (data['levels']) {
        debugger
        data['levels'].map(item=>iteration(item,obj1))
    }else{
        console.log(obj1)
    }
}


// {
//     “x1”: [100, 101, 1011],
//     “x11”: [101, 1011],
//     “x12”: [1011]
// }
// {
//     “X2”: [100, 201, 2011, 20110, 202],
//     “X21”: [201, 2011, 20110],
//     “X22”: [2011],
//     “X23”: [20110],
//     “X32”: [202]
// }