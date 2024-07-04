import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReviewPage from '../components/review/ReviewPage'

const ReviewRouter = () => {
    return (
        <Routes>
            <Route path='review' element={<ReviewPage/>}></Route>
        </Routes>
    )
}

export default ReviewRouter