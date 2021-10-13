import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Form } from 'react-final-form';

import { FilterRequest, PreFilter } from '../../../../store/companies/state';
import { AgeRange, Income } from '../../../../store/companies/state';
import { Tabs } from '../../../../ui/tabs/tabs';
import { ButtonRow } from './buttons-row/button-row';
import { Company } from './company/company';
import { Demographics } from './demographics/demographics';
import { Priority } from './priority/priority';
import { Container, Content, Header } from './styles';

interface FilterProps {
  setShowFilter: Dispatch<SetStateAction<boolean>>;
  searchField: string;
  setFilterQuery: Dispatch<SetStateAction<FilterRequest>>;
}

export const Filters: FC<FilterProps> = ({
  setShowFilter,
  searchField,
  setFilterQuery,
}) => {
  const [tabNum, setTabNum] = useState(0);
  const [rangeValue, setRangeValue] = useState<Array<number>>([0, 999]);
  const [gender, setGender] = useState(2);

  const FilterFormInitialValues: PreFilter = {};

  const onSubmitForm = (values: PreFilter) => {
    const demographicData: {
      'Household Income': Income[];
      Ethnicity: string[];
      Age: AgeRange[];
    } = {
      'Household Income': [],
      Ethnicity: [],
      Age: [],
    };

    Object.keys(values).map((key) => {
      if (key.includes('Household Income_') && values) {
        demographicData['Household Income'].push(
          key.replace('Household Income_', '') as Income,
        );
      }

      if (key.includes('Ethnicity_') && values) {
        demographicData.Ethnicity.push(key.replace('Ethnicity__', ''));
      }

      if (key.includes('Age_') && values) {
        demographicData.Age.push(key.replace('Age_', '') as AgeRange);
      }

      return key;
    });

    const genderList = ['male', 'female', 'both'] as const;
    setFilterQuery({
      page: 1,
      limit: 12,
      ethnicities: demographicData.Ethnicity,
      income: demographicData['Household Income'],
      ageRanges: demographicData.Age,
      gender: genderList[gender],
      q: searchField,
      industry: values.Industry ? [values.Industry] : undefined,
      deleteIds: undefined,
      csrFocusIds: values['CSR Focus'] ? [values['CSR Focus']] : undefined,
      affinities: values['SDG Goals'] ? [values['SDG Goals']] : undefined,
      location: values['Geographic Location']
        ? [values['Geographic Location']]
        : undefined,
      totalAnnualContributors: values['Total Annual Contributions'],
      revenueMin: rangeValue[0] * 1000,
      revenueMax: rangeValue[1] * 1000,
    });
  };
  return (
    <Content>
      <Header>Filters</Header>
      <Tabs tabNum={tabNum} setTabNum={setTabNum} TabList={['Advanced', 'Customize']} />

      <Form
        onSubmit={onSubmitForm}
        initialValues={FilterFormInitialValues}
        mutators={{
          setValue: ([field, value], state, { changeValue }) => {
            changeValue(state, field, () => value);
          },
        }}
        render={({ form, values, handleSubmit }) => (
          <Container>
            {tabNum === 1 && <Priority />}
            <Company
              onSubmit={onSubmitForm}
              values={values}
              rangeValue={rangeValue}
              setRangeValue={setRangeValue}
              form={form}
            />
            <Demographics
              onSubmit={onSubmitForm}
              form={form}
              gender={gender}
              setGender={setGender}
            />
            <ButtonRow handleSubmit={handleSubmit} setShowFilter={setShowFilter} />
          </Container>
        )}
      />
    </Content>
  );
};
