import styled from "styled-components";

const ImgContainer = ({src, className, inactive, icon, ...props}) => {
    return (
        <img src={src} {...props} className={className} alt=""/>
    )
}

export const Img = styled(ImgContainer)`
  margin: ${({margin = '0'}) => margin};
  cursor: ${({inactive}) => (inactive ? 'default' : 'pointer')};
  width: ${({icon, width}) => (icon ? '24px' : width)};
  height: ${({icon, height}) => (icon ? '24px' : height)};
  vertical-align: middle;
  display: inline-block;
  
`