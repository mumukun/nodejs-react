import React from 'react'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Field, reduxForm, formValues, formValueSelector} from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import {grey400} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'
import Dropzone from 'react-dropzone'

import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import FileFileUpload from 'material-ui/svg-icons/file/file-upload'

import PageBase from 'src/components/Layout/PageBase'
// import asyncValidate from './asyncValidate'
import * as actions from '../store/upload'

// const validate = values => {
//   const errors = {}
//   const requiredFields = ['intro']
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = '必填'
//     }
//   })
//   // if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//   //   errors.email = 'Invalid email address'
//   // }
//   return errors
// }

class UploadFormPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      files: [],
      fileList: []
    }
  }

  componetDidMount () {
  }

  render () {
    console.log('this.state', this.state)
    const styles = {
      toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
      },
      toggleLabel: {
        color: grey400,
        fontWeight: 100
      },
      buttons: {
        marginTop: 30,
        float: 'right'
      },
      saveButton: {
        marginLeft: 5
      }, fileButton: {
        margin: 12
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0
      },
      largeIcon: {
        width: 60,
        height: 60
      },
      large: {
        width: 120,
        height: 120,
        padding: 30,
        position: 'relative',
        marginLeft: '40px'
      }
    }

    return (
      <PageBase title="上传图片"
                navigation="上传图片">
        <form onSubmit={this.handleSubmit}>
          <div>
            <Field
              name="intro" fullWidth={true} component={this.renderTextField} label="说说这张照片"
            />
          </div>
          <section>
            <Dropzone onDrop={this.onDrop.bind(this)} accept="image/*">
              <p style={{textAlign: 'center'}}>请点击或拖拽上传文件</p>
              <IconButton iconStyle={styles.largeIcon}
                          style={styles.large}><FileFileUpload/></IconButton>
            </Dropzone>
            <aside>
              <h2>上传文件</h2>
              <ul>
                {
                  this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
                {this.state.fileList.map((item, index) => {
                  return <img key={index} src={item || ''} style={{maxWidth: '25%'}}></img>
                })}
              </ul>
            </aside>
          </section>


          <div style={styles.buttons}>
            <Link to="/">
              <RaisedButton label="取消"/>
            </Link>
            <RaisedButton label="保存"
                          style={styles.saveButton}
                          type="submit"
                          primary={true}/>
          </div>
        </form>
      </PageBase>
    )
  }

  onDrop (files) {
    const that = this
    this.setState({
      files
    })
    const {actions} = this.props

    files.forEach((file, index) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      // const fileAsBinaryString = reader.result
      reader.onload = () => {
        actions.fetchImageUpload({}, {filename: '123', imgData: reader.result}).then(rst => {
          console.log('rst', rst)
          console.log('rst.status', rst.status)
          if (rst.status == '20000') {
            that.setState({
              fileList: that.state.fileList.concat(rst.data.imageUrl)
            })
          }
        })
      }
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')

    })

  }

  handleChange = ({files}) => {
    console.log(files)
  }

  /**
   * 保存
   * @param event
   * @param values
   * @param test
   */
  handleSubmit = (event, values, test) => {
    event.preventDefault()
    const {actions} = this.props
    const {UploadFormPage} = this.props.momentForm
    console.log('this.state', this.state)
    const param = {
      imageUrl: this.state.fileList.join(','),
      userId: 1,
      intro: UploadFormPage.values.intro || ''
    }
    actions.fetchMomentSave({}, param).then(rst=>{
      console.log('rst====',rst)
    })

  }

  renderTextField = ({
                       input,
                       label,
                       meta: {touched, error},
                       ...custom
                     }) =>
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />

  renderCheckbox = props => (
    <Checkbox label={props.label}
              checked={props.value ? true : false}
              onCheck={props.onChange}/>
  )

  renderSelectField = props => (
    <SelectField
      floatingLabelText={props.label}
      errorText={props.touched && props.error}
      {...props}
      onChange={(event, index, value) => props.onChange(value)}>
    </SelectField>
  )

}

const MomentForm = reduxForm({
  form: 'UploadFormPage'// a unique identifier for this form
  // validate
})(UploadFormPage)

const mapStateToProps = state => {
  console.log('state======', state)
  return {
    momentForm: state.form
  }
  // myValues: selector(state, 'lastName')
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MomentForm)

