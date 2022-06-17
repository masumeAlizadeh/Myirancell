import react from'react'
import '../App.css';
import Tablemain from'./src/components/Tablemain'
import bannerimg from'../MyIrancell-2-1.jpg'
// import Chartmain from'./src/components/Chartmain'
function Mainpage() {
  return (
    <div className="mainpage">
        <div  className='banner'>
    <img src={bannerimg} className="banerimg"/>
    <p>main</p>
        </div>
     <div>
        {/* <Chartmain/> */}
     </div>
     <div>
        <Tablemain/>
     </div>
    </div>
  );
}

export default Mainpage;