import React, { Component } from 'react';
import {Form} from "reactstrap"

const RESET_VALUES = {id: '', name: '', category: '', price: ''}

class ProductForm extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
        }
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
   

    handleSave(e) {
        this.props.onSave(this.state.product)
        this.setState({
             product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); 
   }
   
    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
            })
    }

        render(){
        return (
            <Form>
                <h2>Enter a new product</h2>
                <div className="form-group">
                    <label>Name</label><br/>
                    <input type="text" onChange={this.handleChange} value={this.state.product.name} /><br/>
                </div>
                <div className="form-group">
                    <label>Category</label><br/>
                    <input type="text" onChange={this.handleChange} value={this.state.product.category}/><br/>
                </div>
                <div className="form-group">
                    <label>Price</label><br/>
                    <input type="text" onChange={this.handleChange} value={this.state.product.price}/><br/>
                </div>
                <button class="btn btn-primary" type="submit" onClick={this.handleSave}>Save</button>
            </Form>
        );  
    }
}



export default ProductForm