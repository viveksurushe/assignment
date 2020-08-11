# assignment

How to run
```
step 1: Clone repo to you system 
step 2: Go to repo 
step 3: npm i
step 4: npm start
```


Method - GET

URL - http://localhost:4000/api/v1/assignment/check-current-date 

Response (if date is prime) -
 ```
 {
	"error": false,
	"message": "Success",
	"status": 200,
	"data": {
		"date": "Tuesday, August 11, 2020",
		"message": "11 is prime",
		"jsonData": {
			"city_name": "London",
			"lat": 51.507351,
			"lon": -0.127758,
			"main": {
				"temp": 289.89,
				"temp_min": 288.468,
				"temp_max": 291.15,
				"feels_like": 287.15,
				"pressure": 1004,
				"humidity": 77
			},
			"wind": {
				"speed": 5.1,
				"deg": 230
			},
			"clouds": {
				"all": 90
			},
			"weather": [{
				"id": 804,
				"main": "Clouds",
				"description": "overcast clouds",
				"icon": "04n"
			}],
			"dt": 1593561600,
			"dt_iso": "2020-07-01 00:00:00 +0000 UTC",
			"timezone": 3600
		}
	}
}
```

Response (if date is not prime) -
 ```
{
	"error": false,
	"message": "Success",
	"status": 200,
	"data": {
		"message": "Date is not prime so no date"
	}
}
```
