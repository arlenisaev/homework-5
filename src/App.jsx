import { useDispatch } from 'react-redux';
import PostList from './components/PostList';

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <PostList dispatch={dispatch} />
    </div>
  );
}

export default App;
