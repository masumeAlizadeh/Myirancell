import react from'react'
function Tablemain() {
  return (
    <div className="App">
     <table>
        <th>
        <td>تاریخ انقضای بسته</td>
        <td>نام بسته</td>
        <td>تخفیف</td>
        <td>قیمت</td>
        <td> </td>
        </th>
        <tr>
        <td>14شهریور</td>
        <td>بسته اینترنت 3ماهه</td>
        <td>20%</td>
        <td>130000</td>
        <td><button>خرید</button></td>
        </tr>
        <tr>
        <td>12خرداد</td>
        <td>بسته ترکیبی هفته ای</td>
        <td>45%</td>
        <td>45000</td>
        <td><button>خرید</button></td>
        </tr>
        <tr>
            <td>15تیر</td>
            <td>بسته لینترنتی یک ماهه</td>
            <td>15%</td>
            <td>50000</td>
            <td><button>خرید</button></td>
        </tr>
     </table>
    </div>
  );
}

export default Tablemain;