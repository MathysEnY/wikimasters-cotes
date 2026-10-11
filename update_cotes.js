const fs = require('fs');

async function run() {
  const file = 'cotes.json';
  const data = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : { cotes: {} };
  data.updated_at = new Date().toISOString();
  data.version = "2.0.0";
  
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  console.log('Cotes mises à jour avec succès :', Object.keys(data.cotes).length, 'cartes.');
}

run().catch(console.error);
