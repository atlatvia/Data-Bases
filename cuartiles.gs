function clasificarPorPrecio() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  let precioCol = -1;

  for (let j = 0; j < headers.length; j++) {
    if (String(headers[j]).includes("Precio por metro")) {
      precioCol = j;
      break;
    }
  }
  
  if (precioCol === -1) {
    Logger.log("ERROR: No encontré columna 'Precio por metro'");
    return;
  }
  
  let precios = [];
  for (let i = 1; i < data.length; i++) {
    const p = Number(data[i][precioCol]);
    if (!isNaN(p)) precios.push(p);
  }
  
  precios.sort((a, b) => a - b);
  
  const q1 = precios[Math.floor(precios.length * 0.25)];
  const q2 = precios[Math.floor(precios.length * 0.50)];
  const q3 = precios[Math.floor(precios.length * 0.75)];
  
  const lastCol = data[0].length;
  sheet.getRange(1, lastCol + 1).setValue("Clase Económica");
  
  for (let i = 1; i < data.length; i++) {
    const precio = Number(data[i][precioCol]);
    let clase;
    
    if (precio >= q3) clase = "Premium";
    else if (precio >= q2) clase = "Alto";
    else if (precio >= q1) clase = "Medio";
    else clase = "Bajo";
    
    sheet.getRange(i + 1, lastCol + 1).setValue(clase);
    Utilities.sleep(50);
  }
  
  Logger.log("¡Listo! Q1=" + q1 + " Q2=" + q2 + " Q3=" + q3);
}
