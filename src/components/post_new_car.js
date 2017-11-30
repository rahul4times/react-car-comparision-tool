import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNewCar extends Component{
  renderField(field){
    return(
      <div>
        <label>{field.label}</label>
        <input
          className="form-style"
          type="text"
          {...field.input}
        />

        {/*--+--* Errors are coming from errors object *--+--*/}
        {field.meta.errors}
      </div>
    );
  }
  onSubmit(values){
    console.log('values: ', values);
  }
  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <br/>
        <Field
          label="Year "
          name="year"
          component={this.renderField}
        />
        <br/>
        <Field
          label="Make "
          name="make"
          component={this.renderField}
        />
        <br/>
        <Field
          label="Model "
          name="model"
          component={this.renderField}
        />
        <br/>
        <Field
          label="Miles "
          name="miles"
          component={this.renderField}
        />
        <br/>
        <Field
          label="Price "
          name="price"
          component={this.renderField}
        />
        <br/>
        <Field
          label="Image Link "
          name="photo_url"
          component={this.renderField}
        />
        <br/>
        <button type="submit">Add</button>
      </form>
    );
  }
}

function validate(values){
  // creating error object to show errors
  const errors = {};

  // validating inputs from values
  if(!values.year){
    errors.year = "Enter year!";
  }
  if(!values.make){
    errors.make = "Enter make!";
  }
  if(!values.model){
    errors.model = "Enter model!";
  }
  if(!values.miles){
    errors.miles = "Enter miles!";
  }
  if(!values.price){
    errors.price = "Enter price!";
  }
  if(!values.photo_url){
    errors.photo_url = "Enter image url!";
  }

  // if error object is empty then redux-form is ready to submit
  // if there is any value in error object then redux-form will stop immidiatly
  return errors;
}

export default reduxForm({
  // validate function is coming from above
  // because key validate and value validate was same so just validate is below
  validate,
  form: 'AddNewCar'
})(PostNewCar);
