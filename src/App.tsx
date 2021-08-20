import './App.css';
import { Header } from './shared/header/header.component';
import { Sidebar } from './shared/sidebar/sidebar.component';

const App = () => {
  
  return (
    <section id="container"  className={''} >
      <Header/>
      <Sidebar/>
    </section>
  );
}

export default App;
