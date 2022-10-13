import '../styles/components/layout.css'

export const Layout = ({children}) => {
  return (
    <div className="layout">
      <div className="container-layout">
        {children}
      </div>
    </div>
  )
}
