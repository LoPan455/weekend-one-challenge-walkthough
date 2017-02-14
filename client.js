$(document).ready(function(){
  $('form').on('submit', function(){  //changed to select the 'form' element and act on the 'submit' event.  The 'type'
    event.preventDefault(); //Do not bring us to a new page

    //create an array of the inputs, the inputs are converted
    //to objects.  The objects have two properties, name
    //and value.
    //e.g. {name: 'firstName', value: 'Luke'}
    console.log('form values: ', $(this).serializeArray()); //In the array the name="" value is what will be the new object attribute name

    var submissionArray = $(this).serializeArray(); //[{},{},{},{}]
    var newEmployeeObject = {}; //{firstName: 'Luke', lastName: 'Schlangen'}

    submissionArray.forEach(function(inputField){
      //newEmployeeObject is an empty object the first time through
      newEmployeeObject[inputField.name] = inputField.value;
      //newEmployeeObject.firstName = Luke;
      //Now, newEmployeeObject = {firstName: 'Luke'}
      //2nd time through, newEmployeeObject = {firstName: Luke, lastName: 'Schlangen'}
    });

    console.log('new employee object: ',newEmployeeObject);

    //adds new employee row to Dom
    $('#employeeTableBody').append(
      '<tr>' +
      '<td>' + newEmployeeObject.firstName + '</td>' +
      '<td>' + newEmployeeObject.lastName + '</td>' +
      '<td>' + newEmployeeObject.idNumber + '</td>' +
      '<td>' + newEmployeeObject.jobTitle + '</td>' +
      '<td>' + newEmployeeObject.annualSalary + '</td>' +
      '<td><button class="deleteEmployeeButton" data-salary=" ' + newEmployeeObject.annualSalary + ' ">Delete ' + firstName + '</button></td>' +
      '</tr>'
    );
    // Add Monthly salary expenses to the Dom
    var newEmployeeMonthlyExpenses = annualSalary / 12;
    var previousSalaryTotal = $('#monthlyExpenses').text();
    var totalMonthlyExpenses = parseInt(previousSalaryTotal) + newEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(totalMonthlyExpenses);

    //Clear out input boxes
    $('.employeeFormInput').val('');


  });
// Addting listener for clicking delete employee buttons
  $('#employeeTableBody').on('click','.deleteEmployeeButton', function(){
    // removing employee salary from total
    var deletedEmployeeSalary = $(this).data('salary');
    var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary / 12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses
    $('#monthlyExpenses').text(newTotalMonthlyExpenses);

    // selecting the row I want to delete
    $(this).parent().parent().remove();

  });


});
