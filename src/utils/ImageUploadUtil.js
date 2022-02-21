import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
// import { main_logo_icon, profileAvatar, userProfile } from '../assets/images';
import Config from '../Config';
// import { normalizeWidth } from './FontUtil';
// import { store } from '../redux/Store';

export const getImage = (setStateForm, formData, FormKeyName, selectionLimit = 1) => {
    return new Promise((resolve, reject) => {
        const options = {
            quality: 1.0,
            // maxWidth: normalizeWidth(500),
            // maxHeight: normalizeWidth(500),
            mediaType: 'photo',
            selectionLimit,
            includeExtra: true,
            includeBase64: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
                cameraRoll: true,
                waitUntilSaved: true
            },
        };
        launchImageLibrary(options, response => {
            try {
                if (response.didCancel) {
                    console.log(response.didCancel, "response.didCancel")
                } else if (response.error) {
                    console.log(response.error, "response.error")
                } else if (response.customButton) {
                    console.log(response.customButton, "response.customButton")
                } else {
                    if (setStateForm) {
                        let formObject = { ...formData };
                        if (Array.isArray(formObject[`${FormKeyName}`].value)) {
                            if (formObject[`${FormKeyName}`].value.length) {
                                formObject[`${FormKeyName}`] = { ...formObject[`${FormKeyName}`], value: [...formObject[`${FormKeyName}`].value, response.assets[0]], error: null };
                            } else {
                                formObject[`${FormKeyName}`] = { ...formObject[`${FormKeyName}`], value: [response?.assets[0]], error: null };
                            }
                        } else {
                            formObject[`${FormKeyName}`] = { ...formObject[`${FormKeyName}`], value: response?.assets[0], updated: true, error: null };
                        }
                        setStateForm(formObject);
                    }
                    // get response using promise.resolve
                    else {
                        // const imageData = new FormData();
                        // imageData.append('image', {
                        //     uri: response.uri,
                        //     type: response.type,
                        //     name: response.fileName,
                        //     data: response.data
                        // });
                        // console.log("imageData", imageData)
                        resolve(response?.assets[0])
                    }
                }
            } catch (e) {
                console.log(e, "eeeeeeeeee")
            }
        });
    })
};

export const getImageWithCamera = (setStateForm, formData, FormKeyName) => {
    return new Promise((resolve, reject) => {
        try {
            const options = {
                quality: 1.0,
                // maxWidth: normalizeWidth(500),
                // maxHeight: normalizeWidth(500),
                mediaType: 'photo',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                    cameraRoll: true,
                    waitUntilSaved: true
                },
            };
            launchCamera(options, response => {

                if (response.didCancel) {
                    reject(false)
                } else if (response.error) {
                    reject(false)
                } else if (response.customButton) {
                    reject(false)
                } else {
                    let formObject = { ...formData };
                    formObject[`${FormKeyName}`] = { ...formObject[`${FormKeyName}`], value: response, updated: true, error: null, isDocument: false };
                    setStateForm(formObject);
                    resolve(response)
                }
            });
        } catch (e) {
            reject(e)
            reject(false)
        }

    })

};

export const uploadMediaObj = async (image) => {
    if (!image) {
        return null;
    }
    // store.dispatch(imageUpload(image)).then((res) => {
    //     console.log(res, "res")
    // }, (err) => {
    //     console.log(err, "undefined")
    //     Promise.reject(err);
    // });
};

export const createFormData = (photo, form) => {

    for (let key in photo) {
        if (!photo[key].fileName) {
            photo[key].fileName = photo[key].path.split('/')[photo[key].path.split('/').length - 1];
        }
        if (!photo[key].type) {
            photo[key].type = photo[key].mime
        }
        if (!photo[key].uri) {
            photo[key].uri = photo[key].path;
        }
        console.log({
            name: photo[key].fileName,
            type: photo[key].type,
            uri: Platform.OS === 'ios' ? photo[key].uri.replace('file://', '/') : photo[key].uri,
            filename: `${new Date().toISOString()}.png`
        }, "asnduinasuidnsauidna")
        form.append(key, {
            name: photo[key].fileName,
            type: photo[key].type,
            uri: Platform.OS === 'ios' ? photo[key].uri.replace('file://', '/') : photo[key].uri,
            filename: `${new Date().toISOString()}.png`
        });
    }

    return form;
};

export const handleUploadPhoto = (photo) => {
    return new Promise((resolve, reject) => {
        fetch(`${Config.env().API_URL}/file`, {
            method: 'POST',
            body: createFormData(photo),
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            });
    })

};

export const getProfileImage = (profile) => {
    if (profile === null || profile === undefined) {
        return false
    }
    return `${Config.env().IMAGE_URL}/${profile}`
};

export const getImageURIFromServer = (profileImagePath) => {
    return profileImagePath ? { uri: getProfileImage(profileImagePath) } : userProfile
};

export const getLocalImageURI = (uri, userProfile) => {
    // return uri ? { uri } : userProfile ? userProfile : main_logo_icon
};

export const getSignatureFromServer = (signature) => {
    return signature ? { uri: getProfileImage(signature) } : null
};