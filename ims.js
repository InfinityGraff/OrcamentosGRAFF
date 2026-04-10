const fs = require('fs');
const path = require('path');

// 🔄 Converte JSON → CSV
function jsonToCSV(json, separator = ';') { // ; = melhor pro Excel BR
  if (!json.length) return '';

  const headers = Object.keys(json[0]);

  const csvRows = [
    headers.join(separator)
  ];

  for (const obj of json) {
    const values = headers.map(header => {
      let val = obj[header] ?? '';

      val = String(val).replace(/"/g, '""');

      if (val.includes(separator) || val.includes('\n')) {
        val = `"${val}"`;
      }

      return val;
    });

    csvRows.push(values.join(separator));
  }

  return csvRows.join('\n');
}

// 📂 Lê JSON de arquivo
function readJSON(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// 💾 Salva CSV
function saveCSV(filePath, csv) {
  fs.writeFileSync(filePath, csv, 'utf-8');
}

// ▶️ EXECUÇÃO
const inputFile = path.join(__dirname, 'BaseIMG.json');
const outputFile = path.join(__dirname, 'BaseIMG.csv');

try {
  const jsonData = readJSON(inputFile);

  const csv = jsonToCSV(jsonData); // já usa ";" pro Excel

  saveCSV(outputFile, csv);

  console.log('✅ CSV gerado com sucesso:', outputFile);
} catch (err) {
  console.error('❌ Erro:', err.message);
}