import logo from './logo.svg';
import './App.css';
import First from './components/First';
import './styles/style.css'
import Menu from './components/Menu';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import TeamMembers from './components/TeamMembers';
function App() {
  return (
    <>
    {/* <img src={bannerimg}/> */}
<Menu></Menu>
<TeamMembers></TeamMembers>
<Footer cname="Demo Company" copyright="2024-2025">

</Footer>
  </>
  );
}
export default App;
