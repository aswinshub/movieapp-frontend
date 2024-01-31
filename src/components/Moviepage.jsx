import React from 'react'
import Header from './Header'

const Moviepage = () => {
  return (
    <div>

<Header/>

○ The customer Dashboard should display the following the list of movies in the
following format:
■ Movie Name with image
■ Category(UA,A,PG)
■ Languages(Malayalam,Hindi,Tamil,Telugu,English)


If the customer clicks on the Movie, he/she must be redirected to the movie page
where he must be able to view the following:
■ Movie Name
■ Poster
■ Description
■ Cast Details
■ Movie Reviews
■ Book Ticket Option

The Admin Dashboard should display the following the list of movies in the
following format:
■ Movie Name with image
■ Category(UA,A,PG)
■ Languages(Malayalam,Hindi,Tamil,Telugu,English)
■ Average rating of audience
■ No: of tickets sold per day



Add option must be given to a add movie with the following details.
■ Movie Name
■ Image
■ Category
■ Languages
■ Cast
■ Description
■ Ticket rates
■ No: of seats
      
    </div>
  )
}

export default Moviepage
