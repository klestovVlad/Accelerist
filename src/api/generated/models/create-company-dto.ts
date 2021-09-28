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
import { CompanyDescriptionDto } from './company-description-dto';
import { CompanySocialMediaDto } from './company-social-media-dto';
import { TypesOfInvestmentDto } from './types-of-investment-dto';

/**
 *
 * @export
 * @interface CreateCompanyDto
 */
export interface CreateCompanyDto {
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  logo?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  twitterHandle?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  ticker?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  phone?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  fax?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  website?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  street?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  city?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  state?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  country?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  continent?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  zipCode?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  revenueRange?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  employeeRange?: string;
  /**
   *
   * @type {Array<CompanyDescriptionDto>}
   * @memberof CreateCompanyDto
   */
  descriptionList?: Array<CompanyDescriptionDto>;
  /**
   *
   * @type {Array<CompanySocialMediaDto>}
   * @memberof CreateCompanyDto
   */
  socialMediaUrls?: Array<CompanySocialMediaDto>;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateCompanyDto
   */
  industries?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateCompanyDto
   */
  primaryIndustry?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateCompanyDto
   */
  subUnitIndustries?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  annualContributions?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  cashContributions?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  inKindContributions?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  employeeContributions?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateCompanyDto
   */
  sdgGoals?: Array<CreateCompanyDtoSdgGoalsEnum>;
  /**
   *
   * @type {Array<TypesOfInvestmentDto>}
   * @memberof CreateCompanyDto
   */
  typesOfInvestment?: Array<TypesOfInvestmentDto>;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateCompanyDto
   */
  crsFocus?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof CreateCompanyDto
   */
  charitablePartners?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyDto
   */
  partnershipLink?: string;
  /**
   *
   * @type {boolean}
   * @memberof CreateCompanyDto
   */
  employeeEngagementOpportunities?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum CreateCompanyDtoSdgGoalsEnum {
  NO_POVERTY = 'noPoverty',
  ZERO_HUNGER = 'zeroHunger',
  GOOD_HEALTH_AND_WELL_BEING = 'goodHealthAndWellBeing',
  QUALITY_EDUCATION = 'qualityEducation',
  GENDER_EQUALITY = 'genderEquality',
  CLEAN_WATER_AND_SANITATION = 'cleanWaterAndSanitation',
  AFFORDABLE_AND_CLEAN_ENERGY = 'affordableAndCleanEnergy',
  DECENT_WORK_AND_ECONOMIC_GROWTH = 'decentWorkAndEconomicGrowth',
  INDUSTRY_INNOVATION_AND_INFRASTRUCTURE = 'industryInnovationAndInfrastructure',
  REDUCED_INEQUALITIES = 'reducedInequalities',
  SUSTAINABLE_CITIES_AND_COMMUNITIES = 'sustainableCitiesAndCommunities',
  RESPONSIBLE_CONSUMPTION_AND_PRODUCTION = 'responsibleConsumptionAndProduction',
  CLIMATE_ACTION = 'climateAction',
  LIFE_BELOW_WATER = 'lifeBelowWater',
  LIFE_ON_LAND = 'lifeOnLand',
  PEACE_JUSTICE_AND_STRONG_INSTITUTIONS = 'peaceJusticeAndStrongInstitutions',
  PARTNERSHIPS_FOR_THE_GOALS = 'partnershipsForTheGoals',
}
