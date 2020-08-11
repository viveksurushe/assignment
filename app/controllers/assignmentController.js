const response = require('../../libs/responseLib')

// Function to check for prime number 
 let checkPrime = async (req, res) => { 

    let day, i, flag = true; 
    const date = new Date();
    day = date.getDate();
    for (i = 2; i <= day - 1; i++) {
        if (day % i == 0) { 
            flag = false; 
            break; 
        } 
    }
          
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let result = { 
        date: date.toLocaleDateString('inr', options),
        message: ''
    };
    // Check and display send response 
    if (flag == true) {
        result.message = `${day} is prime`;
        result.jsonData = {
            'city_name': 'London',
            'lat': 51.507351,
            'lon': -0.127758,
            'main': {
                'temp': 289.89,
                'temp_min': 288.468,
                'temp_max': 291.15,
                'feels_like': 287.15,
                'pressure': 1004,
                'humidity': 77
            },
            'wind': {
                'speed': 5.1,
                'deg': 230
            },
            'clouds': {
                'all': 90
            },
            'weather': [{
                'id': 804,
                'main': 'Clouds',
                'description': 'overcast clouds',
                'icon': '04n'
            }],
            'dt': 1593561600,
            'dt_iso': '2020-07-01 00:00:00 +0000 UTC',
            'timezone': 3600
        };
        const apiResponse = response.generate(false, 'Success', 200, result)
        res.status(200).json(apiResponse)
    } else {
        result.message = `Date is not prime so no date`;
        delete result.date;
        const apiResponse = response.generate(false, 'Success', 200, result)
        res.status(200).json(apiResponse)
    }
} 

module.exports = {
  checkPrime
}// end exports
