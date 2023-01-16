const form = document.getElementById('prompt-form');

// display text
function setText(element, text) {
  element.innerHTML = text;
}

async function handleSubmit(event) {
  event.preventDefault();

  // Get the value of the input field
  const input = form.querySelector('input');
  const value = input.value;

  // Add the value to the user prompt
  const prompt = `${value}`;
  const promptSolutions = `${value} Return exactly 3 potential solutions`;
  const promptGoals = `${value} Return exactly 3 jargon filled project management lingo`;
  const promptDels = `${value} Return exactly 3 deliverables`;
  const promptMilestones = `${value} Return exactly 3 milestones`;
  const promptImpplan = `${value} Return exactly 3 steps in an implementation plan`;
  const promptChangeplan = `${value} Return exactly 3 steps in a change plan`;
  const promptMetrics = `${value} Return exactly 3 metrics`;
  const promptOpps = `${value} Return exactly 3 opportunities`;
  const promptThreats = `${value} Return exactly 3 threats`;
  const promptBenefits = `${value} Return exactly 3 benefits`;

  // specific message divs 
  const promptDiv = document.getElementById('prompt-div');
  const solutionsDiv = document.getElementById('solutions-div');
  const goalsDiv = document.getElementById('goals-div');
  const delsDiv = document.getElementById('dels-div');
  const milestonesDiv = document.getElementById('milestones-div');
  const impplanDiv = document.getElementById('impplan-div');
  const changeplanDiv = document.getElementById('changeplan-div');
  const metricsDiv = document.getElementById('metrics-div');
  const oppsDiv = document.getElementById('opps-div');
  const threatsDiv = document.getElementById('threats-div');
  const benefitsDiv = document.getElementById('benefits-div');


  // Display prompt
  setText(promptDiv, prompt);

  // Submit the second prompt to the server

  // const solutionsCheckbox = document.getElementById("solutionsCheckbox");
  // if (solutionsCheckbox.checked) {
  //   const solutionsResp = await fetch('http://localhost:5000', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       prompt: promptSolutions,
  //     }),
  //   });
  
  //   if (solutionsResp.ok) {
  //     const solutionsData = await solutionsResp.json();
  //     const parsedsolutionsData = solutionsData.bot.trim(); // trims any trailing spaces/'\n' 

  //     setText(solutionsDiv, parsedsolutionsData);

  //   } else {
  //     const err = await solutionsResp.text();

  //     solutionsDiv.innerHTML = 'Something went wrong';
  //     alert(err);
  //   }
  // }





// Submit the second prompt to the server
const solutionsCheckbox = document.getElementById("solutionsCheckbox");
if (solutionsCheckbox.checked) {
  const solutionsResp = await fetch('http://localhost:5000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: promptSolutions,
    }),
  });

  if (solutionsResp.ok) {
    const solutionsData = await solutionsResp.json();
    const parsedSolutionsData = solutionsData.bot.trim(); // trims any trailing spaces/'\n' 

    // create a table element
    const table = document.createElement('table');

    // add a style attribute to the table element to set the background color of the first column
    table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');

    // split the data by lines
    const lines = parsedSolutionsData.split('\n');
    let rowCount = 0; // keep track of the number of rows
    for (const line of lines) {

      // check if the line starts with a number
      if (/^\d/.test(line)) {

        // create a new row for the table
        const row = document.createElement('tr');

        // set the background color of the row based on the row count
        if (rowCount % 2 === 0) {
            row.setAttribute('style', 'background-color: darkgrey;');
        } else {
            row.setAttribute('style', 'background-color: lightgrey;');
        }

        // extract the number from the line
        const number = line.match(/^\d+/)[0];

        // create a cell for the number
        const numberCell = document.createElement('td');
        numberCell.textContent = number;
        numberCell.style.padding = "10px"; // add 10px padding to the cell

        // create a cell for the text
        const textCell = document.createElement('td');
        textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;

        // append the cells to the row
        row.appendChild(numberCell);
        row.appendChild(textCell);

        // append the row to the table
        table.appendChild(row);

        rowCount++; // increment the row count
      
      } 
      
    }

      // clear the benefitsDiv element
      solutionsDiv.innerHTML = '';

      // append the table to the benefitsDiv element
      solutionsDiv.appendChild(table);

    } else {
      const err = await solutionsResp.text();

      solutionsDiv.innerHTML = 'Something went wrong';
      alert(err);
    }

  }

 
  



const goalsCheckbox = document.getElementById("goalsCheckbox");
if (goalsCheckbox.checked) {
  const goalsResp = await fetch('http://localhost:5000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: promptGoals,
    }),
  });

  if (goalsResp.ok) {
    const goalsData = await goalsResp.json();
    const parsedGoalsData = goalsData.bot.trim();
    const table = document.createElement('table');
    table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');
    const lines = parsedGoalsData.split('\n');
    let rowCount = 0;
    for (const line of lines) {
      if (/^\d/.test(line)) {
        const row = document.createElement('tr');
        if (rowCount % 2 === 0) {
            row.setAttribute('style', 'background-color: darkgrey;');
        } else {
            row.setAttribute('style', 'background-color: lightgrey;');
        }
        const number = line.match(/^\d+/)[0];
        const numberCell = document.createElement('td');
        numberCell.textContent = number;
        numberCell.style.padding = "10px";
        const textCell = document.createElement('td');
        textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;
        row.appendChild(numberCell);
        row.appendChild(textCell);
        table.appendChild(row);
        rowCount++;
      } 
    }
      goalsDiv.innerHTML = '';
      goalsDiv.appendChild(table);
    } else {
      const err = await goalsResp.text();
      goalsDiv.innerHTML = 'Something went wrong';
      alert(err);
    }
  }











  
const delsCheckbox = document.getElementById("delsCheckbox");
if (delsCheckbox.checked) {
  const delsResp = await fetch('http://localhost:5000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: promptDels,
    }),
  });

  if (delsResp.ok) {
    const delsData = await delsResp.json();
    const parsedDelsData = delsData.bot.trim();
    const table = document.createElement('table');
    table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');
    const lines = parsedDelsData.split('\n');
    let rowCount = 0;
    for (const line of lines) {
      if (/^\d/.test(line)) {
        const row = document.createElement('tr');
        if (rowCount % 2 === 0) {
            row.setAttribute('style', 'background-color: darkgrey;');
        } else {
            row.setAttribute('style', 'background-color: lightgrey;');
        }
        const number = line.match(/^\d+/)[0];
        const numberCell = document.createElement('td');
        numberCell.textContent = number;
        numberCell.style.padding = "10px";
        const textCell = document.createElement('td');
        textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;
        row.appendChild(numberCell);
        row.appendChild(textCell);
        table.appendChild(row);
        rowCount++;
      } 
    }
      delsDiv.innerHTML = '';
      delsDiv.appendChild(table);
    } else {
      const err = await delsResp.text();
      delsDiv.innerHTML = 'Something went wrong';
      alert(err);
    }
  }










  
  const milestonesCheckbox = document.getElementById("milestonesCheckbox");
  if (milestonesCheckbox.checked) {
    const milestonesResp = await fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: promptMilestones,
      }),
    });
  
    if (milestonesResp.ok) {
      const milestonesData = await milestonesResp.json();
      const parsedMilestonesData = milestonesData.bot.trim();
      const table = document.createElement('table');
      table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');
      const lines = parsedMilestonesData.split('\n');
      let rowCount = 0;
      for (const line of lines) {
        if (/^\d/.test(line)) {
          const row = document.createElement('tr');
          if (rowCount % 2 === 0) {
              row.setAttribute('style', 'background-color: darkgrey;');
          } else {
              row.setAttribute('style', 'background-color: lightgrey;');
          }
          const number = line.match(/^\d+/)[0];
          const numberCell = document.createElement('td');
          numberCell.textContent = number;
          numberCell.style.padding = "10px";
          const textCell = document.createElement('td');
          textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;
          row.appendChild(numberCell);
          row.appendChild(textCell);
          table.appendChild(row);
          rowCount++;
        } 
      }
        milestonesDiv.innerHTML = '';
        milestonesDiv.appendChild(table);
      } else {
        const err = await milestonesResp.text();
        milestonesDiv.innerHTML = 'Something went wrong';
        alert(err);
      }
    }
  

    














  
    const impplanCheckbox = document.getElementById("impplanCheckbox");
    if (impplanCheckbox.checked) {
      const impplanResp = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: promptImpplan,
        }),
      });
    
      if (impplanResp.ok) {
        const impplanData = await impplanResp.json();
        const parsedImpplanData = impplanData.bot.trim();
        const table = document.createElement('table');
        table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');
        const lines = parsedImpplanData.split('\n');
        let rowCount = 0;
        for (const line of lines) {
          if (/^\d/.test(line)) {
            const row = document.createElement('tr');
            if (rowCount % 2 === 0) {
                row.setAttribute('style', 'background-color: darkgrey;');
            } else {
                row.setAttribute('style', 'background-color: lightgrey;');
            }
            const number = line.match(/^\d+/)[0];
            const numberCell = document.createElement('td');
            numberCell.textContent = number;
            numberCell.style.padding = "10px";
            const textCell = document.createElement('td');
            textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;
            row.appendChild(numberCell);
            row.appendChild(textCell);
            table.appendChild(row);
            rowCount++;
          } 
        }
        impplanDiv.innerHTML = '';
        impplanDiv.appendChild(table);
        } else {
          const err = await impplanResp.text();
          impplanDiv.innerHTML = 'Something went wrong';
          alert(err);
        }
      }
    
  
      
  
  
  
  
  
  


  
      const changeplanCheckbox = document.getElementById("changeplanCheckbox");
      if (changeplanCheckbox.checked) {
        const changeplanResp = await fetch('http://localhost:5000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: promptChangeplan,
          }),
        });
      
        if (changeplanResp.ok) {
          const changeplanData = await changeplanResp.json();
          const parsedChangeplanData = changeplanData.bot.trim();
          const table = document.createElement('table');
          table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');
          const lines = parsedChangeplanData.split('\n');
          let rowCount = 0;
          for (const line of lines) {
            if (/^\d/.test(line)) {
              const row = document.createElement('tr');
              if (rowCount % 2 === 0) {
                  row.setAttribute('style', 'background-color: darkgrey;');
              } else {
                  row.setAttribute('style', 'background-color: lightgrey;');
              }
              const number = line.match(/^\d+/)[0];
              const numberCell = document.createElement('td');
              numberCell.textContent = number;
              numberCell.style.padding = "10px";
              const textCell = document.createElement('td');
              textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;
              row.appendChild(numberCell);
              row.appendChild(textCell);
              table.appendChild(row);
              rowCount++;
            } 
          }
          changeplanDiv.innerHTML = '';
          changeplanDiv.appendChild(table);
          } else {
            const err = await changeplanResp.text();
            changeplanDiv.innerHTML = 'Something went wrong';
            alert(err);
          }
        }
      
    
        
    
   


        
      
  
  
  
  
  
  


  
      const metricsCheckbox = document.getElementById("metricsCheckbox");
      if (metricsCheckbox.checked) {
        const metricsResp = await fetch('http://localhost:5000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: promptMetrics,
          }),
        });
      
        if (metricsResp.ok) {
          const metricsData = await metricsResp.json();
          const parsedMetricsData = metricsData.bot.trim();
          const table = document.createElement('table');
          table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');
          const lines = parsedMetricsData.split('\n');
          let rowCount = 0;
          for (const line of lines) {
            if (/^\d/.test(line)) {
              const row = document.createElement('tr');
              if (rowCount % 2 === 0) {
                  row.setAttribute('style', 'background-color: darkgrey;');
              } else {
                  row.setAttribute('style', 'background-color: lightgrey;');
              }
              const number = line.match(/^\d+/)[0];
              const numberCell = document.createElement('td');
              numberCell.textContent = number;
              numberCell.style.padding = "10px";
              const textCell = document.createElement('td');
              textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;
              row.appendChild(numberCell);
              row.appendChild(textCell);
              table.appendChild(row);
              rowCount++;
            } 
          }
          metricsDiv.innerHTML = '';
          metricsDiv.appendChild(table);
          } else {
            const err = await metricsResp.text();
            metricsDiv.innerHTML = 'Something went wrong';
            alert(err);
          }
        }
      
    
        









        
      const oppsCheckbox = document.getElementById("oppsCheckbox");
      if (oppsCheckbox.checked) {
        const oppsResp = await fetch('http://localhost:5000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: promptOpps,
          }),
        });
      
        if (oppsResp.ok) {
          const oppsData = await oppsResp.json();
          const parsedOppsData = oppsData.bot.trim();
          const table = document.createElement('table');
          table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');
          const lines = parsedOppsData.split('\n');
          let rowCount = 0;
          for (const line of lines) {
            if (/^\d/.test(line)) {
              const row = document.createElement('tr');
              if (rowCount % 2 === 0) {
                  row.setAttribute('style', 'background-color: darkgrey;');
              } else {
                  row.setAttribute('style', 'background-color: lightgrey;');
              }
              const number = line.match(/^\d+/)[0];
              const numberCell = document.createElement('td');
              numberCell.textContent = number;
              numberCell.style.padding = "10px";
              const textCell = document.createElement('td');
              textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;
              row.appendChild(numberCell);
              row.appendChild(textCell);
              table.appendChild(row);
              rowCount++;
            } 
          }
          oppsDiv.innerHTML = '';
          oppsDiv.appendChild(table);
          } else {
            const err = await oppsResp.text();
            oppsDiv.innerHTML = 'Something went wrong';
            alert(err);
          }
        }
      






    
   


  
        









        
        const threatsCheckbox = document.getElementById("threatsCheckbox");
        if (threatsCheckbox.checked) {
          const threatsResp = await fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prompt: promptThreats,
            }),
          });
        
          if (threatsResp.ok) {
            const threatsData = await threatsResp.json();
            const parsedThreatsData = threatsData.bot.trim();
            const table = document.createElement('table');
            table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');
            const lines = parsedThreatsData.split('\n');
            let rowCount = 0;
            for (const line of lines) {
              if (/^\d/.test(line)) {
                const row = document.createElement('tr');
                if (rowCount % 2 === 0) {
                    row.setAttribute('style', 'background-color: darkgrey;');
                } else {
                    row.setAttribute('style', 'background-color: lightgrey;');
                }
                const number = line.match(/^\d+/)[0];
                const numberCell = document.createElement('td');
                numberCell.textContent = number;
                numberCell.style.padding = "10px";
                const textCell = document.createElement('td');
                textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;
                row.appendChild(numberCell);
                row.appendChild(textCell);
                table.appendChild(row);
                rowCount++;
              } 
            }
            threatsDiv.innerHTML = '';
            threatsDiv.appendChild(table);
            } else {
              const err = await threatsResp.text();
              threatsDiv.innerHTML = 'Something went wrong';
              alert(err);
            }
          }
        
  
  
  
  
  
  
      
     
  
  
  // Submit the third prompt to the server
  const benefitsCheckbox = document.getElementById("benefitsCheckbox");
  if (benefitsCheckbox.checked) {
    const benefitsResp = await fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: promptBenefits,
      }),
    });

    if (benefitsResp.ok) {
      const benefitsData = await benefitsResp.json();
      const parsedBenefitsData = benefitsData.bot.trim(); // trims any trailing spaces/'\n' 

      // create a table element
      const table = document.createElement('table');

      // add a style attribute to the table element to set the background color of the first column
      table.setAttribute('style', 'td:nth-child(1) { background-color: lightgrey; }');

      // split the data by lines
      const lines = parsedBenefitsData.split('\n');
      let rowCount = 0; // keep track of the number of rows
      for (const line of lines) {

        // check if the line starts with a number
        if (/^\d/.test(line)) {

          // create a new row for the table
          const row = document.createElement('tr');

          // set the background color of the row based on the row count
          if (rowCount % 2 === 0) {
              row.setAttribute('style', 'background-color: darkgrey;');
          } else {
              row.setAttribute('style', 'background-color: lightgrey;');
          }

          // extract the number from the line
          const number = line.match(/^\d+/)[0];

          // create a cell for the number
          const numberCell = document.createElement('td');
          numberCell.textContent = number;
          numberCell.style.padding = "10px"; // add 10px padding to the cell

          // create a cell for the text
          const textCell = document.createElement('td');
          textCell.textContent += ` ${line.substring(number.length).replace(/\.\s/, "")}`;

          // append the cells to the row
          row.appendChild(numberCell);
          row.appendChild(textCell);

          // append the row to the table
          table.appendChild(row);

          rowCount++; // increment the row count
        
        } 
        
      }

      // clear the benefitsDiv element
      benefitsDiv.innerHTML = '';

      // append the table to the benefitsDiv element
      benefitsDiv.appendChild(table);

    } else {
      const err = await benefitsResp.text();

      benefitsDiv.innerHTML = 'Something went wrong';
      alert(err);
    }

  }

  // to clear the textarea input 
  input.value = "";

}


document.addEventListener("DOMContentLoaded", function() {
  // Get all checkboxes with the attribute 'data-initial'
  var initialCheckboxes = document.querySelectorAll('input[data-initial]');

  // Loop through all the checkboxes
  initialCheckboxes.forEach(function(checkbox) {
    
    // Check the checkbox if it has the 'data-initial' attribute
    checkbox.checked = checkbox.hasAttribute('data-initial');
  });
});