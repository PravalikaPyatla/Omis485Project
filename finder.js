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
			addressValue = document.createElement("td");
			priceValue = document.createElement("td");
			ratingValue = document.createElement("td");
			availableValue = document.createElement("td");
			dirValue = document.createElement("INPUT");
			nameValue.innerHTML = tutorList[i].name;
			contactValue.innerHTML = tutorList[i].contact;
			addressValue.innerHTML = tutorList[i].address;
			priceValue.innerHTML = tutorList[i].price;
			ratingValue.innerHTML = tutorList[i].rating;
			
			var createform = document.createElement('form'); // Create New Element Form
			createform.setAttribute("action", "http://maps.google.com/maps"); // Setting Action Attribute on Form
			createform.setAttribute("target", "_blank")
			createform.setAttribute("method", "get"); // Setting Method Attribute on Form
			submitelement = document.createElement('input'); // Append Submit Button
			submitelement.setAttribute("type", "submit");
			submitelement.setAttribute("value", "Get Directions");
			submitelement.setAttribute("action", "http://maps.google.com/maps");
			
			submitelement.id = "dirid";
			submitelement.onclick = myFunction;
			destelement = document.createElement('input');
			destelement.setAttribute("type", "text");
			destelement.name = "daddr"
			destelement.setAttribute("value", tutorList[i].address);
			console.log(tutorList[i].address);
			row.appendChild(nameValue);
			row.appendChild(contactValue);
			row.appendChild(addressValue);
			row.appendChild(priceValue);
			row.appendChild(ratingValue);
			row.appendChild(availableValue);
			row.appendChild(submitelement); 
			tableBody.appendChild(row);
			console.log(row);
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
			function myFunction() 
			{
            myWindow = window.open("http://maps.google.com/maps", "myWindow", "width=600,height=600");   // Opens a new window
			}
		}
	}
}