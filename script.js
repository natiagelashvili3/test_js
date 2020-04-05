var data = {
    name: null,
    lastname: null,
    age: null,
    gender: null,

    setData: function() {
       this.name = document.getElementById('name').value; 
       this.lastname = document.getElementById('lastname').value;
       this.age = document.getElementById('age').value;
       this.gender = document.getElementById('gender').value;   
    },

    insert: function() {
        this.setData();
        this.setErrorMsg();

        if(!this.name || !this.lastname || !this.age || !this.gender) {
            this.setErrorMsg("Please fill in all fields");
        } else {
            this.insertRecord();
        }
    },

    insertRecord: function() {
        var trElement = document.createElement('tr');
        trElement.innerHTML = `
            <td>`+ this.name +`</td>
            <td>`+ this.lastname +`</td>
            <td>`+ this.age +`</td>
            <td>`+ this.gender +`</td>
        `;

        var tdElement = document.createElement('td');
        tdElement.classList.add('action');
        tdElement.innerHTML = '<span>Delete</span>';

        tdElement.addEventListener('click', function() {
            if(confirm("Do you want to delete? ")) {
                this.parentNode.remove();
            }
        });

        trElement.appendChild(tdElement);

        document.getElementById('table-body').appendChild(trElement);
        
        this.clearForm();

    },

    clearForm: function() {
        document.getElementById('form').reset();
    },

    setErrorMsg: function(text = '') {
        document.getElementById('error-msg').innerText = text
    }
}