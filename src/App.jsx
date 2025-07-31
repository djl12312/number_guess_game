import NumberGuessGame from "./components/NumberGuessGame";

const getRandomTarget = () => Math.floor(Math.random() * 100) + 1;

const App = () => {
  return (
    <div className="bg-yellow-100 min-h-screen flex justify-center items-center">
      <NumberGuessGame />
    </div>
  );
};

export default App;
