import React, { useState } from 'react';

const BrazilTravelCalendar = () => {
  // Define destinations
  const destinations = [
    { name: "Alter do Chão", region: "North", notes: "Low water season (Aug-Dec) reveals beautiful beaches along the Amazon. Known as 'Caribbean Amazon'." },
    { name: "Arraial do Cabo", region: "Southeast", notes: "Known as 'Brazilian Caribbean', best in summer months despite crowds. Spring/fall offer good compromise." },
    { name: "Bonito", region: "Central-West", notes: "Dry season (Jul-Sep) offers crystal clear rivers for snorkeling. Heavy rains can cloud the waters." },
    { name: "Brasília", region: "Central-West", notes: "Dry season (May-Sep) offers pleasant days, but very dry. Rainy season brings lush landscapes." },
    { name: "Chapada Diamantina", region: "Northeast", notes: "Dry season (May-Oct) best for hiking. Waterfalls more impressive after rains though." },
    { name: "Fernando de Noronha", region: "Northeast (Island)", notes: "Best visibility for diving during dry season (Aug-Dec). Limited tourism permits; book well ahead." },
    { name: "Florianópolis", region: "South", notes: "Southern summer (Dec-Mar) best for beaches. Winter can be surprisingly cold." },
    { name: "Fortaleza", region: "Northeast", notes: "Consistently sunny. July-December offers ideal wind conditions for kitesurfing." },
    { name: "Foz do Iguaçu", region: "South", notes: "Waterfalls most powerful during rainy season, but clear views in dry season. Shoulder seasons offer good balance." },
    { name: "Ilha Grande", region: "Southeast", notes: "Mild climate year-round, but summer (Dec-Mar) best for beaches despite occasional rain." },
    { name: "Jericoacoara", region: "Northeast", notes: "July-November best for consistent sun and wind (kitesurfing). Requires 4x4 to reach." },
    { name: "Lençóis Maranhenses", region: "Northeast", notes: "Best after rainy season (Jun-Sep) when lagoons fill among the dunes. Stunning natural phenomenon." },
    { name: "Manaus & Amazon", region: "North", notes: "Dry season (Jun-Nov) means fewer mosquitoes and easier trails. Wet season shows higher water levels for boat exploration." },
    { name: "Natal", region: "Northeast", notes: "Sunny nearly year-round. June-January offers best beach weather." },
    { name: "Ouro Preto", region: "Southeast", notes: "Pleasant year-round. Easter celebrations are particularly special. Avoid peak rainy season." },
    { name: "Pantanal", region: "Central-West", notes: "Dry season (May-Oct) best for wildlife viewing. Wet season makes travel difficult but brings incredible bird migrations." },
    { name: "Paraty", region: "Southeast", notes: "Mild year-round climate, but avoid heavy summer rains. Literary festival in July." },
    { name: "Porto de Galinhas", region: "Northeast", notes: "Dry season Sep-Feb offers clear tidal pools. Popular year-round destination." },
    { name: "Recife & Olinda", region: "Northeast", notes: "Dry season Sep-Dec ideal. Famous Carnival celebrations in February/March." },
    { name: "Rio de Janeiro", region: "Southeast", notes: "Best during summer for beaches and Carnival (Feb/Mar), but pleasant year-round. Avoid heavy summer rains in December-January." },
    { name: "Salvador", region: "Northeast", notes: "Dry season (Sep-Mar) ideal for beaches. Carnival in February is spectacular but crowded." },
    { name: "São Paulo", region: "Southeast", notes: "Best in spring/fall for mild weather. Summer can be rainy with occasional flooding." }
  ];

  // Define months
  const months = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];

  // Define season data
  const seasonData = {
    "Alter do Chão":      [4, 4, 4, 3, 3, 3, 3, 2, 0, 0, 0, 2],
    "Arraial do Cabo":    [0, 0, 0, 1, 2, 2, 2, 2, 1, 1, 0, 0],
    "Bonito":             [4, 4, 3, 2, 2, 1, 0, 0, 0, 1, 2, 3],
    "Brasília":           [4, 4, 3, 3, 2, 0, 0, 0, 0, 2, 3, 4],
    "Chapada Diamantina": [4, 3, 3, 3, 1, 0, 0, 0, 0, 0, 2, 3],
    "Fernando de Noronha":[2, 2, 3, 4, 3, 2, 1, 0, 0, 0, 0, 1],
    "Florianópolis":      [0, 0, 1, 2, 3, 3, 3, 3, 2, 1, 1, 0],
    "Fortaleza":          [3, 3, 3, 2, 2, 1, 0, 0, 0, 0, 0, 2],
    "Foz do Iguaçu":      [2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],
    "Ilha Grande":        [0, 0, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0],
    "Jericoacoara":       [3, 3, 3, 2, 2, 1, 0, 0, 0, 0, 0, 2],
    "Lençóis Maranhenses":[4, 3, 3, 3, 3, 0, 0, 0, 1, 2, 3, 4],
    "Manaus & Amazon":    [4, 4, 3, 3, 3, 2, 1, 0, 0, 0, 1, 3],
    "Natal":              [0, 1, 2, 3, 4, 3, 2, 0, 0, 0, 0, 0],
    "Ouro Preto":         [3, 2, 0, 1, 2, 2, 0, 0, 1, 2, 3, 3],
    "Pantanal":           [4, 4, 3, 3, 2, 0, 0, 0, 0, 0, 2, 3],
    "Paraty":             [3, 3, 3, 2, 1, 0, 0, 0, 1, 2, 2, 3],
    "Porto de Galinhas":  [0, 0, 1, 2, 3, 4, 3, 2, 0, 0, 0, 0],
    "Recife & Olinda":    [2, 0, 1, 3, 4, 3, 3, 2, 0, 0, 0, 0],
    "Rio de Janeiro":     [3, 2, 2, 1, 1, 0, 0, 0, 1, 2, 2, 3],
    "Salvador":           [1, 0, 1, 2, 3, 3, 3, 3, 1, 1, 1, 1],
    "São Paulo":          [3, 3, 2, 1, 1, 0, 0, 0, 1, 2, 2, 3]
  };

  // Define colors for seasons
  const seasonColors = {
    0: "#4CAF50", // Best - Green
    1: "#8BC34A", // Great - Light Green
    2: "#FFC107", // Good - Amber
    3: "#FF9800", // Poor - Orange
    4: "#F44336"  // Avoid - Red
  };

  // Define legend text
  const legendText = {
    0: "Best",
    1: "Great",
    2: "Good",
    3: "Poor",
    4: "Avoid"
  };

  // State for selected months
  const [selectedMonths, setSelectedMonths] = useState([]);
  // State for quality filter
  const [qualityFilter, setQualityFilter] = useState("All");

  // Function to handle month selection
  const toggleMonth = (monthIndex) => {
    if (selectedMonths.includes(monthIndex)) {
      setSelectedMonths(selectedMonths.filter(m => m !== monthIndex));
    } else {
      setSelectedMonths([...selectedMonths, monthIndex]);
    }
  };

  // Function to convert filter text to numeric values
  const getQualityValue = (qualityText) => {
    switch(qualityText) {
      case "Best": return 0;
      case "Great": return 1;
      case "Good": return 2;
      case "All": return 5; // Higher than any rating value
      default: return 5;
    }
  };

  // Function to check if a destination meets the filter criteria
  const meetsCriteria = (destinationName) => {
    // If no months are selected, show all destinations
    if (selectedMonths.length === 0) return true;
    
    // Convert quality filter to numeric value
    const qualityValue = getQualityValue(qualityFilter);
    
    // Check if the destination has at least one selected month with quality equal to or better than the filter
    return selectedMonths.some(monthIndex => {
      const value = seasonData[destinationName][monthIndex];
      return value <= qualityValue;
    });
  };

  // Filter destinations based on selected criteria
  const filteredDestinations = destinations.filter(dest => meetsCriteria(dest.name));

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Brazil Travel Calendar: Best Times to Visit</h1>
      
      {/* Filter controls */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="mb-4">
          <h3 className="font-bold mb-2">Select month(s) to filter destinations:</h3>
          <div className="flex flex-wrap gap-2">
            {months.map((month, idx) => (
              <button
                key={month}
                onClick={() => toggleMonth(idx)}
                className={`px-3 py-1 rounded ${
                  selectedMonths.includes(idx) 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-2">
          <h3 className="font-bold mb-2">Show destinations rated at least:</h3>
          <div className="flex gap-2">
            {["Best", "Great", "Good", "All"].map((quality) => (
              <button
                key={quality}
                onClick={() => setQualityFilter(quality)}
                className={`px-3 py-1 rounded ${
                  qualityFilter === quality
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {quality}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-4 text-sm">
          {selectedMonths.length > 0 ? (
            <p>Showing {filteredDestinations.length} destinations that are rated <strong>{qualityFilter !== "All" ? qualityFilter + " or better" : "any quality"}</strong> during {selectedMonths.map(idx => months[idx]).join(", ")}.</p>
          ) : (
            <p>Select one or more months to filter destinations. Currently showing all destinations.</p>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Destination (Region)</th>
              {months.map(month => (
                <th 
                  key={month} 
                  className={`px-4 py-2 border text-center cursor-pointer ${
                    selectedMonths.includes(months.indexOf(month)) ? 'bg-blue-100' : ''
                  }`}
                  style={{ minWidth: '70px' }}
                  onClick={() => toggleMonth(months.indexOf(month))}
                >
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredDestinations.map((destination, index) => (
              <tr key={destination.name} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="px-4 py-2 border font-medium">
                  <div>{destination.name}</div>
                  <div className="text-xs text-gray-500">{destination.region}</div>
                </td>
                {months.map((month, monthIndex) => {
                  const seasonValue = seasonData[destination.name][monthIndex];
                  return (
                    <td 
                      key={`${destination.name}-${month}`} 
                      className={`px-2 py-2 border text-center cursor-pointer ${
                        selectedMonths.includes(monthIndex) ? 'ring-2 ring-blue-400' : ''
                      }`}
                      style={{ 
                        backgroundColor: seasonColors[seasonValue],
                        color: seasonValue <= 2 ? "#000" : "#fff"
                      }}
                      onClick={() => toggleMonth(monthIndex)}
                    >
                      {legendText[seasonValue]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 mb-4">
        <h3 className="font-bold mb-2">Legend:</h3>
        <div className="flex flex-wrap gap-4">
          {[0, 1, 2, 3, 4].map(value => (
            <div key={value} className="flex items-center">
              <div 
                className="w-4 h-4 mr-2" 
                style={{ backgroundColor: seasonColors[value] }}
              ></div>
              <span>{legendText[value]}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Destination notes */}
      {filteredDestinations.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">Destination Notes:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDestinations.map(destination => (
              <div key={`note-${destination.name}`} className="p-3 border rounded bg-white shadow-sm">
                <span className="font-medium">{destination.name}:</span> {destination.notes}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-8 text-sm text-gray-600">
        <p><strong>Weather considerations:</strong> Brazil is in the Southern Hemisphere, so seasons are opposite to the Northern Hemisphere. Summer is December-February, winter is June-August.</p>
        <p><strong>Regional differences:</strong> Brazil spans multiple climate zones - tropical north, subtropical south, and semi-arid northeast each have unique patterns.</p>
        <p><strong>Festivals:</strong> Consider timing for events like Carnival (February/March, varies by year) when planning your trip.</p>
      </div>
    </div>
  );
};

export default BrazilTravelCalendar;

// Render the component to the root div
ReactDOM.render(<BrazilTravelCalendar />, document.getElementById('root'));
