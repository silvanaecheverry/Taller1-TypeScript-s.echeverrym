import { series } from "./data"; 
import { createSeriesTable } from "./tableSeries"; 

// Obtén el elemento HTML donde se va a mostrar la tabla
const tableContainer: HTMLElement | null = document.getElementById("series-table");

if (tableContainer) {
  
  tableContainer.innerHTML = createSeriesTable(series);
} else {
  console.error("No se encontró el contenedor para la tabla de series.");
}

 