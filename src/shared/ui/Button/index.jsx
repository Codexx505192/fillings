

export default function Button({ children, onClick }){
    return(
        <button className='buttong _active' onClick={onClick}>
        {children}
        </button>
    )
}