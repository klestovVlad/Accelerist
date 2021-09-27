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

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from '../base'
// @ts-ignore
import { AwsKeyDto } from '../models'
// @ts-ignore
import { PasswordChangeDto } from '../models'
// @ts-ignore
import { PasswordResetDto } from '../models'
// @ts-ignore
import { SignInDto } from '../models'
// @ts-ignore
import { SignUpDto } from '../models'
/**
 * AuthorizationApi - axios parameter creator
 * @export
 */
export const AuthorizationApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Password change
     * @param {PasswordChangeDto} passwordChangeDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerChangePassword: async (
      passwordChangeDto: PasswordChangeDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'passwordChangeDto' is not null or undefined
      assertParamExists(
        'authControllerChangePassword',
        'passwordChangeDto',
        passwordChangeDto
      )
      const localVarPath = `/api/v1/auth/change_password`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        passwordChangeDto,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Callback after password changed
     * @param {PasswordChangeDto} passwordChangeDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerChangePasswordCallback: async (
      passwordChangeDto: PasswordChangeDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'passwordChangeDto' is not null or undefined
      assertParamExists(
        'authControllerChangePasswordCallback',
        'passwordChangeDto',
        passwordChangeDto
      )
      const localVarPath = `/api/v1/auth/change_password/change`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        passwordChangeDto,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @param {AwsKeyDto} awsKeyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerGetSignedUrl: async (
      awsKeyDto: AwsKeyDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'awsKeyDto' is not null or undefined
      assertParamExists('authControllerGetSignedUrl', 'awsKeyDto', awsKeyDto)
      const localVarPath = `/api/v1/auth/get_signed_url`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        awsKeyDto,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Send cheange password email
     * @param {PasswordResetDto} passwordResetDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerResetPassword: async (
      passwordResetDto: PasswordResetDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'passwordResetDto' is not null or undefined
      assertParamExists(
        'authControllerResetPassword',
        'passwordResetDto',
        passwordResetDto
      )
      const localVarPath = `/api/v1/auth/change_password/send_mail`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        passwordResetDto,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Authorization users
     * @param {SignInDto} signInDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn: async (
      signInDto: SignInDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'signInDto' is not null or undefined
      assertParamExists('authControllerSignIn', 'signInDto', signInDto)
      const localVarPath = `/api/v1/auth/sign_in`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        signInDto,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Registration users
     * @param {SignUpDto} signUpDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignUp: async (
      signUpDto: SignUpDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'signUpDto' is not null or undefined
      assertParamExists('authControllerSignUp', 'signUpDto', signUpDto)
      const localVarPath = `/api/v1/auth/sign_up`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        signUpDto,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * AuthorizationApi - functional programming interface
 * @export
 */
export const AuthorizationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    AuthorizationApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary Password change
     * @param {PasswordChangeDto} passwordChangeDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authControllerChangePassword(
      passwordChangeDto: PasswordChangeDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.authControllerChangePassword(
          passwordChangeDto,
          options
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
    /**
     *
     * @summary Callback after password changed
     * @param {PasswordChangeDto} passwordChangeDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authControllerChangePasswordCallback(
      passwordChangeDto: PasswordChangeDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.authControllerChangePasswordCallback(
          passwordChangeDto,
          options
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
    /**
     *
     * @param {AwsKeyDto} awsKeyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authControllerGetSignedUrl(
      awsKeyDto: AwsKeyDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.authControllerGetSignedUrl(
          awsKeyDto,
          options
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
    /**
     *
     * @summary Send cheange password email
     * @param {PasswordResetDto} passwordResetDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authControllerResetPassword(
      passwordResetDto: PasswordResetDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.authControllerResetPassword(
          passwordResetDto,
          options
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
    /**
     *
     * @summary Authorization users
     * @param {SignInDto} signInDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authControllerSignIn(
      signInDto: SignInDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.authControllerSignIn(signInDto, options)
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
    /**
     *
     * @summary Registration users
     * @param {SignUpDto} signUpDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authControllerSignUp(
      signUpDto: SignUpDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.authControllerSignUp(signUpDto, options)
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      )
    },
  }
}

/**
 * AuthorizationApi - factory interface
 * @export
 */
export const AuthorizationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AuthorizationApiFp(configuration)
  return {
    /**
     *
     * @summary Password change
     * @param {PasswordChangeDto} passwordChangeDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerChangePassword(
      passwordChangeDto: PasswordChangeDto,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .authControllerChangePassword(passwordChangeDto, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Callback after password changed
     * @param {PasswordChangeDto} passwordChangeDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerChangePasswordCallback(
      passwordChangeDto: PasswordChangeDto,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .authControllerChangePasswordCallback(passwordChangeDto, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {AwsKeyDto} awsKeyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerGetSignedUrl(
      awsKeyDto: AwsKeyDto,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .authControllerGetSignedUrl(awsKeyDto, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Send cheange password email
     * @param {PasswordResetDto} passwordResetDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerResetPassword(
      passwordResetDto: PasswordResetDto,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .authControllerResetPassword(passwordResetDto, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Authorization users
     * @param {SignInDto} signInDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn(
      signInDto: SignInDto,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .authControllerSignIn(signInDto, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Registration users
     * @param {SignUpDto} signUpDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignUp(
      signUpDto: SignUpDto,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .authControllerSignUp(signUpDto, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for authControllerChangePassword operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiAuthControllerChangePasswordRequest
 */
export interface AuthorizationApiAuthControllerChangePasswordRequest {
  /**
   *
   * @type {PasswordChangeDto}
   * @memberof AuthorizationApiAuthControllerChangePassword
   */
  readonly passwordChangeDto: PasswordChangeDto
}

/**
 * Request parameters for authControllerChangePasswordCallback operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiAuthControllerChangePasswordCallbackRequest
 */
export interface AuthorizationApiAuthControllerChangePasswordCallbackRequest {
  /**
   *
   * @type {PasswordChangeDto}
   * @memberof AuthorizationApiAuthControllerChangePasswordCallback
   */
  readonly passwordChangeDto: PasswordChangeDto
}

/**
 * Request parameters for authControllerGetSignedUrl operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiAuthControllerGetSignedUrlRequest
 */
export interface AuthorizationApiAuthControllerGetSignedUrlRequest {
  /**
   *
   * @type {AwsKeyDto}
   * @memberof AuthorizationApiAuthControllerGetSignedUrl
   */
  readonly awsKeyDto: AwsKeyDto
}

/**
 * Request parameters for authControllerResetPassword operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiAuthControllerResetPasswordRequest
 */
export interface AuthorizationApiAuthControllerResetPasswordRequest {
  /**
   *
   * @type {PasswordResetDto}
   * @memberof AuthorizationApiAuthControllerResetPassword
   */
  readonly passwordResetDto: PasswordResetDto
}

/**
 * Request parameters for authControllerSignIn operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiAuthControllerSignInRequest
 */
export interface AuthorizationApiAuthControllerSignInRequest {
  /**
   *
   * @type {SignInDto}
   * @memberof AuthorizationApiAuthControllerSignIn
   */
  readonly signInDto: SignInDto
}

/**
 * Request parameters for authControllerSignUp operation in AuthorizationApi.
 * @export
 * @interface AuthorizationApiAuthControllerSignUpRequest
 */
export interface AuthorizationApiAuthControllerSignUpRequest {
  /**
   *
   * @type {SignUpDto}
   * @memberof AuthorizationApiAuthControllerSignUp
   */
  readonly signUpDto: SignUpDto
}

/**
 * AuthorizationApi - object-oriented interface
 * @export
 * @class AuthorizationApi
 * @extends {BaseAPI}
 */
export class AuthorizationApi extends BaseAPI {
  /**
   *
   * @summary Password change
   * @param {AuthorizationApiAuthControllerChangePasswordRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthorizationApi
   */
  public authControllerChangePassword(
    requestParameters: AuthorizationApiAuthControllerChangePasswordRequest,
    options?: any
  ) {
    return AuthorizationApiFp(this.configuration)
      .authControllerChangePassword(
        requestParameters.passwordChangeDto,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Callback after password changed
   * @param {AuthorizationApiAuthControllerChangePasswordCallbackRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthorizationApi
   */
  public authControllerChangePasswordCallback(
    requestParameters: AuthorizationApiAuthControllerChangePasswordCallbackRequest,
    options?: any
  ) {
    return AuthorizationApiFp(this.configuration)
      .authControllerChangePasswordCallback(
        requestParameters.passwordChangeDto,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {AuthorizationApiAuthControllerGetSignedUrlRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthorizationApi
   */
  public authControllerGetSignedUrl(
    requestParameters: AuthorizationApiAuthControllerGetSignedUrlRequest,
    options?: any
  ) {
    return AuthorizationApiFp(this.configuration)
      .authControllerGetSignedUrl(requestParameters.awsKeyDto, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Send cheange password email
   * @param {AuthorizationApiAuthControllerResetPasswordRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthorizationApi
   */
  public authControllerResetPassword(
    requestParameters: AuthorizationApiAuthControllerResetPasswordRequest,
    options?: any
  ) {
    return AuthorizationApiFp(this.configuration)
      .authControllerResetPassword(requestParameters.passwordResetDto, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Authorization users
   * @param {AuthorizationApiAuthControllerSignInRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthorizationApi
   */
  public authControllerSignIn(
    requestParameters: AuthorizationApiAuthControllerSignInRequest,
    options?: any
  ) {
    return AuthorizationApiFp(this.configuration)
      .authControllerSignIn(requestParameters.signInDto, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Registration users
   * @param {AuthorizationApiAuthControllerSignUpRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthorizationApi
   */
  public authControllerSignUp(
    requestParameters: AuthorizationApiAuthControllerSignUpRequest,
    options?: any
  ) {
    return AuthorizationApiFp(this.configuration)
      .authControllerSignUp(requestParameters.signUpDto, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
