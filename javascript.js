    const container = document.querySelector('#container');
    const customContainer = document.querySelector('#customContainer');
    const body =  document.querySelector('body')
    const reset = document.createElement('button');
        reset.textContent = 'reset';
        body.appendChild(reset)
        reset.addEventListener('click', function() {
            window.location.reload();
        });

    const input = document.createElement('button');
        input.textContent = 'custom grid';
        body.insertBefore(input, container);
        input.addEventListener('click', function() {
            container.remove();
            customGrid();
        });

    let customRow;
    let customCol;
function customGrid() {
    customRow = parseInt(prompt('enter a custom row'));
    customCol = parseInt(prompt('enter a custom column'));
    if (customRow <= 0 || customRow >= 100 || customCol <= 0 || customCol >= 100) {
        alert('error');
        customGrid();
    } else {
    genCustomRow(customRow, customCol);
    }
}

function genCustomRow(rowNum, colNum) {
    for (let i = 0; i < rowNum; i++) {
        let customRow = document.createElement('div');
        customRow.className = 'customRow';
        customContainer.appendChild(customRow);
        for (let j = 0; j < colNum; j++) {
            let customCol = document.createElement('div');
            customCol.className = 'customCol';
            customRow.appendChild(customCol);
            customCol.addEventListener('mouseover', function() {
            customCol.className = 'hoverEffect';
    });
        }
    }
}

function genGrid() {
    genRow(16, 16);
}

function genRow(rowNum, colNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
        for (let j = 0; j < colNum; j++) {
            let col = document.createElement('div');
            col.className = 'col';
            row.appendChild(col);
            col.addEventListener('mouseover', function() {
            col.className = 'hoverEffect';
    });
        }
    }
}

genGrid();


    