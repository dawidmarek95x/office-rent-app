import React from 'react'
import { TfiArrowRight } from 'react-icons/tfi';
import { Button } from './MoreInfoBtn.styled';

const MoreInfoBtn = ({type = "button", color, bgColor, bgColorHover, children}) => {
  return (
    <Button type={type} color={color} bgColor={bgColor} bgColorHover={bgColorHover} >
      <span>{children}</span>
      <div>
      <TfiArrowRight
        style={{
          width: "28px",
          height: "24px",
        }}
      />
    </div>
    </Button>
  )
}

export default MoreInfoBtn