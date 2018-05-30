//rcc 
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            // copy thẻ footer trong container, trong index.html thầy cho. Nhớ chuyển sang JSX
            <div>
                <hr />
                <footer>
                    <p>© 2018 Company, Inc.</p>
                </footer>
            </div>
          
        );
    }
}

export default Footer;