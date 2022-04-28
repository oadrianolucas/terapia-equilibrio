import {BsWhatsapp} from 'react-icons/bs'
export default function WhatsApp(){
    return (
        <>
            <button className="h-14 w-14 bg-green-600
            rounded-full fixed text-center z-1 right-2
            bottom-2 hover:bg-green-500">
                <BsWhatsapp className='w-14 text-2xl text-white' />
            </button>
        </>
    )
}