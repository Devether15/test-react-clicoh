
import Home from './components/Home';
import { ContextDataProvider } from './context/DataContext';

function App() {
  return (   
    <ContextDataProvider>     
      <div>
          <Home/>             
      </div>  
    </ContextDataProvider>    
  );
}

export default App;
