//rcc 
import React, { Component } from 'react';

class Course extends Component {
    render() {
        return (
            <div className="col-xs-6 col-lg-4">
                <h2>{this.props.children}</h2>
                <p>Khóa học lập trình Website bằng PHP &amp; MySQL chỉ cung cấp cho bạn các kiến thức là chính.Kết thúc khóa học lập trình website PHP &amp; MySQL cơ bản chúng tôi sẽ KHÔNG cung cấp chứng chỉ cho bạn như tham gia các khóa học lập trình website bằng PHP &amp; MySQL cơ bản ở trung tâm.</p>
                <p><a className="btn btn-default" href="" role="button">Chi tiết »</a></p>
            </div>
        );
    }
}

export default Course;