const container = document.getElementById('container');
const resizeButton = document.getElementById('resize-button');

// Function to create the grid
function createGrid(gridSize) {
    // Clear existing grid
    container.innerHTML = '';

    // Set the size of each square based on the grid size
    const squareSize = 960 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect for coloring
        square.addEventListener('mouseover', () => {
            let currentColor = square.style.backgroundColor;
            if (!currentColor) {
                // Set a random color initially
                square.style.backgroundColor = randomColor();
                square.dataset.opacity = 0.1; // Start opacity tracking
            } else {
                // Darken the color progressively
                let opacity = parseFloat(square.dataset.opacity) + 0.1;
                if (opacity <= 1) {
                    square.dataset.opacity = opacity;
                    square.style.backgroundColor = darkenColor(square.style.backgroundColor, opacity);
                }
            }
        });

        container.appendChild(square);
    }
}

// Function to generate a random RGB color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to darken an RGB color based on opacity
function darkenColor(color, opacity) {
    const rgb = color.match(/\d+/g).map(Number);
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
}

// Function to handle resizing the grid
resizeButton.addEventListener('click', () => {
    let gridSize = prompt('Enter the number of squares per side (maximum 100):');
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createGrid(gridSize);
    }
});

// Initialize default grid
createGrid(16);
