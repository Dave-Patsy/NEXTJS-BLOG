import styleAlert from '../../styles/alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styleAlert.success]: type === 'success',
        [styleAlert.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}