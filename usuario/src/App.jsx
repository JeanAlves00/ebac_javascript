import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <h1>Componente para perfil de usuario</h1>
      <UserProfile 
        name="John Doe" 
        email="2X3tP@example.com"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
}

export default App;