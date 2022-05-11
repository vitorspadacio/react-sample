import { useNavigate } from 'react-router'
import Navigator from './Navigator'

export default () => {
  Navigator.navigate = useNavigate()

  return null
}
