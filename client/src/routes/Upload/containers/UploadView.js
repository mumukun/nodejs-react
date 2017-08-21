import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions  from '../store/upload'
import {Form, Select, Input, Button} from 'antd'
const FormItem = Form.Item

@connect(
  state => ({
    Upload: state.Upload
  }),
  dispatch => ({
    actions: bindActionCreators(Object.assign({}, actions), dispatch)
  })
)
class UploadView extends React.Component {
  render() {
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    }
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit.bind(this)}
        >

          <FormItem
            {...formItemLayout}
            label="相册标题"
          >
            {getFieldDecorator('comment')(
              <Input type="textarea" placeholder="起个标题吧" id="error"/>
            )}

          </FormItem>

          <FormItem
            wrapperCol={{span: 12, offset: 6}}
          >
            <Button type="primary" htmlType="submit">保存</Button>
          </FormItem>
        </Form>
      </div>
    )
  }

  componentDidMount = () => {

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
}

export default UploadView = Form.create()(UploadView)
