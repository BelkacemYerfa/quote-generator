import './App.css';
import { Card } from './components/Card';
import {QueryClient , QueryClientProvider} from '@tanstack/react-query' ; 


function App() {
  const client = new QueryClient() ; 
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <main>
          <Card />
        </main>
      </QueryClientProvider>
    </div>
  );
}

export default App;
