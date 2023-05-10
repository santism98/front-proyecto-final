import { AppRouter } from "./routes/AppRouter";
import { UserProvider } from "../src/auth/context/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <header className="bg-md pd-sm txt-cntr"></header>
        <main>
      

        <AppRouter />

       
          
        </main>
     
        <footer className="bg-md pd-sm txt-cntr"></footer>
      </UserProvider>
    </>
  );
}

export default App;
