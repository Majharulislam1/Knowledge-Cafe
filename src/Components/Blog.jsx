
import 'boxicons'

const Blog = ({ blog }) => {
    // console.log(blog);
    const { author_img, author_name, img, title, hash_tags, reading_time, submit_date } = blog;
    const date = new Date(submit_date);

    return (
        <div>
            <div className='border-b-2 pb-8'>
                <div className="image_section h-[30.125rem] w-full overflow-hidden">
                    <img src={img} alt="" className="w-full object-cover h-full rounded-md" />
                </div>
                <div className="content_section mt-4">
                    <div className="flex justify-between items-center">
                        <div className="author flex">
                            <div className="mr-4">
                                <img className="h-[3.75rem]" src={author_img} alt="" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[1.5rem]">{author_name}</h3>
                                <p className="text-[#11111199]">{date.toDateString()} </p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <p className="text-[#11111199] mr-4">{reading_time} min read </p>  <span className='cursor-pointer'><box-icon color='#11111199' name='bookmark'></box-icon> </span>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <h1 className='text-[2.5rem] font-bold'>{title}</h1>
                    </div>
                    <div className='hash_tags mt-4'>
                        {
                            hash_tags.map(tags => {
                                return (

                                    <span key={tags} className='mr-2 text-[#11111199]'>{tags}</span>
                                );


                            })
                        }

                    </div>
                    <div className='mt-4'>
                        <button className='text-[#6047ec] font-bold underline decoration-2'>Mark As Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

