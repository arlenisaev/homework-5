import store from './redux/store';
import PostList from './components/PostList';

function App() {
  return (
    <div >
      <PostList store={store}/>
    </div>
  );
}

export default App
