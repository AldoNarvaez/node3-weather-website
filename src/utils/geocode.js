const request=require("request");


const geocode=(address,callback)=>{
	const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiYWxkb2NhbyIsImEiOiJja3VxN295b3Mwa3UwMzBzNzRyM2c5MG9jIn0.obsji6VED13_8i4BWjSfGA&limit=1"
	request({url, json:true},(error,{body})=>{
		//console.log(body.features)
		if (error) {
			callback("Unable to connect to lacation services",undefined);
		}else if (body.features.length==0){
			callback("Unable to find location.Try another search",undefined);
		}else{
			callback(undefined,{
				latitude:body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			})

		}
	})
}

module.exports=geocode;