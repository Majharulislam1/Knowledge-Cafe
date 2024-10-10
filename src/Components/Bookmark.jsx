 

const Bookmark = ({book_mark}) => {
    const {id,title} = book_mark;
    return (
        <div>
            <div className="bg-white rounded-lg p-4 mb-4">
                                 <p>{title}</p>
            </div>
        </div>
    );
};

export default Bookmark;