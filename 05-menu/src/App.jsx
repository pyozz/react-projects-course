import React, { useState } from 'react'
import Title from './Title'
import data from './data'
import MenuList from './MenuList'
import Categories from './Categories'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]

function App() {
  const [menu, setMenu] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterMenuHandler = (category) => {
    if (category === 'all') return setMenu(data)
    const newMenu = data.filter((item) => item.category === category)
    setMenu(newMenu)
  }

  return (
    <main>
      <section className="menu">
        <Title title="our menu" />
        <Categories
          categories={categories}
          filterMenuHandler={filterMenuHandler}
        />
        <MenuList menu={menu} />
      </section>
    </main>
  )
}

export default App
