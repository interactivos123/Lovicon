import { styled } from '@material-ui/core/styles'
import { theme } from '../../../theme'

export const StyledSectionSix = styled('section')({
  width: '100%',
  backgroundColor: '#252727',
  padding: '60px 0'
})

export const Title = styled('h1')({
  color: '#FFFFFF',
  width: '100%',
  fontSize: '36px',
  fontWeight: '500',
  lineHeight: '48px',

  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
    lineHeight: '56px'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    lineHeight: '40px'
  }
})

export const ContainerBordePlan = styled('div')({
  width: '100%',
  height: '100%',
  background: 'transparent linear-gradient(269deg, #9B2DEF 0%, #2D9BEF 61%, #35EDFB 100%) 0% 0%',
  borderRadius: '8px',
  padding: '2px',
  boxSizing: 'border-box'
})

export const ContainerPlan = styled('div')({
  width: '100%',
  height: '100%',
  padding: '60px 20px 20px 20px',
  backgroundColor: '#070606',
  boxSizing: 'border-box',
  borderRadius: '8px'
})
