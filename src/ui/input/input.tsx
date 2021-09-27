import React, { FC, useState } from 'react'
import { Field, FieldRenderProps, Form } from 'react-final-form'

import { Checkbox } from '../check-box/check-box'
import { VerticalChevron } from '../icons/vertical-chevron/vertical-chevron'
import {
  Button,
  ButtonsRow,
  CheckedParamList,
  CLoseIcon,
  Content,
  InputField,
  InputLabel,
  ListContent,
  ListItemName,
  ListRow,
} from './styles'

interface InputProps extends FieldRenderProps<string> {
  label: string
  placeholder: string
  predefined: boolean
  predefinedList?: string[]
}

export const Input: FC<InputProps> = ({
  label,
  input,
  placeholder,
  predefined,
  predefinedList,
  form,
}) => {
  const [showList, setShowList] = useState(false)

  const ClearInput = () => form.mutators.setValue(label, '')

  const addListItemsToInput = (values: { [key: string]: string }) => {
    const arr: string[] = []
    Object.keys(values).map((item) => (values[item] ? arr.push(item) : null))
    Array.from(new Set(arr))
  }

  const paramList = predefinedList === undefined ? [''] : predefinedList

  return (
    <Content>
      <InputLabel>{label}</InputLabel>
      <InputField
        onChange={input.onChange}
        value={input.value}
        placeholder={placeholder}
        disabled={predefined}
      />
      {predefined && <CheckedParamList>123</CheckedParamList>}
      <ButtonsRow>
        <Button onClick={ClearInput}>
          {input.value.length > 0 && <CLoseIcon />}
        </Button>
        {predefined && (
          <Button onClick={() => setShowList(!showList)}>
            <VerticalChevron inverted={showList} />
          </Button>
        )}
      </ButtonsRow>
      {predefined && showList && (
        <Form
          onSubmit={(values) => addListItemsToInput(values)}
          render={({ values }) => (
            <ListContent>
              {paramList.map((item, index) => (
                <ListRow key={item + index.toString}>
                  <ListItemName>{item}</ListItemName>
                  <Field
                    name={item}
                    type="checkbox"
                    component={Checkbox}
                    onChange={addListItemsToInput(values)}
                  />
                </ListRow>
              ))}
            </ListContent>
          )}
        />
      )}
    </Content>
  )
}

Input.defaultProps = {
  predefinedList: [],
}
