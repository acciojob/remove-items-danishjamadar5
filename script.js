//your JS code here. If required.
function deleteElement() {
     let selectElement=document.getElementById("colorSelect");
	let selectedValue=selectElement.value;
	let childrenList=selectElement.children;

	for(let i=0;i<childrenList;i++)
		{
			if(selectedValue===childrenList[i].value)
			{
				childrenList[i].remove();
			}
		}
}