import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import './App.css';

const Hello = () => {
  return (
    <>
      <div className="buttongroup">
        <Button variant="contained" size="small" className="button">
          N
        </Button>
        <Button variant="contained" size="small" className="button">
          C
        </Button>
        <Button variant="contained" size="small" className="button">
          S
        </Button>
      </div>
      <Container maxWidth="sm" className="container">
        <TextareaAutosize
          minRows={4}
          maxRows={10}
          placeholder="..."
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
          style={{ width: 500, height: 300 }}
        />
      </Container>
      <Button variant="contained" className="mainButton">
        Contained
      </Button>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
