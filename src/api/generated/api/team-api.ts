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
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from '../base';
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
} from '../common';
import { Configuration } from '../configuration';
// @ts-ignore
import { GetSubscriptionTeamDto } from '../models';
// @ts-ignore
import { LoginHistoryDto } from '../models';
// @ts-ignore
import { UpdateTeamDto } from '../models';
// @ts-ignore
import { UserEmailDto } from '../models';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';

/**
 * TeamApi - axios parameter creator
 * @export
 */
export const TeamApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Callback after add team member
     * @param {any} id team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    inviteControllerAcceptInvite: async (
      id: any,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('inviteControllerAcceptInvite', 'id', id);
      const localVarPath = `/api/v1/team/{id}/invites/accept`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Add new team member
     * @param {UserEmailDto} userEmailDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerAddMembers: async (
      userEmailDto: UserEmailDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userEmailDto' is not null or undefined
      assertParamExists(
        'teamsControllerAddMembers',
        'userEmailDto',
        userEmailDto
      );
      const localVarPath = `/api/v1/team/members`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        userEmailDto,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Remove team member
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerDeleteMembers: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('teamsControllerDeleteMembers', 'id', id);
      const localVarPath = `/api/v1/team/members/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get last logged in users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerGetLastLogins: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/team/last_logins`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get team members
     * @param {'ASC' | 'DESC'} [orderingDirection] Ordering direction
     * @param {any} [orderingKey] Users ordering key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerGetMembers: async (
      orderingDirection?: 'ASC' | 'DESC',
      orderingKey?: any,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/team/members`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (orderingDirection !== undefined) {
        localVarQueryParameter['orderingDirection'] = orderingDirection;
      }

      if (orderingKey !== undefined) {
        localVarQueryParameter['orderingKey'] = orderingKey;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get subscription team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerGetSubscriptionTeam: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/team/subscription`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerGetTeam: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/team`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Generate team invite link
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerInviteLink: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/team/invite_link`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Upload organization logo
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerLogoUpload: async (
      file: any,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'file' is not null or undefined
      assertParamExists('teamsControllerLogoUpload', 'file', file);
      const localVarPath = `/api/v1/team/logo_upload`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (file !== undefined) {
        localVarFormParams.append('file', file as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Update team
     * @param {UpdateTeamDto} updateTeamDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerUpdateTeam: async (
      updateTeamDto: UpdateTeamDto,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'updateTeamDto' is not null or undefined
      assertParamExists(
        'teamsControllerUpdateTeam',
        'updateTeamDto',
        updateTeamDto
      );
      const localVarPath = `/api/v1/team`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PATCH',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        updateTeamDto,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * TeamApi - functional programming interface
 * @export
 */
export const TeamApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TeamApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Callback after add team member
     * @param {any} id team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async inviteControllerAcceptInvite(
      id: any,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.inviteControllerAcceptInvite(
          id,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Add new team member
     * @param {UserEmailDto} userEmailDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsControllerAddMembers(
      userEmailDto: UserEmailDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsControllerAddMembers(
          userEmailDto,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Remove team member
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsControllerDeleteMembers(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsControllerDeleteMembers(
          id,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get last logged in users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsControllerGetLastLogins(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<LoginHistoryDto>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsControllerGetLastLogins(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get team members
     * @param {'ASC' | 'DESC'} [orderingDirection] Ordering direction
     * @param {any} [orderingKey] Users ordering key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsControllerGetMembers(
      orderingDirection?: 'ASC' | 'DESC',
      orderingKey?: any,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsControllerGetMembers(
          orderingDirection,
          orderingKey,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get subscription team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsControllerGetSubscriptionTeam(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetSubscriptionTeamDto>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsControllerGetSubscriptionTeam(
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsControllerGetTeam(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsControllerGetTeam(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Generate team invite link
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsControllerInviteLink(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsControllerInviteLink(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Upload organization logo
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsControllerLogoUpload(
      file: any,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsControllerLogoUpload(
          file,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Update team
     * @param {UpdateTeamDto} updateTeamDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsControllerUpdateTeam(
      updateTeamDto: UpdateTeamDto,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsControllerUpdateTeam(
          updateTeamDto,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * TeamApi - factory interface
 * @export
 */
export const TeamApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = TeamApiFp(configuration);
  return {
    /**
     *
     * @summary Callback after add team member
     * @param {any} id team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    inviteControllerAcceptInvite(id: any, options?: any): AxiosPromise<void> {
      return localVarFp
        .inviteControllerAcceptInvite(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Add new team member
     * @param {UserEmailDto} userEmailDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerAddMembers(
      userEmailDto: UserEmailDto,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .teamsControllerAddMembers(userEmailDto, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Remove team member
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerDeleteMembers(
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .teamsControllerDeleteMembers(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get last logged in users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerGetLastLogins(
      options?: any
    ): AxiosPromise<Array<LoginHistoryDto>> {
      return localVarFp
        .teamsControllerGetLastLogins(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get team members
     * @param {'ASC' | 'DESC'} [orderingDirection] Ordering direction
     * @param {any} [orderingKey] Users ordering key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerGetMembers(
      orderingDirection?: 'ASC' | 'DESC',
      orderingKey?: any,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .teamsControllerGetMembers(orderingDirection, orderingKey, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get subscription team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerGetSubscriptionTeam(
      options?: any
    ): AxiosPromise<GetSubscriptionTeamDto> {
      return localVarFp
        .teamsControllerGetSubscriptionTeam(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerGetTeam(options?: any): AxiosPromise<void> {
      return localVarFp
        .teamsControllerGetTeam(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Generate team invite link
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerInviteLink(options?: any): AxiosPromise<void> {
      return localVarFp
        .teamsControllerInviteLink(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Upload organization logo
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerLogoUpload(file: any, options?: any): AxiosPromise<void> {
      return localVarFp
        .teamsControllerLogoUpload(file, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update team
     * @param {UpdateTeamDto} updateTeamDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsControllerUpdateTeam(
      updateTeamDto: UpdateTeamDto,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .teamsControllerUpdateTeam(updateTeamDto, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for inviteControllerAcceptInvite operation in TeamApi.
 * @export
 * @interface TeamApiInviteControllerAcceptInviteRequest
 */
export interface TeamApiInviteControllerAcceptInviteRequest {
  /**
   * team
   * @type {any}
   * @memberof TeamApiInviteControllerAcceptInvite
   */
  readonly id: any;
}

/**
 * Request parameters for teamsControllerAddMembers operation in TeamApi.
 * @export
 * @interface TeamApiTeamsControllerAddMembersRequest
 */
export interface TeamApiTeamsControllerAddMembersRequest {
  /**
   *
   * @type {UserEmailDto}
   * @memberof TeamApiTeamsControllerAddMembers
   */
  readonly userEmailDto: UserEmailDto;
}

/**
 * Request parameters for teamsControllerDeleteMembers operation in TeamApi.
 * @export
 * @interface TeamApiTeamsControllerDeleteMembersRequest
 */
export interface TeamApiTeamsControllerDeleteMembersRequest {
  /**
   *
   * @type {string}
   * @memberof TeamApiTeamsControllerDeleteMembers
   */
  readonly id: string;
}

/**
 * Request parameters for teamsControllerGetMembers operation in TeamApi.
 * @export
 * @interface TeamApiTeamsControllerGetMembersRequest
 */
export interface TeamApiTeamsControllerGetMembersRequest {
  /**
   * Ordering direction
   * @type {'ASC' | 'DESC'}
   * @memberof TeamApiTeamsControllerGetMembers
   */
  readonly orderingDirection?: 'ASC' | 'DESC';

  /**
   * Users ordering key
   * @type {any}
   * @memberof TeamApiTeamsControllerGetMembers
   */
  readonly orderingKey?: any;
}

/**
 * Request parameters for teamsControllerLogoUpload operation in TeamApi.
 * @export
 * @interface TeamApiTeamsControllerLogoUploadRequest
 */
export interface TeamApiTeamsControllerLogoUploadRequest {
  /**
   *
   * @type {any}
   * @memberof TeamApiTeamsControllerLogoUpload
   */
  readonly file: any;
}

/**
 * Request parameters for teamsControllerUpdateTeam operation in TeamApi.
 * @export
 * @interface TeamApiTeamsControllerUpdateTeamRequest
 */
export interface TeamApiTeamsControllerUpdateTeamRequest {
  /**
   *
   * @type {UpdateTeamDto}
   * @memberof TeamApiTeamsControllerUpdateTeam
   */
  readonly updateTeamDto: UpdateTeamDto;
}

/**
 * TeamApi - object-oriented interface
 * @export
 * @class TeamApi
 * @extends {BaseAPI}
 */
export class TeamApi extends BaseAPI {
  /**
   *
   * @summary Callback after add team member
   * @param {TeamApiInviteControllerAcceptInviteRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public inviteControllerAcceptInvite(
    requestParameters: TeamApiInviteControllerAcceptInviteRequest,
    options?: any
  ) {
    return TeamApiFp(this.configuration)
      .inviteControllerAcceptInvite(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Add new team member
   * @param {TeamApiTeamsControllerAddMembersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public teamsControllerAddMembers(
    requestParameters: TeamApiTeamsControllerAddMembersRequest,
    options?: any
  ) {
    return TeamApiFp(this.configuration)
      .teamsControllerAddMembers(requestParameters.userEmailDto, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Remove team member
   * @param {TeamApiTeamsControllerDeleteMembersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public teamsControllerDeleteMembers(
    requestParameters: TeamApiTeamsControllerDeleteMembersRequest,
    options?: any
  ) {
    return TeamApiFp(this.configuration)
      .teamsControllerDeleteMembers(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get last logged in users
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public teamsControllerGetLastLogins(options?: any) {
    return TeamApiFp(this.configuration)
      .teamsControllerGetLastLogins(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get team members
   * @param {TeamApiTeamsControllerGetMembersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public teamsControllerGetMembers(
    requestParameters: TeamApiTeamsControllerGetMembersRequest = {},
    options?: any
  ) {
    return TeamApiFp(this.configuration)
      .teamsControllerGetMembers(
        requestParameters.orderingDirection,
        requestParameters.orderingKey,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get subscription team
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public teamsControllerGetSubscriptionTeam(options?: any) {
    return TeamApiFp(this.configuration)
      .teamsControllerGetSubscriptionTeam(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get team
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public teamsControllerGetTeam(options?: any) {
    return TeamApiFp(this.configuration)
      .teamsControllerGetTeam(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Generate team invite link
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public teamsControllerInviteLink(options?: any) {
    return TeamApiFp(this.configuration)
      .teamsControllerInviteLink(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Upload organization logo
   * @param {TeamApiTeamsControllerLogoUploadRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public teamsControllerLogoUpload(
    requestParameters: TeamApiTeamsControllerLogoUploadRequest,
    options?: any
  ) {
    return TeamApiFp(this.configuration)
      .teamsControllerLogoUpload(requestParameters.file, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Update team
   * @param {TeamApiTeamsControllerUpdateTeamRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TeamApi
   */
  public teamsControllerUpdateTeam(
    requestParameters: TeamApiTeamsControllerUpdateTeamRequest,
    options?: any
  ) {
    return TeamApiFp(this.configuration)
      .teamsControllerUpdateTeam(requestParameters.updateTeamDto, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
