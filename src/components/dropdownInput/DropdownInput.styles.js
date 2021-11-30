
import styled from 'styled-components/macro';
import * as colors from '../../theme/colors';
import * as typo from "../../theme/typography";

const noForwardProps = [];

export const StyledInput = styled('input', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(typo.Title),
  borderRadius: '0 5px 5px 0',
  border: '1px solid #dee2e6',
}));

export const StyledSearch = styled('input', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(typo.Title),
  border: 'none',
  borderBottom: `1px solid ${colors.inputBorder}`,
  borderRadius: 0,
  marginTop: -5,
}));

export const Subtitle = styled('small', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props)=>({
  ...(typo.PageSubTitle),
  color: colors.subTitleDark,
  float: 'right',
}));

