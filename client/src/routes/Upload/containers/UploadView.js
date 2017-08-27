import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions  from '../store/upload'

import {Form, Select, Input, Button, Upload, Icon} from 'antd'
const FormItem = Form.Item


//this usage need install `babel-plugin-transform-decorators-legacy` plugin  
// but  I don't recommend it  at here  ，because  it's not easy to understand ,
// @connect(
//   state => ({
//     Upload: state.Upload
//   }),
//   dispatch => ({
//     actions: bindActionCreators(actions, dispatch)
//   })
// )
class UploadView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [],
    }

  }

  render() {
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    }
    const ImageProps = {
      action: '/api/picture/upload-pic',
      listType: 'picture-card',
      fileList: [],

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
              <Input type="textarea" placeholder="起个标题吧1" id="error"/>
            )}

          </FormItem>

          {/*<FormItem*/}
          {/*{...formItemLayout}*/}
          {/*label="Upload"*/}
          {/*extra=""*/}
          {/*>*/}
          {/*{getFieldDecorator('upload', {*/}
          {/*valuePropName: 'fileList',*/}
          {/*})(*/}
          {/*<Upload  {...ImageProps} fileList={this.state.fileList}>*/}
          {/*<Button>*/}
          {/*<Icon type="upload"/> 点击上传*/}
          {/*</Button>*/}
          {/*</Upload>*/}
          {/*)}*/}
          {/*</FormItem>*/}


          <FormItem
            wrapperCol={{span: 12, offset: 6}}
          >
            <Button type="primary" htmlType="submit">保存</Button>
          </FormItem>
        </Form>


        <Upload  {...ImageProps} fileList={this.state.fileList}>
          <Button>
            <Icon type="upload"/> 点击上传
          </Button>
        </Upload>
        

      </div>
    )
  }

  componentDidMount = () => {

  }
  /**
   * form submit
   * @param e
   */
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this.props', this.props)
    const {actions} = this.props
    actions.dispatchAuqaticActivity()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    // let header = new Headers({
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': 'true',
    //   'Content-Type': 'multipart/form-data',
    //
    // });
    //
    // let sentData = {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   header: {
    //     'Access-Control-Allow-Origin': '*',
    //     // 'Access-Control-Allow-Credentials': 'true',
    //     // 'Content-Type': 'multipart/form-data',
    //   },
    //   credentials: 'same-origin'
    // };
    //
    // // fetch('http://api.douban.com/v2/movie/in_theaters', sentData)
    // fetch('http://localhost:8080/user', sentData)
    //   .then(function (response) {
    //     console.log(response);
    //   }).catch(function (error) {
    //   console.log('Request failed', error)
    // });

  }

  addPet() {
    const {actions} = this.props
    const data = {
      title: 'title1',
      body: 'body1'
    }
    actions.dispatchPetAdd({}, data).then((rst)=> {
      console.log('rst', rst)
    }).catch((error)=> {
      console.log('error', error)
    })
  }
}

UploadView.propTypes = {};
//map props
function mapStateToProps(state) {
  return {Upload: state.Upload}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, actions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(UploadView))

