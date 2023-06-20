import Input from "./Input";
import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseYearPublished, chooseTitle, chooseGenre, chooseAuthor, chooseISBN, choosePageCount, chooseAvailability } from "../redux/slices/RootSlice";
import { useNavigate } from 'react-router';

interface BookFormProps {
  id?: string[];
}

interface FilteredData {
  [key: string]: any;
}

const BookForm = (props: BookFormProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();

  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();

  const filteredData: FilteredData = {};

    // Filter out fields with empty strings
    Object.entries(data).forEach(([key, value]) => {
      if (value !== '') {
        filteredData[key] = value;
      }
    });

    if (props.id && props.id.length > 0) {
      await server_calls.update(props.id[0], filteredData);
      console.log(`updated: ${JSON.stringify(filteredData)} ${props.id}`);
          setTimeout(() => {
              navigate('/'); // Navigate to the dashboard page
            }, 2000);
    } else {
        console.log("bookadded")
        dispatch(chooseYearPublished(data.year_published));
        dispatch(chooseTitle(data.title));
        dispatch(chooseGenre(data.genre));
        dispatch(chooseAuthor(data.author));
        dispatch(chooseISBN(data.ISBN));
        dispatch(choosePageCount(data.page_count));
        dispatch(chooseAvailability(data.availability))
  
        await server_calls.create(store.getState());
        console.log('Book was added');
        setTimeout(() => {
            navigate('/');
          }, 2000);
    }
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="year_published">Publishing Year</label>
          <Input {...register('year_published')} name='year_published' placeholder="Publishing Year" />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <Input {...register('genre')} name='genre' placeholder="Genre" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name='author' placeholder="Author" />
        </div>
        <div>
          <label htmlFor="ISBN">ISBN</label>
          <Input {...register('ISBN')} name='ISBN' placeholder="ISBN" />
        </div>
        <div>
          <label htmlFor="page_count">Page Count</label>
          <Input {...register('page_count')} name='page_count' placeholder="Page Count" />
        </div>
        <div>
          <label htmlFor="availability">Availability</label>
          <Input {...register('availability')} name='availability' placeholder="Availability" />
        </div>
        <div className="flex p-1">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookForm
