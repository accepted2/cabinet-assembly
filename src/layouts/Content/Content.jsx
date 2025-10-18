import './Content.scss'
import classNames from 'classnames'

const Content = (props) => {
  const {
    children,
  } = props

  return (
 <main className="content">{children}</main>
  )
}

export default Content