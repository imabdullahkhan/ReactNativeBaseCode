import moment from "moment";

const validateEmail = (email) => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateTime = (time) => {
  let re = /^([0]?[1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)$/i;
  return re.test(String(time.replace(/\s/g, '')));
}

const isRequiredMessage = (fieldName = "") => {
  return `${t(fieldName)} ${t("isRequired")}`
}

const isMinLengthMessage = (fieldName = "", minValue) => {
  return `${t(fieldName)} ${t("mustBeGreaterThen")} ${minValue}`
}

const isMaxLengthMessage = (fieldName = "", maxValue) => {
  return `${t(fieldName)} ${t("mustBeLessThen")} ${maxValue}`
}

const isEmailMessage = (fieldName = "") => {
  return `${t("pleaseEnterAValid")} ${t(fieldName)} `
}

const isMatchMessage = (fieldName = "", MatchFieldName = "") => {
  return `${t(fieldName)} ${t("shouldBeSameAs")} ${MatchFieldName}`
}

const isGreterThanInTime = (fieldName = "", GreterThanInTimeName = "") => {
  return `${t(fieldName)} ${t("mustBeGreaterThen")} ${t(GreterThanInTimeName)}`;
}

const ValidateZipCode = (zipcode) => {
  let re = /^[0-9]+$/;
  return re.test(String(zipcode).toLowerCase());
};

const isZipCodeMessage = (fieldName = "") => {
  return `${t("pleaseEnterAValid")} ${t(fieldName)} `
}

const isTimeMessage = (fieldName = "") => {
  return `${t("pleaseEnterAValid")} ${t("Time")}`
}

export class validationFieldsKeys {
  constructor({ isRequired = false, Min = -1, Max = -1, fieldName = "", isEmail = false, GreterThanInTime = "", Match = "", isZipCode = false, isTime = false }) {
    this.isRequired = (isRequired === false || typeof isRequired !== 'boolean') ? false : true;
    this.isTime = (isTime === false || typeof isTime !== 'boolean') ? false : true;
    this.isEmail = (isEmail === false || typeof isEmail !== 'boolean') ? false : true;
    this.isZipCode = (isZipCode === false || typeof isZipCode !== 'boolean') ? false : true;
    this.Min = (Min === -1 || typeof Min !== 'number') ? null : Min;
    this.Max = (Max === -1 || typeof Max !== 'number') ? null : Max;
    this.Match = Match;
    this.GreterThanInTime = GreterThanInTime;
    this.fieldName = fieldName;

    Object.preventExtensions(this);
  }
}

export const handleValidateForm = (form) => {
  let keys = Object.keys(form);
  let Errors = [];
  let isError = false;
  keys.map((val) => {
    let FieldError = '';
    if (form && form[`${val}`] && form[`${val}`].hasOwnProperty("vaidateOption") && form[`${val}`].vaidateOption) {
      // isRequired

      if (form[`${val}`].vaidateOption.isRequired && form[`${val}`].value.length === 0) {
        // Errors.push(isRequiredMessage(form[`${val}`].vaidateOption.fieldName));
        if (FieldError && FieldError.length > 0) {
          FieldError += '\n'
        }
        isError = true;

        FieldError += isRequiredMessage(form[`${val}`].vaidateOption.fieldName);
      }
      // isEmail
      if (form[`${val}`].vaidateOption.hasOwnProperty('isEmail') && form[`${val}`].vaidateOption.isEmail && !(validateEmail(form[`${val}`].value))) {
        // Errors.push(isEmailMessage(form[`${val}`].vaidateOption.fieldName));
        if (FieldError && FieldError.length > 0) {
          FieldError += '\n'
        }
        isError = true;
        FieldError += isEmailMessage(form[`${val}`].vaidateOption.fieldName);
      }
      if (form[`${val}`].vaidateOption.hasOwnProperty('isZipCode') && form[`${val}`].vaidateOption.isZipCode && !(ValidateZipCode(form[`${val}`].value))) {
        // Errors.push(isEmailMessage(form[`${val}`].vaidateOption.fieldName));
        if (FieldError && FieldError.length > 0) {
          FieldError += '\n'
        }
        isError = true;
        FieldError += isEmailMessage(form[`${val}`].vaidateOption.fieldName);
      }
      // Min
      if (form[`${val}`].vaidateOption.hasOwnProperty('Min') && form[`${val}`].vaidateOption.Min && ((typeof form[`${val}`].value == 'string' && form[`${val}`].value.length > 0 && form[`${val}`].value.length < form[`${val}`].vaidateOption.Min) || (typeof form[`${val}`].value == 'number' && form[`${val}`].value < form[`${val}`].vaidateOption.Min))) {
        // Errors.push(isMinLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Min))
        if (FieldError && FieldError.length > 0) {
          FieldError += '\n'
        }
        isError = true;
        FieldError += isMinLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Min);
      }
      // Max
      if (form[`${val}`].vaidateOption.hasOwnProperty('Max') && form[`${val}`].vaidateOption.Max && form[`${val}`].value.length > 0 && form[`${val}`].value.length > form[`${val}`].vaidateOption.Max) {
        // Errors.push(isMaxLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Max))
        if (FieldError && FieldError.length > 0) {
          FieldError += '\n'
        }
        isError = true;
        FieldError += isMaxLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Max);
      }

      // Match
      if (form[`${val}`].vaidateOption.hasOwnProperty('Match') && form[`${val}`].vaidateOption.Match && form[`${val}`].vaidateOption.Match.length > 0) {
        if (form[`${val}`].value.length > 0 && !(form[`${form[`${val}`].vaidateOption.Match}`] && form[`${form[`${val}`].vaidateOption.Match}`].value.length > 0 && form[`${val}`].value === form[`${form[`${val}`].vaidateOption.Match}`].value)) {
          if (FieldError && FieldError.length > 0) {
            FieldError += '\n'
          }
          isError = true;
          FieldError += isMatchMessage(form[`${val}`].vaidateOption.fieldName, form[`${form[`${val}`].vaidateOption.Match}`].vaidateOption.fieldName)
        }
        // Errors.push(isMaxLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Max))
      }

      // isTime
      if (form[`${val}`].vaidateOption.hasOwnProperty('isTime') && form[`${val}`].vaidateOption.isTime && !(validateTime(form[`${val}`].value))) {
        if (FieldError && FieldError.length > 0) {
          FieldError += '\n'
        }
        isError = true;
        FieldError += isTimeMessage(form[`${val}`].vaidateOption.fieldName);
      }

      // GreterThanInTime
      if (form[`${val}`].vaidateOption.hasOwnProperty('GreterThanInTime') && form[`${val}`].vaidateOption.GreterThanInTime && form[`${val}`].vaidateOption.GreterThanInTime.length > 0) {

        if (!(form[`${form[`${val}`].vaidateOption.GreterThanInTime}`] && form[`${form[`${val}`].vaidateOption.GreterThanInTime}`].value.length > 0 && moment(form[`${val}`].value, 'h:mma').isAfter(moment(form[`${form[`${val}`].vaidateOption.GreterThanInTime}`].value, 'h:mma')))) {
          if (FieldError && FieldError.length > 0) {
            FieldError += '\n'
          }
          isError = true;
          FieldError += isGreterThanInTime(form[`${val}`].vaidateOption.fieldName, form[`${form[`${val}`].vaidateOption.GreterThanInTime}`].vaidateOption.fieldName)
        }
        // Errors.push(isMaxLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Max))
      }

      if (FieldError.length > 0) {
        form[`${val}`].error = FieldError;
      } else {
        form[`${val}`].error = null;
      }
    }
  });

  return {
    IsError: isError,
    form
  }
}

export const errorResponseServer = (form, serverMessage) => {
  if (typeof serverMessage === 'object') {
    Object.keys(serverMessage).map((eachKey) => {
      if (!form.hasOwnProperty(`${eachKey}`)) {
        return eachKey;
      }
      if (Array.isArray(serverMessage[`${eachKey}`]) && serverMessage[`${eachKey}`].length) {
        form[`${eachKey}`].error = serverMessage[`${eachKey}`][0];
      }
      return eachKey;
    })
  }
  return form;
}

export const handleValidateSingleField = (form, val) => {
  let keys = Object.keys(form);
  let Errors = [];
  let isError = false;
  let FieldError = '';
  if (form && form[`${val}`] && form[`${val}`].hasOwnProperty("vaidateOption") && form[`${val}`].vaidateOption) {
    // isRequired

    if (form[`${val}`].vaidateOption.isRequired && form[`${val}`].value.length === 0) {
      // Errors.push(isRequiredMessage(form[`${val}`].vaidateOption.fieldName));
      if (FieldError && FieldError.length > 0) {
        FieldError += '\n'
      }

      if (FieldError.length < 2) {
        isError = true;
        FieldError += isRequiredMessage(form[`${val}`].vaidateOption.fieldName);
      }
    }
    // isEmail
    if (form[`${val}`].vaidateOption.hasOwnProperty('isEmail') && form[`${val}`].vaidateOption.isEmail && !(validateEmail(form[`${val}`].value))) {
      // Errors.push(isEmailMessage(form[`${val}`].vaidateOption.fieldName));
      if (FieldError && FieldError.length > 0) {
        FieldError += '\n'
      }
      if (FieldError.length < 2) {
        isError = true;
        FieldError += isEmailMessage(form[`${val}`].vaidateOption.fieldName);
      }
    }
    if (form[`${val}`].vaidateOption.hasOwnProperty('isZipCode') && form[`${val}`].vaidateOption.isZipCode && !(ValidateZipCode(form[`${val}`].value))) {
      // Errors.push(isEmailMessage(form[`${val}`].vaidateOption.fieldName));
      if (FieldError && FieldError.length > 0) {
        FieldError += '\n'
      }
      if (FieldError.length < 2) {
        isError = true;
        FieldError += isZipCodeMessage(form[`${val}`].vaidateOption.fieldName);
      }
    }
    // Min
    if (form[`${val}`].vaidateOption.hasOwnProperty('Min') && form[`${val}`].vaidateOption.Min && ((typeof form[`${val}`].value == 'string' && form[`${val}`].value.length < form[`${val}`].vaidateOption.Min) || (typeof form[`${val}`].value == 'number' && form[`${val}`].value < form[`${val}`].vaidateOption.Min))) {
      // Errors.push(isMinLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Min))
      if (FieldError && FieldError.length > 0) {
        FieldError += '\n'
      }
      if (FieldError.length < 2) {
        isError = true;
        FieldError += isMinLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Min);
      }
    }
    // Max
    if (form[`${val}`].vaidateOption.hasOwnProperty('Max') && form[`${val}`].vaidateOption.Max && form[`${val}`].value.length > form[`${val}`].vaidateOption.Max) {
      // Errors.push(isMaxLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Max))
      if (FieldError && FieldError.length > 0) {
        FieldError += '\n'
      }
      if (FieldError.length < 2) {
        isError = true;
        FieldError += isMaxLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Max);
      }
    }

    // Match
    if (form[`${val}`].vaidateOption.hasOwnProperty('Match') && form[`${val}`].vaidateOption.Match && form[`${val}`].vaidateOption.Match.length > 0) {
      if (!(form[`${form[`${val}`].vaidateOption.Match}`] && form[`${form[`${val}`].vaidateOption.Match}`].value.length > 0 && form[`${val}`].value === form[`${form[`${val}`].vaidateOption.Match}`].value)) {
        if (FieldError && FieldError.length > 0) {
          FieldError += '\n'
        }
        if (FieldError.length < 2) {
          isError = true;
          FieldError += isMatchMessage(form[`${val}`].vaidateOption.fieldName, form[`${form[`${val}`].vaidateOption.Match}`].vaidateOption.fieldName)
        }
      }
      // Errors.push(isMaxLengthMessage(form[`${val}`].vaidateOption.fieldName, form[`${val}`].vaidateOption.Max))
    }

    if (FieldError.length > 0) {
      form[`${val}`].error = FieldError;
    } else {
      form[`${val}`].error = null;
    }
  }
  return {
    IsError: isError,
    val,
    FieldError,
  }
}
