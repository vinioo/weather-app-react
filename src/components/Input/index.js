import './style.css';

const Input = ({ placeholder, onChange, value }) => {
    return (
        <input type="input" placeholder={placeholder} onChange={onChange} value={value}>
        </input>
    )
}

export default Input;
