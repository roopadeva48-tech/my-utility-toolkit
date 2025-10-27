const app = document.getElementById('app');

const toolsData = [
  { id: 'unit-converter', name: 'Unit Converter', description: 'Convert length, weight, temperature.' },
  { id: 'currency-exchange', name: 'Currency Exchange', description: 'Real-time currency conversion.' },
  // Add more tools...
];

function renderHome() {
  app.innerHTML = `<h1>Welcome to Utility ToolKit</h1>
    <p>A collection of useful online tools.</p>
    <div>
      ${toolsData.map(tool => `
        <div class="tool-card">
          <h2>${tool.name}</h2>
          <p>${tool.description}</p>
          <button onclick="renderTool('${tool.id}')">Open</button>
        </div>
      `).join('')}
    </div>`;
}

function renderTool(toolId) {
  if (toolId === 'unit-converter') {
    app.innerHTML = `
      <h2>Unit Converter</h2>
      <form onsubmit="event.preventDefault(); convertUnit();">
        <input type="number" id="value" placeholder="Value">
        <select id="unitFrom">
          <option value="meter">Meter</option>
          <option value="kilometer">Kilometer</option>
        </select>
        <select id="unitTo">
          <option value="meter">Meter</option>
          <option value="kilometer">Kilometer</option>
        </select>
        <button type="submit">Convert</button>
      </form>
      <p id="result"></p>
      <button onclick="renderHome()">Back</button>
    `;
  }
  // Add more tools using similar blocks
}

// Example conversion (extend as needed)
function convertUnit() {
  const value = document.getElementById('value').value;
  const from = document.getElementById('unitFrom').value;
  const to = document.getElementById('unitTo').value;
  let result = value;
  if (from === 'meter' && to === 'kilometer') result = value / 1000;
  else if (from === 'kilometer' && to === 'meter') result = value * 1000;
  document.getElementById('result').textContent = 'Result: ' + result;
}

// Initial Load
window.onload = renderHome;
