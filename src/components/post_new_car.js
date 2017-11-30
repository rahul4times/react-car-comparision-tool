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
      </div>
    );
  }
  render(){
    return(
      <form>
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
      </form>
    );
  }
}
export default reduxForm({
  form: 'AddNewCar'
})(PostNewCar);
