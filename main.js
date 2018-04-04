var addContactButton = document.getElementById("buttonAdd");
addContactButton.onclick = contactCreator;

function contactCreator() {
    //Get all the contact detail's values such as first and last names
    //as well as phone number and store them in the blow variables
    var contactName = document.getElementById("Name").value;
    var eMail = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    
  
    //Create a new li bearing contact name under the ul
    //and give it the value of Name
    var nameListItem = document.createElement("li");
    var nameListItemContent = document.createTextNode(contactName);
    nameListItem.appendChild(nameListItemContent);
    
    //Sets the attribute of new li bearing contact name to the value of
    //contact name
    nameListItem.setAttribute("id", contactName);
    
    //Add newly created li and its content to the ordered list
    var contactOrderedList = document.getElementById("contactList");
    contactOrderedList.appendChild(nameListItem);
    
    
    //
    //
    //This section contains code for the contact details
    //
    //
    
    //Create and ul for the contact details
    var detailsUnorderedList = document.createElement("ul");
    
    //Create a li for the email and give it the value of eMail
    //after which add it to the detailsUnorderedList
    var eMailListItem = document.createElement("li");
    var eMailListItemContent = document.createTextNode(eMail);
    eMailListItem.appendChild(eMailListItemContent);
    detailsUnorderedList.appendChild(eMailListItem);
    
    //Create a li for the phone number and give it the value of phoneNumber
    //after which add it to the detailsUnorderedList
    var phoneNumberListItem = document.createElement("li");
    var phoneNumberListItemContent = document.createTextNode(phoneNumber);
    phoneNumberListItem.appendChild(phoneNumberListItemContent);
    detailsUnorderedList.appendChild(phoneNumberListItem);
    
    //Reverses contactName and makes it the id of detailsUnorderedList
    var reverseContactName;
    function reverseString(str) {
        reverseContactName = str.split("").reverse().join("");
        return reverseContactName;
    }
    reverseString(contactName);
    detailsUnorderedList.setAttribute("id", reverseContactName);
    
    //Add newly created detailsUnorderedList and its content to the
    //contactNameListItem
    var contactNameListItem = document.getElementById(contactName);
    contactNameListItem.appendChild(detailsUnorderedList);
    
    //The below helps to hide or reveal contact details
    return function() {
        var contact = document.getElementById(contactName);
        var details = document.getElementById(reverseContactName);
        contact.onclick = hider;
        var counter = 1;
        
        function hider() {
            if (counter%2 === 0) {
                details.removeAttribute("hidden");
            } else {
                details.setAttribute("hidden","");
            }
            return counter++;
        }
    }();
}