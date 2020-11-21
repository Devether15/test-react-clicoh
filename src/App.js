
import Header from './components/Header';
import { ContextDataProvider } from './context/DataContext';


function App() {
  return (   
    <ContextDataProvider>
          <div className="fit-screen">
              <Header/>             
          </div>
    </ContextDataProvider>    
  );
}

export default App;
