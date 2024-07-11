
interface props{
    children: string;
    onClick: () => void;
    color? : 'primary' | 'secondary' | 'danger'
}

const Button = ({children, onClick, color ='primary'}:props) => {
  return (
    <button className={"btn btn-" +color} onClick={onClick}>{children}</button>
  )
}

export default Button