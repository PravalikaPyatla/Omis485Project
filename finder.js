var tutorList = [{name:"sadsda",course:"Javascript",contact:"1541651",address:"guiuhgoviuf",price:"59",rating:"4",dateAvailable:"16516"},
{name:"fdnkl",course:"Python",contact:"1841323",address:"bohyuftrdyt",price:"15",rating:"4",dateAvailable:"2651"},
{name:"dsknvdkl",course:"Javascript",contact:"42154",address:"dfufuig",price:"20",rating:"5",dateAvailable:"546"},
{name:"dfvnlsdm",course:"Javascript",contact:"1986463123",address:"dytigo",price:"18",rating:"3",dateAvailable:"1698"}];

function updateRows()
{
	courseName = document.getElementById("courseInput");
	tableBody = document.getElementById("resultRows");
	console.log(courseName)
	for(var i=0; i<tutorList.length; i++){
		console.log("course in array: ",tutorList[i].course);
		if(tutorList[i].course == courseName.value)
		{
			console.log("match");
			row = document.createElement("tr");
			nameValue = document.createElement("td");
			contactValue = document.createElement("td");
			addressValue = document.createElement("td");
			priceValue = document.createElement("td");
			ratingValue = document.createElement("td");
			availableValue = document.createElement("td");
			nameValue.innerHTML = tutorList[i].name;
			contactValue.innerHTML = tutorList[i].contact;
			addressValue.innerHTML = tutorList[i].address;
			priceValue.innerHTML = tutorList[i].price;
			ratingValue.innerHTML = tutorList[i].rating;
			
			row.appendChild(nameValue);
			row.appendChild(contactValue);
			row.appendChild(addressValue);
			row.appendChild(priceValue);
			row.appendChild(ratingValue);
			row.appendChild(availableValue);
			
			tableBody.appendChild(row);
		}
	}
}