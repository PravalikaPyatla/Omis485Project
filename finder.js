var tutorList = [
{name:"Anurag Gudipati",course:"Javascript",contact:"5867011210",address:"753 Fotis Drive, Dekalb",price:"40",rating:"4",dateAvailable:"16516"},
{name:"Sravya Gattamaneni",course:"Javascript",contact:"8158975690",address:"940 Regent Drive, Dekalb",price:"50",rating:"5",dateAvailable:"546"},
{name:"Samantha Akkineni",course:"Javascript",contact:"9875678765",address:"795 Regent Drive, Dekalb",price:"55",rating:"4",dateAvailable:"1698"}, 
{name:"RamCharan Konidela",course:"Javascript",contact:"6486752907",address:"1056 Spiros Court, Dekalb",price:"35",rating:"3",dateAvailable:"1698"},
{name:"Vamsidhar Kella",course:"Python",contact:"8159098167",address:"867 Fotis Drive, Dekalb",price:"45",rating:"4",dateAvailable:"2651"},
{name:"KalyanRam Nandamuri",course:"Python",contact:"8674902765",address:"345 WestRidge, Dekalb",price:"60",rating:"5",dateAvailable:"1698"},
{name:"Venu Madhav Maddala",course:"Python",contact:"6809875642",address:"567 Regent Drive, Dekalb",price:"40",rating:"4",dateAvailable:"1698"},
{name:"Bhavana Ramarapu",course:"Python",contact:"5497862390",address:"689 Fotis Drive, Dekalb",price:"55",rating:"4",dateAvailable:"1698"},
{name:"Viswanath Kotha",course:"JQuery",contact:"7864569087",address:"546 Fotis Drive, Dekalb",price:"45",rating:"4",dateAvailable:"2651"},
{name:"Nikhil Yarlagadda",course:"JQuery",contact:"8762347890",address:"879 WestRidge, Dekalb",price:"60",rating:"5",dateAvailable:"1698"},
{name:"Sandeep Kohli",course:"JQuery",contact:"3427685678",address:"908 Regent Drive, Dekalb",price:"40",rating:"4",dateAvailable:"1698"},
{name:"Aayush Sharma",course:"JQuery",contact:"9076547235",address:"125 Fotis Drive, Dekalb",price:"55",rating:"4",dateAvailable:"1698"},
{name:"Deepika Padukone",course:"HTML",contact:"9874563987",address:"675 Fotis Drive, Dekalb",price:"45",rating:"4",dateAvailable:"2651"},
{name:"Ranbir Kapoor",course:"HTML",contact:"8156789876",address:"987 WestRidge, Dekalb",price:"60",rating:"5",dateAvailable:"1698"},
{name:"Alia Bhatt",course:"HTML",contact:"5896547865",address:"684 Regent Drive, Dekalb",price:"40",rating:"4",dateAvailable:"1698"},
{name:"Ranveer Singh",course:"HTML",contact:"6308763456",address:"792 Fotis Drive, Dekalb",price:"55",rating:"4",dateAvailable:"1698"},	];

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