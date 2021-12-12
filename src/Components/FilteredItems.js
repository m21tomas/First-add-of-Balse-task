// import React from 'react';
import {Table} from 'react-bootstrap';
import ActualItems from './ActualItems';

function FilteredItems() {

    return(
	<div className="container">
            <div className="row">
                <div className="col-12">
                    <p style={{ "paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px" }}>
                        Filtered products that price is less than 200:</p>
                </div>
            </div>

            <Table style={{"width": "auto"}} className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {ActualItems.filter(item => item.price < 200).map(item => (
                        <tr>
                            <th>{item.title}</th>
                            <th>{item.price}</th>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
    </div>
    );
}

export default FilteredItems;