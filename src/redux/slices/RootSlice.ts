import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        year_published: "Year Published",
        title: "Title",
        genre: "Genre",
        author: "Author",
        ISBN: "ISBN",
        page_count: "Page Count",
        availability: "Availability"
        
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseYearPublished: (state, action) => { state.year_published = action.payload },
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseISBN: (state, action) => { state.ISBN = action.payload },
        choosePageCount: (state, action) => { state.page_count = action.payload },
        chooseAvailability: (state, action) => { state.availability = action.payload }, // All we're doing is setting the input to the state.name
    }
})

export const reducer = rootSlice.reducer
export const {chooseYearPublished, chooseTitle, chooseGenre, chooseAuthor, chooseISBN, choosePageCount, chooseAvailability} = rootSlice.actions