import React from 'react';

const DesktopCategories = (props) => {
  //console.log(props);
  return (
    <section>
      <ul>
        {
          props.categories.map( (item, id) => (
            <li key={id}><a href='#test'>{item}</a></li>
          ))
        }
      </ul>
    </section>
  )
}

export default DesktopCategories;