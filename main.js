var images= [
  "https://i.postimg.cc/MGn9GJXw/family.jpg",
"https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
 "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
 "https://i.postimg.cc/5ymDKL83/bro.jpg",
 "https://i.postimg.cc/JnL6wtrd/sister.jpg",
  "https://i.postimg.cc/bw5W5zSK/mother.jpg"
  ];
  //var i=0;
 // function nextslide()
  //{if(i==6) 
  ///{i=0}
  //document.getElementById("album").src = images[i];
  //i++;}
  var names= [
    "Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"
    ];
    var i = 0;
     function nextslide()
      { i++;
         var numbers_of_family_member_in_array = 5 
         if
         (i > numbers_of_family_member_in_array ) { i = 0;
         } var updatedImage = images[i];
          var updatedName = names[i];
           document.getElementById("album").src = updatedImage;
           document.getElementById("family").innerHTML = updatedName;
   }