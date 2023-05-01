import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { AppContext } from '../../context'
import * as S from './style'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`

function index() {
  const { searchValue } = useContext(AppContext)

  const getImages = async () => {
    const response = await axios.get(`${url}&query=${searchValue}`)
    return response.data
  }

  const { data: images } = useQuery(['images', searchValue], getImages)

  return (
    <S.Gallery>
      {images?.results?.map((image) => {
        const url = image?.urls?.regular
        return <S.GalleryImage key={image.id} src={url} />
      })}
    </S.Gallery>
  )
}

export default index
