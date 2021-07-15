/** @OnlyCurrentDoc */

function GeneratePasswordsNEW() {

  var spreadsheet = SpreadsheetApp.getActive();
  var passAmount = 100;


  //Primary forloop, generates a specified amount of passwords
  for (var i = 0; i < passAmount; i++) {

    //Variables for RANDALPHA generation, they need to stay here
    var text = "";
    var possible = "0123456789!?@#$";

    //For loop to generate the RANDALPHA value
    for (var j = 0; j < 15; j++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    //Inserts RANDALPHA value into cell D2
     var range = SpreadsheetApp.getActiveSpreadsheet().getRange("D2");
     range.setValue(text);


    //Handles the password generation in the G column, refreshes the sheet
    spreadsheet.getRange('G2').copyTo(spreadsheet.getCurrentCell().offset((i+5), 0), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    SpreadsheetApp.flush();
    
}
};
