function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
  $("#trackSelect").click(function(event){
    event.preventDefault()
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
      console.log(data);
      var photo1 = data.results[getRandomIntInclusive(0,4)].cover_art;
      var photo2 = data.results[getRandomIntInclusive(0,4)].cover_art;
      var photo3 = data.results[getRandomIntInclusive(0,4)].cover_art;

      var album1 = document.getElementById("album1");
      var album2 = document.getElementById("album2");
      var album3 = document.getElementById("album3");
      var img1 = document.createElement("img");
      var img2 = document.createElement("img");
      var img3 = document.createElement("img");


      img1.src = "images/"+photo1;
      img2.src = "images/"+photo2;
      img3.src = "images/"+photo3;

      $(album1).append(img1);
      $(album2).append(img2);
      $(album3).append(img3);
    })
  })
})
$(document).ready(function(){
  $("#adele").click(function(event){
    event.preventDefault()
    document.getElementById("albumInfo").innerHTML = "adele: 21"
  })
  $("#pinkFloyd").click(function(event){
    event.preventDefault()
    document.getElementById("albumInfo").innerHTML = "pink floyd: the division bell"
  })
  $("#police").click(function(event){
    event.preventDefault()
    document.getElementById("albumInfo").innerHTML = "the police: ghost in the machine"
  })
  $("#blackUhuru").click(function(event){
    event.preventDefault()
    document.getElementById("albumInfo").innerHTML = "black uhuru: red"
  })
  $("#michael").click(function(event){
    event.preventDefault()
    document.getElementById("albumInfo").innerHTML = "michael jackson: thriller"
  })
})
