import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoruNews, setCategoryNews] = useState([]);
    // console.log(id,news);

    useEffect(()=>{
        if (id == '0') {
            setCategoryNews(data)
            return;
        }else if(id == '1'){
            const filteredNews = data.filter(
              (news) => news.others.is_today_pick == true
            );
            setCategoryNews(filteredNews)
        }else{
            const filteredNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews);
        }
        
    }, [data, id])
    
    return (
      <div className='m-4'>
        <h2 className="font-bold">
          Total <span className="text-secondary">{categoruNews.length} </span>{" "}
          News Found
        </h2>

        <div className='grid grid-cols-1 gap-5'>
          {categoruNews.map((news) => (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))}
        </div>
      </div>
    );
};

export default CategoryNews;