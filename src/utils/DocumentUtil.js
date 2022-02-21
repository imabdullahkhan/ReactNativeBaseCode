import DocumentPicker from 'react-native-document-picker'
import { getToken } from './TokenUtil';
import { Platform } from 'react-native'

export const selectOneFile = async (setMediaForm, mediaForm, formKey) => {
    //Opening Document Picker for selection of one file
    try {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
            //There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
        });
        //Printing the log realted to the file
        //Setting the state to show single file attributes
        const formObject = { ...mediaForm }
        formObject[formKey] = { ...formObject[formKey], value: Platform.OS === 'ios' ? res : res[0], isDocument: true }
        // formObject[formKey] = { ...formObject[formKey], value: res[0], isDocument: true }
        setMediaForm(formObject)
        // uploadDoc(res[0])
    } catch (err) {
        //Handling any exception (If any)
        if (DocumentPicker.isCancel(err)) {
            //If user canceled the document selection
            console.log('Canceled from single doc picker');
        } else {
            //For Unknown Error
            console.log('Unknown Error: ' + JSON.stringify(err));
            throw err;
        }
    }
};

export const uploadDoc = async (singleFile) => {
    if (singleFile != null) {
        const fileToUpload = singleFile;
        const data = new FormData();
        data.append('truck_driver_id', "1");
        // data.append('user_id', "1");
        data.append('media_type', "1");
        data.append('caption', "This is caption");
        data.append('file_user_media[0]', fileToUpload);

        // Please change file upload URL

        try {
            let headers = { "Content-Type": "multipart/form-data", "Accept": "application/json" };
            headers = { ...headers, Authorization: getToken() };
            // URL Need to apply
            let res = await fetch('http://3.22.129.78:8055/api/media/upload', {
                method: 'POST',
                headers,
                body: data,
            });
            let responseJson = await res.json();
            console.log('res uploadImage: ' + JSON.stringify(responseJson));
        } catch (e) {
            console.log("This is error", e)
        }

    } else {
        // If no file selected the show alert
        alert('Please Select File first');
    }
};