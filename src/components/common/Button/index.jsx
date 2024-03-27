import '../Button/button.css'

export const Button = ({ children, className }) => {
  return <button className={className}>{children}</button>
}
