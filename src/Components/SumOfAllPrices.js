
import ActualItems from './ActualItems';

function SumOfAll(){
    return ActualItems.reduce((sum, item) => {return sum + item.quantity*item.price}, 0);
}

function SumOfAllPrices() {

return (
<div className="container">
    <div className="row">
        <div className="col-12">
            <p style={{ "paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px" }}>
                Sum of all items prices is: {SumOfAll()}</p>
        </div>
    </div>
</div>);

}
export default SumOfAllPrices;