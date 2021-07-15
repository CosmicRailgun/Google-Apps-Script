function onEdit(e) {
  //Setup Variables
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = SpreadsheetApp.getActiveSheet();
  var r = SpreadsheetApp.getActiveRange();
  
 //Main function
  if(s.getName() == "Username and password list 2020-21 Master List" && r.getColumn() == 1 && r.getValue() == "#remove") {
    var row = r.getRow();
    var numColumns = s.getLastColumn();
    var targetSheet = ss.getSheetByName("Removal History");
    var target = targetSheet.getRange(targetSheet.getLastRow() + 1, 1,1,numColumns);
    s.getRange(row, 1, 1, numColumns).moveTo(target);
    s.deleteRow(row);
  }
}
