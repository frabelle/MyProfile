import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './styles/Theme'
import TopBar from './components/topbar'
import Cover from './components/cover'
import Profile from './pages/profile';
import Footer from './pages/footer';

function App() {
  return (
    <MuithemeProvider theme={theme}>
      
      <TopBar/>
      <Cover/>

      <Profile/>
      
      <div className="App-background-footer">
        <Footer/>
      </div>
      

    </MuithemeProvider>
  );
}

export default App;
