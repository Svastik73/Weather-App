let CLIMATE={  // js object
    "apiKey":"5416e8b9403291f6a9c83de11f992c00",  //sign up and get keys !
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city +"&appid=5416e8b9403291f6a9c83de11f992c00")
        .then((response) => response.json())  // convert response to json
        .then((data)=>this.displayWeather(data));    
    },
    displayWeather: function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];  // access first element from array in json
            const {temp,humidity}=data.main; // these are feild in json
            const {speed}=data.wind;
            const {country}=data.sys; // country
            const {lon,lat}=data.coord;
            console.log(name,icon,country);
            let te = parseFloat(temp)-273.0;
        if(country=='IL') document.querySelector(".Note").innerText="LONG LIVE ISRAEL! <3 ";
        else  document.querySelector(".Note").innerText="";
        document.querySelector(".city").innerText=  "Weather in "+ name +" ( "+country+" )"+" is " ;
        document.querySelector(".lati").innerText="Lattitude : "+lat+"  Longitude : "+lon;
        document.querySelector(".temp").innerText=String(te) + " C" ;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText=description ;
        document.querySelector(".humidity").innerText="Humidity is: "+ humidity+" %"+" ---- Wind Speed is: "+speed+ " km/hr" ;
        const hold=document.querySelector(".flag");
        const fulg=hold.querySelector("img");
      
        fulg.src='https://flagsapi.com/'+ country +'/shiny/64.png'; 
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
        
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    CLIMATE.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter") CLIMATE.search();
    //it will search when enetern key is pressed!
});