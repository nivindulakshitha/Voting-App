import Card from "./Components/Card";

function App() {
  const players = [
    {
      name: "Cristiano Ronaldo",
      votes: 0,
      image: "/imgs/o4L2z8Ay_400x400.jpg"
    },
    {
      name: "Leo Messi",
      votes: 0,
      image: "/imgs/Y0kJbT20_400x400.jpg"
    },
    {
      name: "Neymar Jr",
      votes: 0,
      image: "/imgs/LgubsOwx_400x400.jpg"
    },
  ];

  return (
    <div className="App">
      {players.map((player, index) => (
        <Card key={index} player={player} />
      ))}
    </div>
  );
}

export default App;
