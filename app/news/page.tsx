'use client'
import News from '../components/News'
import Navbar from '../components/Navbar'

const NewsPage = async () => {
    const url = `https://newsapi.org/v2/everything?q=apple&from=2023-06-07&to=2023-06-07&sortBy=popularity&apiKey=060b4b10339f4b739d6f5ebd613519a2`
    const res = await fetch(url)
    const apiData = await res.json();
    const newsData = apiData.articles;

    return (
        <div>
            <Navbar />
            <h1 className='text-center font-bold text-2xl my-6'>News</h1>
            <div className='flex items-center flex-wrap my-6 mr-3 justify-center'>
                {
                    newsData.map((index: any) => (
                        <div key={index.id}>
                            <News data={index} urlImage={index.urlToImage} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewsPage;
