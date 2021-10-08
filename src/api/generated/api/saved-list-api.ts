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
import { CreateSavedListDto } from '../models';
// @ts-ignore
import { GetExcelDto } from '../models';
// @ts-ignore
import { GetSavedListDto } from '../models';
// @ts-ignore
import { UpdateSavedListDto } from '../models';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';

/**
 * SavedListApi - axios parameter creator
 * @export
 */
export const SavedListApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create saved list
     * @param {CreateSavedListDto} createSavedListDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerCreateProspect: async (
      createSavedListDto: CreateSavedListDto,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'createSavedListDto' is not null or undefined
      assertParamExists(
        'savedListControllerCreateProspect',
        'createSavedListDto',
        createSavedListDto,
      );
      const localVarPath = `/api/v1/saved-list`;
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
        createSavedListDto,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Remove saved list
     * @param {any} id saved list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerDeleteProspect: async (
      id: any,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('savedListControllerDeleteProspect', 'id', id);
      const localVarPath = `/api/v1/saved-list/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
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
     * @summary Export saved list into an excel file
     * @param {string} id saved list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerGetExcel: async (
      id: string,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('savedListControllerGetExcel', 'id', id);
      const localVarPath = `/api/v1/saved-list/{id}/excel`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
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
     * @summary Get one saved list
     * @param {any} id saved list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerProspect: async (
      id: any,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('savedListControllerProspect', 'id', id);
      const localVarPath = `/api/v1/saved-list/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
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
     * @summary Get saved list
     * @param {any} page Starting from which page you want to search
     * @param {any} limit How many results need to be returned
     * @param {'alphabet' | 'last-activity' | 'available'} [sort] Sort saved list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerProspects: async (
      page: any,
      limit: any,
      sort?: 'alphabet' | 'last-activity' | 'available',
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'page' is not null or undefined
      assertParamExists('savedListControllerProspects', 'page', page);
      // verify required parameter 'limit' is not null or undefined
      assertParamExists('savedListControllerProspects', 'limit', limit);
      const localVarPath = `/api/v1/saved-list`;
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

      if (page !== undefined) {
        localVarQueryParameter['page'] = page;
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort;
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
     * @summary Update saved list
     * @param {any} id saved list id
     * @param {UpdateSavedListDto} updateSavedListDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerUpdateProspect: async (
      id: any,
      updateSavedListDto: UpdateSavedListDto,
      options: any = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('savedListControllerUpdateProspect', 'id', id);
      // verify required parameter 'updateSavedListDto' is not null or undefined
      assertParamExists(
        'savedListControllerUpdateProspect',
        'updateSavedListDto',
        updateSavedListDto,
      );
      const localVarPath = `/api/v1/saved-list/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
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
        updateSavedListDto,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * SavedListApi - functional programming interface
 * @export
 */
export const SavedListApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SavedListApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Create saved list
     * @param {CreateSavedListDto} createSavedListDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async savedListControllerCreateProspect(
      createSavedListDto: CreateSavedListDto,
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.savedListControllerCreateProspect(
          createSavedListDto,
          options,
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary Remove saved list
     * @param {any} id saved list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async savedListControllerDeleteProspect(
      id: any,
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.savedListControllerDeleteProspect(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary Export saved list into an excel file
     * @param {string} id saved list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async savedListControllerGetExcel(
      id: string,
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetExcelDto>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.savedListControllerGetExcel(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary Get one saved list
     * @param {any} id saved list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async savedListControllerProspect(
      id: any,
      options?: any,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSavedListDto>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.savedListControllerProspect(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary Get saved list
     * @param {any} page Starting from which page you want to search
     * @param {any} limit How many results need to be returned
     * @param {'alphabet' | 'last-activity' | 'available'} [sort] Sort saved list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async savedListControllerProspects(
      page: any,
      limit: any,
      sort?: 'alphabet' | 'last-activity' | 'available',
      options?: any,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetSavedListDto>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.savedListControllerProspects(
          page,
          limit,
          sort,
          options,
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary Update saved list
     * @param {any} id saved list id
     * @param {UpdateSavedListDto} updateSavedListDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async savedListControllerUpdateProspect(
      id: any,
      updateSavedListDto: UpdateSavedListDto,
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.savedListControllerUpdateProspect(
          id,
          updateSavedListDto,
          options,
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
  };
};

/**
 * SavedListApi - factory interface
 * @export
 */
export const SavedListApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = SavedListApiFp(configuration);
  return {
    /**
     *
     * @summary Create saved list
     * @param {CreateSavedListDto} createSavedListDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerCreateProspect(
      createSavedListDto: CreateSavedListDto,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .savedListControllerCreateProspect(createSavedListDto, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Remove saved list
     * @param {any} id saved list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerDeleteProspect(id: any, options?: any): AxiosPromise<void> {
      return localVarFp
        .savedListControllerDeleteProspect(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Export saved list into an excel file
     * @param {string} id saved list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerGetExcel(id: string, options?: any): AxiosPromise<GetExcelDto> {
      return localVarFp
        .savedListControllerGetExcel(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get one saved list
     * @param {any} id saved list id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerProspect(id: any, options?: any): AxiosPromise<GetSavedListDto> {
      return localVarFp
        .savedListControllerProspect(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get saved list
     * @param {any} page Starting from which page you want to search
     * @param {any} limit How many results need to be returned
     * @param {'alphabet' | 'last-activity' | 'available'} [sort] Sort saved list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerProspects(
      page: any,
      limit: any,
      sort?: 'alphabet' | 'last-activity' | 'available',
      options?: any,
    ): AxiosPromise<Array<GetSavedListDto>> {
      return localVarFp
        .savedListControllerProspects(page, limit, sort, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update saved list
     * @param {any} id saved list id
     * @param {UpdateSavedListDto} updateSavedListDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    savedListControllerUpdateProspect(
      id: any,
      updateSavedListDto: UpdateSavedListDto,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .savedListControllerUpdateProspect(id, updateSavedListDto, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for savedListControllerCreateProspect operation in SavedListApi.
 * @export
 * @interface SavedListApiSavedListControllerCreateProspectRequest
 */
export interface SavedListApiSavedListControllerCreateProspectRequest {
  /**
   *
   * @type {CreateSavedListDto}
   * @memberof SavedListApiSavedListControllerCreateProspect
   */
  readonly createSavedListDto: CreateSavedListDto;
}

/**
 * Request parameters for savedListControllerDeleteProspect operation in SavedListApi.
 * @export
 * @interface SavedListApiSavedListControllerDeleteProspectRequest
 */
export interface SavedListApiSavedListControllerDeleteProspectRequest {
  /**
   * saved list id
   * @type {any}
   * @memberof SavedListApiSavedListControllerDeleteProspect
   */
  readonly id: any;
}

/**
 * Request parameters for savedListControllerGetExcel operation in SavedListApi.
 * @export
 * @interface SavedListApiSavedListControllerGetExcelRequest
 */
export interface SavedListApiSavedListControllerGetExcelRequest {
  /**
   * saved list id
   * @type {string}
   * @memberof SavedListApiSavedListControllerGetExcel
   */
  readonly id: string;
}

/**
 * Request parameters for savedListControllerProspect operation in SavedListApi.
 * @export
 * @interface SavedListApiSavedListControllerProspectRequest
 */
export interface SavedListApiSavedListControllerProspectRequest {
  /**
   * saved list id
   * @type {any}
   * @memberof SavedListApiSavedListControllerProspect
   */
  readonly id: any;
}

/**
 * Request parameters for savedListControllerProspects operation in SavedListApi.
 * @export
 * @interface SavedListApiSavedListControllerProspectsRequest
 */
export interface SavedListApiSavedListControllerProspectsRequest {
  /**
   * Starting from which page you want to search
   * @type {any}
   * @memberof SavedListApiSavedListControllerProspects
   */
  readonly page: any;

  /**
   * How many results need to be returned
   * @type {any}
   * @memberof SavedListApiSavedListControllerProspects
   */
  readonly limit: any;

  /**
   * Sort saved list
   * @type {'alphabet' | 'last-activity' | 'available'}
   * @memberof SavedListApiSavedListControllerProspects
   */
  readonly sort?: 'alphabet' | 'last-activity' | 'available';
}

/**
 * Request parameters for savedListControllerUpdateProspect operation in SavedListApi.
 * @export
 * @interface SavedListApiSavedListControllerUpdateProspectRequest
 */
export interface SavedListApiSavedListControllerUpdateProspectRequest {
  /**
   * saved list id
   * @type {any}
   * @memberof SavedListApiSavedListControllerUpdateProspect
   */
  readonly id: any;

  /**
   *
   * @type {UpdateSavedListDto}
   * @memberof SavedListApiSavedListControllerUpdateProspect
   */
  readonly updateSavedListDto: UpdateSavedListDto;
}

/**
 * SavedListApi - object-oriented interface
 * @export
 * @class SavedListApi
 * @extends {BaseAPI}
 */
export class SavedListApi extends BaseAPI {
  /**
   *
   * @summary Create saved list
   * @param {SavedListApiSavedListControllerCreateProspectRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SavedListApi
   */
  public savedListControllerCreateProspect(
    requestParameters: SavedListApiSavedListControllerCreateProspectRequest,
    options?: any,
  ) {
    return SavedListApiFp(this.configuration)
      .savedListControllerCreateProspect(requestParameters.createSavedListDto, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Remove saved list
   * @param {SavedListApiSavedListControllerDeleteProspectRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SavedListApi
   */
  public savedListControllerDeleteProspect(
    requestParameters: SavedListApiSavedListControllerDeleteProspectRequest,
    options?: any,
  ) {
    return SavedListApiFp(this.configuration)
      .savedListControllerDeleteProspect(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Export saved list into an excel file
   * @param {SavedListApiSavedListControllerGetExcelRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SavedListApi
   */
  public savedListControllerGetExcel(
    requestParameters: SavedListApiSavedListControllerGetExcelRequest,
    options?: any,
  ) {
    return SavedListApiFp(this.configuration)
      .savedListControllerGetExcel(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get one saved list
   * @param {SavedListApiSavedListControllerProspectRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SavedListApi
   */
  public savedListControllerProspect(
    requestParameters: SavedListApiSavedListControllerProspectRequest,
    options?: any,
  ) {
    return SavedListApiFp(this.configuration)
      .savedListControllerProspect(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get saved list
   * @param {SavedListApiSavedListControllerProspectsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SavedListApi
   */
  public savedListControllerProspects(
    requestParameters: SavedListApiSavedListControllerProspectsRequest,
    options?: any,
  ) {
    return SavedListApiFp(this.configuration)
      .savedListControllerProspects(
        requestParameters.page,
        requestParameters.limit,
        requestParameters.sort,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Update saved list
   * @param {SavedListApiSavedListControllerUpdateProspectRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SavedListApi
   */
  public savedListControllerUpdateProspect(
    requestParameters: SavedListApiSavedListControllerUpdateProspectRequest,
    options?: any,
  ) {
    return SavedListApiFp(this.configuration)
      .savedListControllerUpdateProspect(
        requestParameters.id,
        requestParameters.updateSavedListDto,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
