import react from'react'
import '../App.css';
function Profile() {
  return (
    <div className="profile">
     <div>
        <img/>
        <p>معصومه علیزاده</p>
        <p>0123456789</p>
     </div>
     <div>
        <charge/>
        <div>
            <h1>خدمات فعال</h1>
            <p>بسته پیامک هغتگی</p>
            <p>بسته اینترنت ماهانه</p>
        </div>
     </div>
    </div>
  );
}

export default Profile;