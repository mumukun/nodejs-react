import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Dropzone from 'react-dropzone'

import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';

import PageBase from 'src/components/Layout/PageBase';

class UploadFormPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {files: []}
  }

  componetDidMount() {

  }

  render() {
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
        margin: 12,
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
      largeIcon: {
        width: 60,
        height: 60,
      },
      large: {
        width: 120,
        height: 120,
        padding: 30,
        position: "relative",
        marginLeft: "40px"
      }
    };

    return (
      <PageBase title="上传图片"
                navigation="上传图片">
        <form>

          <TextField
            hintText="Name"
            floatingLabelText="Name"
            fullWidth={true}
          />

          <SelectField
            floatingLabelText="City"
            value=""
            fullWidth={true}>
            <MenuItem key={0} primaryText="London"/>
            <MenuItem key={1} primaryText="Paris"/>
            <MenuItem key={2} primaryText="Rome"/>
          </SelectField>

          <DatePicker
            hintText="Expiration Date"
            floatingLabelText="Expiration Date"
            fullWidth={true}/>
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
              </ul>
            </aside>
          </section>

          <div style={styles.toggleDiv}>
            <Toggle
              label="Disabled"
              labelStyle={styles.toggleLabel}
            />
          </div>

          <Divider/>


          <div style={styles.buttons}>
            <Link to="/">
              <RaisedButton label="Cancel"/>
            </Link>

            <RaisedButton label="Save"
                          style={styles.saveButton}
                          type="submit"
                          primary={true}/>
          </div>
        </form>
      </PageBase>
    )
  }

  onDrop(files) {
    this.setState({
      files
    });
    console.log(files)
    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        //base64data
        const fileAsBinaryString = reader.result;
        console.log('fileAsBinaryString', fileAsBinaryString)
        // do whatever you want with the file content

      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsBinaryString(file);
    })

  }

  handleChange = ({files}) => {
    console.log(files)
  }
}


export default UploadFormPage;
