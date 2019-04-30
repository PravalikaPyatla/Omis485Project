function updateRows()
{
	var tutorList = data;
console.log(tutorList);

	courseName = document.getElementById("courseInput");
	tableBody = document.getElementById("resultRows");
	dateentered = document.getElementById("datepicker");
	console.log(courseName);
	console.log(dateentered);
	for(var i=0; i<tutorList.length; i++){
		console.log("course in array: ",tutorList[i].course);
		if((tutorList[i].course).toLowerCase() == (courseName.value).toLowerCase())
		{
			console.log("match");
			row = document.createElement("tr");
			nameValue = document.createElement("td");
			contactValue = document.createElement("td");
			addressValue = document.createElement("a");
			priceValue = document.createElement("td");
			ratingValue = document.createElement("td");
			availableValue = document.createElement("td");
			var link = document.createElement("a");
			dirValue = document.createElement('input');
			nameValue.innerHTML = tutorList[i].name;
			contactValue.innerHTML = tutorList[i].contact;
			//addressValue.innerHTML = tutorList[i].address;
			priceValue.innerHTML = tutorList[i].price;
			ratingValue.innerHTML = tutorList[i].rating;
			
			
			
			addressValue.setAttribute("href", "https://www.google.com/maps")
			addressValue.className = "someCSSclass";

			var linkText = document.createTextNode(tutorList[i].address);
			addressValue.appendChild(linkText);
			
			 // Append Submit Button
			dirValue.setAttribute("type", "submit");
			dirValue.setAttribute("value", "Schedule");
			dirValue.setAttribute("action", "");
			
			dirValue.id = "dirid";
			dirValue.onclick = myFunction;
			
			
			
			row.appendChild(nameValue);
			row.appendChild(contactValue);
			row.appendChild(addressValue);
			row.appendChild(priceValue);
			row.appendChild(ratingValue);
			row.appendChild(availableValue);
			
			row.appendChild(dirValue);
			 
			tableBody.appendChild(row);
			
		
			var datevalue1 = tutorList[i].datefrom;
			var datevalue2 = tutorList[i].dateto;
			var dateen = dateentered.value;
			var den = dateen.split("/");
			console.log(den[1]);
			var d1 = datevalue1.split("/");
			
			console.log(d1);
			var d2 = datevalue2.split("/");
			console.log(d2);
			if(den[1]>d1[1] && den[1]<d2[1])
				availableValue.innerHTML = " <span style='color:#008000'> available </span> ";
			else
				availableValue.innerHTML = " <span style='color:#FF0000'> unavailable </span> ";
			
			document.getElementById("dirid").onclick = function() {myFunction()};
			var top = window.screen.height - 600;
    top = top > 0 ? top/2 : 0;
            
var left = window.screen.width - 700;
    left = left > 0 ? left/2 : 0;


    
			function myFunction() 
			{
            myWindow = window.open("index1.html", "myWindow", "width=800,height=600" + ",top=" + top + ",left=" + left);   // Opens a new window
			}
		}
	}
}