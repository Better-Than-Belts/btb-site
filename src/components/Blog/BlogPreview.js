import React from 'react';

class Blogs extends React.Component { 
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>
                    Link to blogs/:id wrapping
                    <div>
                        Mini version of the hero image
                    </div>
                    <div>
                        Title
                    </div>
                    <div>
                        Author
                    </div>
                </div>
            </div>
        );
    }

}

export default Blogs;