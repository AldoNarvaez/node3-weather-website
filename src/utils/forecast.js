const request=require("request")

const forecast=(latitude,longitude,callback)=>{
 	const url="http://api.weatherstack.com/current?access_key=958bfd46c9dca2603d7347bd90d78229&query="+latitude+","+longitude;
 	request({url,json:true},(error,{body})=>{
 		//console.log(response.body)
 		if(error){
 			callback("Unable to connect to weather service",undefined)
 		}else if(body.error){
 			callback("Unable to find location",undefined)

 		}else{
 			callback(undefined,body.current.weather_descriptions[0]+". it is currently "+ body.current.temperature+" degrees out. There is an apparent temperature of "+ body.current.feelslike+" degrees out. With a humidity of "+body.current.humidity+"%")
 		}
 	})
}

module.exports=forecast