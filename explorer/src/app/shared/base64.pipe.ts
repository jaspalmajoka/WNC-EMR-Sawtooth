import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64'
})
export class Base64Pipe implements PipeTransform {


  public static BASE64_REGEX_STR = '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$';

  /**
   * Transforms the value passed from base64 to a plain text string.
   * @param value {any} - value to be transformed from base64
   * @param args {any} - any additional information for the pipe
   * @returns {string} - value as a readable string
   */
  transform(value: any, args?: any): any {
    if (!value) return value;

    let base64Regex = new RegExp(Base64Pipe.BASE64_REGEX_STR);
    let decodedValue = value;

    // attempt to decode from base64 if needed
    if (base64Regex.test(value)) {
      try {
        decodedValue = atob(value);
        decodedValue = JSON.parse(decodedValue);
        decodedValue = JSON.stringify(decodedValue, null, 4);
      } catch (e) {
      }
    }

    return decodedValue;
  }

}
