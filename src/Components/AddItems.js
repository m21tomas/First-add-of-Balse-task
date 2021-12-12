import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ActualItems from './ActualItems';

class AddItems extends Component{
    constructor(props) {
        super(props);
        this.state = {
          key : this.props.key,
          cardTitle : this.props.title,
          cardQuantity : this.props.quantity,
          imageUrl : this.props.imageUrl,
          desc : this.props.description,
        };
      }
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p  style={{"paddingTop": "20px", "textAlign": "center", "fontWeight": "bold", "fontSize": "20px"}}> 
                    We have these products:</p>
                </div>
             </div>
             <div className="row">
                 {
                     ActualItems.map(fig => (
                        <div key={fig.id} className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div style={{"textAlign": "center"}} className="card">
                                <img
                                    src={fig.imageUrl}
                                    className="card-img-top"
                                    alt={fig.id}
                                />
                                <h5 className="card-title">{fig.title}</h5>
                                <p className="card-text">{fig.description}</p>
                                <p className="card-text">Price: {fig.price}</p>
                                <p className="card-text">Quantity: {fig.quantity}</p>
                            </div>
                         </div>
                     ))
                 }
             </div>
        </div> 
        ); 
    }
};

export default AddItems;