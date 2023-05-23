import logo from './logo.svg';
import './App.css';
import SubComp from './component/example1/subcomp';
import MyComp from './component/example1/mycomp';
import MyLoginForm from './component/example3/myloginform';
import HomeComp from './component/example3/homecomp';
import LoginComp from './component/example2/logincomp';
import DisplayComp from './component/example_customhook/displaycomp';
import MyRefComp from './component/refdemo/userefdemo';
import CurrencyComp from './component/refdemo/forwardrefdemo/currencycomp';
function App() {
  return (
    <div>
     <CurrencyComp/>
    </div>
  );
}

export default App;
