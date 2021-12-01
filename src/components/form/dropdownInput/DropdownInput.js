import { useState } from "react";
import { Desc } from "../../text/Text";
import { StyledInput, StyledSearch, Subtitle } from "./DropdownInput.styles";

function DropdownInput(props) {
  const {items, searchable, label } = props;
  const [selected, setSelected] = useState(props.value || null)
  const [filtered, setFiltered] = useState(items)

  const onSelect = (item) => {
    props.onSelect && props.onSelect(item);
    setSelected(item);
  }

  const onSearch = (e)=>{
    const str = e.target.value;
    setFiltered(items.filter((item)=> item.title.toLowerCase().indexOf(str.toLowerCase()) > -1));
  }
  return (
    <div className={`dropdown-input ${props.className}`} >
      {label && <Desc value={label} variant={'dark'} />}
      <div class="dropdown input-append btn-group">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {selected && selected.title} <span class="caret"></span>
        </button>
        <StyledInput size="16" type={props.inputType || 'text'} placeholder={props.placeholder} {...{disabled: props.disabled}}/>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {searchable && <li><StyledSearch onChange={onSearch} size="16" className='form-control' type="text" placeholder='Search here...' /></li>}
          {
            filtered && filtered.map(item => {
             return (
              <li>
                <button 
                  class="dropdown-item" 
                  onClick={()=>{onSelect(item)}}>
                    {item.title} {item.subTitle && <Subtitle className='subtitle'>{item.subTitle}</Subtitle>}
                </button>
              </li>
             )  
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default DropdownInput
