// Game data (in-memory)
let games = [
    { id: 1, teamA: "Lakers", teamB: "Warriors", scoreA: 102, scoreB: 96 },
    { id: 2, teamA: "Celtics", teamB: "Heat", scoreA: 89, scoreB: 85 },
];

// Function to render games
function renderGames() {
    const gameList = document.getElementById("game-list");
    gameList.innerHTML = "";

    games.forEach((game) => {
        const gameDiv = document.createElement("div");
        gameDiv.className = "game";
        gameDiv.innerHTML = `
            <div>
                <strong>${game.teamA}</strong> (${game.scoreA}) vs 
                <strong>${game.teamB}</strong> (${game.scoreB})
            </div>
            <div>
                <button onclick="updateGame(${game.id})">Update</button>
                <button onclick="deleteGame(${game.id})">Delete</button>
            </div>
        `;
        gameList.appendChild(gameDiv);
    });
}

// Add a new game
document.getElementById("add-game-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const teamA = document.getElementById("team-a").value;
    const teamB = document.getElementById("team-b").value;
    const scoreA = parseInt(document.getElementById("score-a").value, 10);
    const scoreB = parseInt(document.getElementById("score-b").value, 10);

    const newGame = {
        id: games.length + 1,
        teamA,
        teamB,
        scoreA,
        scoreB,
    };

    games.push(newGame);
    renderGames();
    event.target.reset(); // Clear the form
});

// Delete a game
function deleteGame(gameId) {
    games = games.filter((game) => game.id !== gameId);
    renderGames();
}

// Update a game (for simplicity, just increments scores)
function updateGame(gameId) {
    const game = games.find((g) => g.id === gameId);
    if (game) {
        game.scoreA += 1;
        game.scoreB += 1;
    }
    renderGames();
}

// Initial render
renderGames();
