import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { CreateNote, CreateUser, Navigation, NotesList } from './components';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route element={NotesList} />
            <Route exact path="/" Component={Home} />
            <Route path="/edit/:id" Component={CreateNote} />
            <Route path="/create/note" Component={CreateNote} />
            <Route path="/create" Component={CreateUser} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
