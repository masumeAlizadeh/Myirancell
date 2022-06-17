import react from'react'
import '../App.css';
import { SiBookmeter } from 'react-icons/si';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { AiOutlineWifi } from 'react-icons/ai';
import { AiOutlineTool } from 'react-icons/ai';
 import iranicon from '../myirancell-icon.png'
function Menu() {
  return (
    <div className="menu">
        <div className='icon-menu'>
            <img src={iranicon} className="iconp"/>
            <p>ایرانسل من</p>
        </div>
        <div>
            <input type="search" placeholder='جستجو'/>
        </div>
        <br/>
        <div>
       <p className='haveleftb'><AiOutlineHome/>صفحه اصلی</p>
         <p><AiOutlineFolderAdd/>شارژ سیم کارت</p>
      <p><AiOutlineWifi/>اینترنت</p>
        <p> <SiBookmeter/>افزایش و فروش</p>
         
         <p><AiOutlineTool/>خدمات</p>
         <p>مدیریت</p>
         <p>مدیریت خدمات</p>
         <p>مدیریت سیم کارت</p>
         <p>سوالات متداول</p>
         <p>ارتباط با ما</p>
        </div>
    
    </div>
  );
}

export default Menu;