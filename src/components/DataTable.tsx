import { useState } from "react";
import Modal from "./Modal";
import { server_calls } from "../api/server";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from "../custom hook/FetchData";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'year_published', headerName: 'Publishing Year', flex: 1 },
    { field: 'genre', headerName: 'Address', flex: 1 },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'ISBN', headerName: 'ISBN', flex: 1 },
    { field: 'page_count', headerName: 'Page Count', flex: 1 },
    { field: 'availability', headerName: 'Availability', flex: 2 },

]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const {contactData, getData} = useGetData();
    const [ selectionModel, setSelectionModel] = useState<string[]>([])
    const navigate = useNavigate()

    const modalOpen = () => {
        setOpen(true)
    }

    const modalClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log('selection model: ${selectionModel');
        setTimeout( () => { navigate('/') }), 1000   
    }

  return (
    <>
        <Modal
            id={selectionModel} 
            open={open}
            onClose={modalClose}
        />
        <div className="flex flex-row justify-center mx-auto mt-10">
            <div>
                <button
                className=" border-4 border-[#E73C7E] p-2 m-5 text-2xl
                 bg-[#23d5ab] justify-center hover:bg-[#E73C7E] rounded"
                 onClick={() => modalOpen()}
                >
                    Add a book
                </button>
                <button
                onClick={ deleteData }
                className=" border-4 border-[#E73C7E] p-2 m-5 text-2xl
                 bg-[#23d5ab] justify-center hover:bg-[#E73C7E] rounded"
                >
                    Delete a book
                </button>
                <button
                onClick={ modalOpen }
                className=" border-4 border-[#E73C7E] p-2 m-5 text-2xl
                 bg-[#23d5ab] justify-center hover:bg-[#E73C7E] rounded"
                >
                    Edit the details
                </button>
            </div>
        </div>
        <div className={ open ? "hidden" : "container mx-auto my-5 flex flex-col" }
            style={{ height: 400, width: '100%'}}
            >
                <h2 className="border-4 border-[#E73C7E] p-2 m-5 text-2xl
                 bg-[#23d5ab] text-center  rounded"> My Books</h2>
                <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]}
                checkboxSelection={true}
                onSelectionModelChange={(item:any) => {
                    setSelectionModel(item)
                }}
                />
        </div>
    </>
  )
}

export default DataTable