function alResponderCuestionario(e){
  Logger.log("Nuevo registro detectado...");
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Respuestas CDMX"); // CAMBIAR LA VARIABLE DE ACUERDO AL NOMBRE DE SU HOJA

  // Mandamos ejecutar la función de clasificación
  clasificarPorPrecio();
  
  // Mandamos ejecutar la función de vista de caie 
  enriquecerConStreetView();
}
