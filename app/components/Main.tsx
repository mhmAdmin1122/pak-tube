import React from 'react'
import CategoryBar from './CategoryBar'
import LeftBar from './LeftBar'
import News from './News'

const Main = () => {
    return (
        <main className='flex items-start w-full'>
            <LeftBar />
            <div className="mainContent block container">
                <CategoryBar />
                <div className="main px-12 py-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat accusamus temporibus magni assumenda animi aliquid architecto nesciunt, perspiciatis ex eius veniam deleniti velit obcaecati eos accusantium nemo! Nam temporibus nesciunt nulla quos aliquam quibusdam explicabo maiores. Ea sed nihil quae earum assumenda magnam commodi natus ipsa laborum, exercitationem fuga molestias! Saepe delectus tenetur beatae id nemo.</p>
                    <News />
                </div>
            </div>
        </main>
    )
}

export default Main
