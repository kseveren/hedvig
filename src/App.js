import ReactModal from 'react-modal';
import { ThemeProvider } from 'styled-components';
import { MODAL_ROOT } from '@constants';
import { GlobalStyles, theme } from '@styles';
import { PerilsSection } from './sections/PerilsSection';

ReactModal.setAppElement(MODAL_ROOT);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PerilsSection />
    </ThemeProvider>
  );
}

export default App;
