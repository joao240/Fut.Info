document.getElementById('search').addEventListener('keyup', function() {
  var searchText = this.value.toLowerCase();
  var rows = document.querySelectorAll('#tabela tr');

  for (var i = 1; i < rows.length; i++) { // começa do 1 pra ignorar header
    var team = rows[i].cells[1].textContent.toLowerCase();
    if (team.includes(searchText)) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
});