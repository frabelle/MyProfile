import logo from './logo.svg';
import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './styles/Theme'
import Banner from './components/banner'
import TopBar from './components/topbar'
import Cover from './components/cover'

function App() {
  return (
    <MuithemeProvider theme={theme}>
      
      <TopBar/>

      <Cover/>
      

    </MuithemeProvider>
  );
}

export default App;
