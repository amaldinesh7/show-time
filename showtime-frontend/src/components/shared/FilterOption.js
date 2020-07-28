import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const FilterOption = () => (
  <Dropdown
    icon='filter'
    floating
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header icon='star' content='Rating' />
      <Dropdown.Divider />
      <Dropdown.Item value='1' onClick={(e,data)=>{console.log(data.value)}}>1 Star</Dropdown.Item>
      <Dropdown.Item value='2' onClick={(e,data)=>{console.log(data.value)}}>2 Star</Dropdown.Item>
      <Dropdown.Item value='3' onClick={(e,data)=>{console.log(data.value)}}>3 Star</Dropdown.Item>
      <Dropdown.Item value='4' onClick={(e,data)=>{console.log(data.value)}}>4 Star</Dropdown.Item>
      <Dropdown.Item value='5' onClick={(e,data)=>{console.log(data.value)}}>5 Star</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default FilterOption
