/* tslint:disable */
/* eslint-disable */
/**
 * Accelerist
 * The accelerist API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface UpdateUserDto
 */
export interface UpdateUserDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateUserDto
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserDto
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserDto
     */
    linkedinLink: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUserDto
     */
    isReceivingNotifications?: boolean;
}

