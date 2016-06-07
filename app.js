function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
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
  $("#trackSelect").click(function(){
    
  })
})

$(document).ready(function(){
  $("#adele").click(function(event){
    event.preventDefault()
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
      var make = document.getElementById("albumInfo")
      var adele = document.createElement("p")
      adele.innerHTML = data.results[4].artist + ": " + data.results[4].title
      $(make).append(adele)
    })
  })
  $("#pinkFloyd").click(function(event){
    event.preventDefault()
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
      var make = document.getElementById("albumInfo")
      var pinkFloyd = document.createElement("p")
      pinkFloyd.innerHTML = data.results[2].artist + ": " + data.results[2].title
      $(make).append(pinkFloyd)
    })
  })
  $("#police").click(function(event){
    event.preventDefault()
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
      var make = document.getElementById("albumInfo")
      var police = document.createElement("p")
      police.innerHTML = data.results[0].artist + ": " + data.results[0].title
      $(make).append(police)
    })
  })
  $("#blackUhuru").click(function(event){
    event.preventDefault()
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
      var make = document.getElementById("albumInfo")
      var blackUhuru = document.createElement("p")
      blackUhuru.innerHTML = data.results[1].artist + ": " + data.results[1].title
      $(make).append(blackUhuru)
    })
  })
  $("#michael").click(function(event){
    event.preventDefault()
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
      var make = document.getElementById("albumInfo")
      var michael = document.createElement("p")
      michael.innerHTML = data.results[3].artist + ": " + data.results[3].title
      $(make).append(michael)
    })
  })
  $("#clearTracks").click(function(event){
    event.preventDefault()
    var make = document.getElementById("albumInfo")
    make.innerHTML = " "
  })
  $("#submitBin").click(function(event){
    event.preventDefault(
    $.post("https://lit-fortress-6467.herokuapp.com/post", function(data, status){
      console.log("Data: " + data + "\nStatus: " + status);
    })
    )
  })
})
