import './App.css';
import Form from './components/Form';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}>
        <Grid item xs={4}>
          <Container fixed={true}>
            <Form />
          </Container>
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
