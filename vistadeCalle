function enriquecerConStreetView() {
  const API_KEY = "COPIA Y PEGA TU LLAVE DE API DE GOOGLE AQUÌ"; // Aquí se pega el código generado por google console (API)
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  const lastCol = data[0].length;
  sheet.getRange(1, lastCol + 1).setValue("StreetView_URL");
  
  Logger.log("Generando URLs de Street View...");
  
  for (let i = 1; i < data.length; i++) {
    const lat = data[i][7];
    const lon = data[i][8];
    
    if (!lat || !lon || isNaN(lat) || isNaN(lon)) continue;
    
    const streetViewUrl = `https://www.google.com/maps/embed/v1/streetview?key=${API_KEY}&location=${lat},${lon}&heading=0&pitch=0&fov=90`;
    
    sheet.getRange(i + 1, lastCol + 1).setValue(streetViewUrl);
    
    if (i % 100 === 0) {
      Logger.log(`Procesadas ${i} URLs...`);
    }
  }
  
  Logger.log("✓ URLs de Street View generadas");
}
