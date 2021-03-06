import { MenuItem } from 'components/MenuLeft'
import { triangle } from 'polished'
import media from 'services/ResponsiveService'
import styled from 'styled-components'

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 4;
  padding: 8px;
  border-radius: 4px;
  background: ${props => props.theme.white};
  box-shadow: 0px 0px 16px rgba(18, 29, 51, 0.25);
`
export const DropdownMenuItem = styled(MenuItem)`
  white-space: nowrap;
  padding: 8px 16px;
  margin-bottom: 0;
`
export const DropdownMenuArrow = styled.div`
  position: absolute;
  top: -8px;
  right: 64px;
  ${props => {
    return triangle({
      pointingDirection: 'top',
      width: '16px',
      height: '8px',
      foregroundColor: props.theme.white
    })
  }}
  ${media.tabletL`
    right: 8px;
  `}
`
