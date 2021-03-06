$(document).ready(function(){
  $('form').on('submit', function(){
    console.log('submit button clicked')
    var firstName = $('#firstName').val()
    var lastName = $('#lastName').val()
    var idNumber = $('#idNumber').val()
    var jobTitle = $('#jobTitle').val()
    var annualSalary = $('#annualSalary').val()

    //adds new employee row to Dom
    $('#employeeTableBody').append(
      '<tr>' +
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>' + idNumber + '</td>' +
      '<td>' + jobTitle + '</td>' +
      '<td>' + annualSalary + '</td>' +
      '<td><button class="deleteEmployeeButton" data-salary=" ' + annualSalary + ' ">Delete ' + firstName + '</button></td>' +
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
