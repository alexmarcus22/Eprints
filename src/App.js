import './App.css';
import Form from './components/Form';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Box>
        <Container maxWidth="sm">
          <Form />
        </Container>
      </Box>
    </div>
  );
}

export default App;
