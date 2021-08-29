//在react启用emmet提示功能https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      {/* 注意 必须要包裹在一个父元素内 */}
      <Header />
    </div>
    
  );
}
export default App;
