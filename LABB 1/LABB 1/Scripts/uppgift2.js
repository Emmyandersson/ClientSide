function CalculateSalary() {
    var baseSalary = 15000;
    var provision = document.getElementById('saleSum').value * 0.09;
    document.getElementById('totalSalary').innerHTML = baseSalary + provision;
}