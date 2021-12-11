import logo from './logo.svg';
import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './styles/Theme'
import Banner from './components/banner'

function App() {
  return (
    <MuithemeProvider theme={theme}>
      
      <Banner/>

    </MuithemeProvider>
  );
}

export default App;
