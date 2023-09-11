import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'


//fetching data in the Server Side
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque facilis eos iste debitis, quidem numquam.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, unde laborum! Tenetur pariatur doloribus quae aperiam reprehenderit quibusdam accusamus voluptatibus ratione quisquam officiis? Sint, iusto?
        </p>
      </div>
    </div>
  )
}

export default BlogPost