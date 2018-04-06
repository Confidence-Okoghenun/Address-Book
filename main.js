var addContactButton = document.getElementById("buttonAdd");
addContactButton.onclick = contactCreator;

function contactCreator() {
    
    
    //Get all the contact detail's values such as first and last names
    //as well as phone number and store them in the blow variables
    var contactName = document.getElementById("Name").value;
    var eMail = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    
  
    //Create a new li bearing contact name in a paragraph element
    //under the ul and give it the value of Name
    var nameListItem = document.createElement("li");
    var nameListItemParagraph = document.createElement("p");
    var nameListItemContent = document.createTextNode(contactName);
    nameListItemParagraph.appendChild(nameListItemContent);
    
    var nameListItemImage = document.createElement("img");
    nameListItemImage.setAttribute("src","img/arrow-down.png");
    nameListItemParagraph.appendChild(nameListItemImage);
    
    //Sets the attribute of new nameListItemParagraph, bearing contact name to
    //the value of contact name and then the id of nameListItem to
    //contactName+eMail
    nameListItemParagraph.setAttribute("id", contactName);
    nameListItem.setAttribute("id","contact-" + contactName);
    
    //Add newly created li and its content to the ordered list after
    //adding the nameListItemParagraph to the li
    var contactOrderedList = document.getElementById("contactList");
    nameListItem.appendChild(nameListItemParagraph);
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
    eMailListItem.setAttribute("id", eMail);
    var eMailListItemContent = document.createTextNode("Email: " + eMail);
    eMailListItem.appendChild(eMailListItemContent);
    detailsUnorderedList.appendChild(eMailListItem);
    
    //Create a li for the phone number and give it the value of phoneNumber
    //after which add it to the detailsUnorderedList
    var phoneNumberListItem = document.createElement("li");
    phoneNumberListItem.setAttribute("id", phoneNumber);
    var phoneNumberListItemContent = document.createTextNode("Tel: " + phoneNumber);
    phoneNumberListItem.appendChild(phoneNumberListItemContent);
    detailsUnorderedList.appendChild(phoneNumberListItem);
    
    //Give detailsUnorderedList an id of "details-" + contactName
    detailsUnorderedList.setAttribute("id", "details-" + contactName);
    
    //Add newly created detailsUnorderedList and its content to the
    //contactNameListItem and give it an attribute of hidden
    detailsUnorderedList.setAttribute("hidden","");
    nameListItem.appendChild(detailsUnorderedList);
    
    //Resets all input fields
    document.getElementById("contactForm").reset();
    
    //The below helps to hide or reveal contact details
     (function () {
        var contact = document.getElementById(contactName);
        var details = document.getElementById("details-" + contactName);
        contact.onclick = hider;
        var counter1 = 2;
        
        function hider() {
            if (counter1%2 === 0) {
                details.removeAttribute("hidden");
                nameListItemImage.setAttribute("src","img/arrow-up.png");
                nameListItemParagraph.appendChild(nameListItemImage);
                
            } else {
                details.setAttribute("hidden","");
                nameListItemImage.setAttribute("src","img/arrow-down.png");
                nameListItemParagraph.appendChild(nameListItemImage);
            }
            return counter1++;
        }
    })();
    
    
    //
    //
    //This portion is for editing the contact details
    //
    //
    
    //this creates the editButton button in the detailsUnorderedList
    var editButton = document.createElement("button");
    editButton.setAttribute("id", "edit-" + contactName);
    var editButtonText = document.createTextNode("Edit contact");
    editButton.appendChild(editButtonText);
    detailsUnorderedList.insertAdjacentElement("beforeend", editButton);
    
    var clickEditButton = document.getElementById("edit-" + contactName);
    clickEditButton.onclick = editContactDetails;
    var counter2 = 1;
    
    function editContactDetails() {
        if(counter2%2 !== 0) {
            var nameToEdit = document.getElementById(contactName);
            var emailToEdit = document.getElementById(eMail);
            var phoneNumberToEdit = document.getElementById(phoneNumber);
            
            var editDiv = document.createElement("div");
            editDiv.setAttribute("id", "edit-div-" + contactName);
            var editForm = document.createElement("form");
            
            var editNameTextInput = document.createElement("input");
            editNameTextInput.setAttribute("type","text");
            editNameTextInput.setAttribute("class","input-field");
            editNameTextInput.setAttribute("placeholder","enter new name");
            editNameTextInput.setAttribute("id","edit-" + contactName + "-text");
            
            
            var editEmailTextInput = document.createElement("input");
            editEmailTextInput.setAttribute("type","text");
            editEmailTextInput.setAttribute("class","input-field");
            editEmailTextInput.setAttribute("placeholder","enter new email");
            editEmailTextInput.setAttribute("id","edit-" + eMail + "-text");
            
            var editPhoneNumberTextInput = document.createElement("input");
            editPhoneNumberTextInput.setAttribute("type","text");
            editPhoneNumberTextInput.setAttribute("class","input-field");
            editPhoneNumberTextInput.setAttribute("placeholder","enter new phone number");
            editPhoneNumberTextInput.setAttribute("id","edit-" + phoneNumber + "-text");
            
            var saveButton = document.createElement("input");
            saveButton.setAttribute("type","submit");
            saveButton.setAttribute("value","Save");
            saveButton.setAttribute("id","save-button-" + contactName);
            
            
            
            var spanForEditName = document.createElement("span");
            var textSpanForEditName = document.createTextNode("Name");
            spanForEditName.appendChild(textSpanForEditName);
            
            var spanForEditEmail = document.createElement("span");
            var textSpanForEditEmail = document.createTextNode("Email");
            spanForEditEmail.appendChild(textSpanForEditEmail);
            
            var spanForPhoneNumber = document.createElement("span");
            var textSpanForPhoneNumber = document.createTextNode("Phone Number");
            spanForPhoneNumber.appendChild(textSpanForPhoneNumber);
            
            
            
            var labelForEditName = document.createElement("label");
            var labelForEditEmail = document.createElement("label");
            var labelForPhoneNumber = document.createElement("label");
            
            labelForEditName.appendChild(spanForEditName);
            labelForEditEmail.appendChild(spanForEditEmail);
            labelForPhoneNumber.appendChild(spanForPhoneNumber);
            
            labelForEditName.appendChild(editNameTextInput);
            labelForEditEmail.appendChild(editEmailTextInput);
            labelForPhoneNumber.appendChild(editPhoneNumberTextInput);
            
            editForm.appendChild(labelForEditName);
            editForm.appendChild(labelForEditEmail);
            editForm.appendChild(labelForPhoneNumber);
            
            clickEditButton.insertAdjacentElement('afterend', editDiv);
            editDiv.appendChild(editForm);
            editForm.insertAdjacentElement('afterend',saveButton);
            
            var clickToSave = document.getElementById("save-button-" + contactName);
            clickToSave.onclick = editAndSave;
                    
            function editAndSave() {
                
                
                var nameToSave = document.getElementById("edit-" + contactName + "-text").value;
                if(nameToSave === "") {} else {
                document.getElementById(contactName).innerHTML = nameToSave;
                }
                
                
                var eMailToSave = document.getElementById("edit-" + eMail + "-text").value;
                if(eMailToSave === "") {} else {
                document.getElementById(eMail).innerHTML = "Email: " + eMailToSave;
                }
                
                
                var phoneNumberToSave = document.getElementById("edit-" + phoneNumber + "-text").value;
                if(phoneNumberToSave === "") {} else {
                document.getElementById(phoneNumber).innerHTML = "Tel: " + phoneNumberToSave;
                }
                
                
                var hideEditDiv = document.getElementById("edit-div-" + contactName);
                hideEditDiv.remove();
                
                return counter2--;
            }
        } else {
            var hideEditDiv = document.getElementById("edit-div-" + contactName);
            hideEditDiv.remove();
        }
        return counter2++;
    }
    
    //
    //
    //This portion is for deleting the contact details
    //
    //
    
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-" + contactName);
    var deleteButtonText = document.createTextNode("Delete contact");
    deleteButton.appendChild(deleteButtonText);
    detailsUnorderedList.insertAdjacentElement("beforeend", deleteButton);
    
    var clickDeleteButton = document.getElementById("delete-" + contactName);
    clickDeleteButton.onclick = deleteContactDetails;
    
    function deleteContactDetails() {
        var allContactDetails = document.getElementById("contact-" + contactName);
        allContactDetails.remove();
    }
}