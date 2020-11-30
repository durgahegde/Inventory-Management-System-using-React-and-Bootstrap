import React, {Component} from "react";
import ProductRow from "./ProductRow";
import {Table} from 'reactstrap'


class ProductTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            filterText: props.filterText
        };
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleDestroy(id) {
        this.props.onDestroy(id)
   }
 
    
    render(){
        return(
            <div>
                <Table striped bordered hover style={{marginTop: 30}}>
                            <thead style={{background: "gray"}}>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                            </thead>
                            <tbody>
                                {Object.values(this.state.product).filter(product=>{
                                    if(this.props.filterText === undefined){
                                        return true;
                                    }
                                        return product.name.indexOf(this.props.filterText) >=0;
                                    })
                                    .map(product =>{
                                        return(
                                            <ProductRow product={product} key={product.id} onDestroy={this.handleDestroy} />
                                        );
                                    })}    
                            </tbody>
                </Table>
            </div>
        )
    }

}


export default ProductTable;