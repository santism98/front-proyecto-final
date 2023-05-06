import { AppRouter } from "./routes/AppRouter";
import { UserProvider } from "../src/auth/context/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <header className="bg-md pd-sm txt-cntr">Header</header>
        <main>
      

        <AppRouter />

       
          
        </main>
     
        <footer className="bg-md pd-sm txt-cntr">Footer </footer>
      </UserProvider>
    </>
  );
}

export default App;
