var codersMates1 = {
                        
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/boy1.jpg",	
			likes: 1,    // numeric property used to store likes
			};

var codersMates2 = {	
			name: 'Jane',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/girl1.jpg",	
			likes: 2,   
			};

var codersMates3 = {
			name: 'Max',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/boy2.jpg",	
			likes: 4,   
			};

var codersMates4 = {
			name: 'Maxina',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/girl2.jpg",	
			likes: 3,  
			};

var codersMates = [
		codersMates1, 
		codersMates2, 	
		codersMates3, 
		codersMates4, 		
	];

	document.getElementById("image-mate1").innerHTML = '<img src="' +codersMates1.myPhoto  + '">';
	document.getElementById("name-mate1").innerHTML = "Name: " + codersMates1.name;
	document.getElementById("surname-mate1").innerHTML = "Surname: " + codersMates1.surname;
	document.getElementById("age-mate1").innerHTML = "Age: " + codersMates1.age;

	document.getElementById("image-mate2").innerHTML = '<img src="' +codersMates2.myPhoto  + '">';
	document.getElementById("name-mate2").innerHTML = "Name: " + codersMates2.name;
	document.getElementById("surname-mate2").innerHTML = "Surname: " + codersMates2.surname;
	document.getElementById("age-mate2").innerHTML = "Age: " + codersMates2.age;

	document.getElementById("image-mate3").innerHTML = '<img src="' +codersMates3.myPhoto  + '">';
	document.getElementById("name-mate3").innerHTML = "Name: " + codersMates3.name;
	document.getElementById("surname-mate3").innerHTML = "Surname: " + codersMates3.surname;
	document.getElementById("age-mate3").innerHTML = "Age: " + codersMates3.age;

	document.getElementById("image-mate4").innerHTML = '<img src="' +codersMates4.myPhoto  + '">';
	document.getElementById("name-mate4").innerHTML = "Name: " + codersMates4.name;
	document.getElementById("surname-mate4").innerHTML = "Surname: " + codersMates4.surname;
	document.getElementById("age-mate4").innerHTML = "Age: " + codersMates4.age;