import { CSSProperties, FC } from 'react'
import Props from './MainLayout'

const style: CSSProperties = {
  backgroundColor: 'rgba(0,0,0.3)',
  borderRadius: '5px',
  padding: '10px',
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={style}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  )
}
