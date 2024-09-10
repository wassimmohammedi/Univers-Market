
document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const deliverySelect = document.getElementById('deliverySelect');
    const selectedOptionText = deliverySelect.options[deliverySelect.selectedIndex].text;
    
    const data = {
        name: name,
        phone: phone,
        selectedOption: selectedOptionText
    };
    
    // Send the data to the Google Apps Script URL
    fetch('https://script.google.com/macros/s/AKfycbykaOj_iyNO7aPMaC0mM9YJlF5FomCyI76WjDihhM2AKrTQvAjXqoi6UCXXbsIBcfSKfA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    })
    .then(response => {
        console.log('Success:', response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
