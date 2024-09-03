import img from '../assets/icons/logo.png'

const Navbar : React.FC = () => {
    
    return(
        <>
            <div className="p-2 px-16 bg-white w-full absolute fixed top-0">
                <img src={img} className='h-6' alt="" />
            </div>
        </>
    )
}

export default Navbar