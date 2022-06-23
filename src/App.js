import ReactModal from 'react-modal';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '@styles';
import { PerilsSection } from './sections/PerilsSection';

ReactModal.setAppElement('#root');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PerilsSection />
    </ThemeProvider>
  );
}

export default App;
