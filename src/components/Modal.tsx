import BookForm from "./BookForm";

type Props = {
    id? :string[];
    open: boolean
    onClose: () => void
}

const Modal = (props: Props) => {
if ( !props.open ) return (<></>);

  return (
    <div 
        onClick={props.onClose} 
        className="relative w-full h-full flex overflow-auto 
        z-1 justify-center align-middle"
    >
        <div
            className="max-w-600px w-2/5 relative flex z-1 bg-white shadow-xl rounded"
            onClick={(e) => {
                e.stopPropagation()
            }}
        >
            <div 
            className="w-full flex flex-col"
            >
                <div 
                className="flex flex-row space-apart"
                >
                    <p 
                    className="flex justify-start m-3 bg-red-600 p-2 
                    rounded hover:bg-red-900 text-white"
                    onClick={props.onClose}
                    >
                        esc
                    </p>
                </div>
                <div className="flex flex-col items-center text-center mt-3 p-2" >
                    <BookForm id={props.id} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal