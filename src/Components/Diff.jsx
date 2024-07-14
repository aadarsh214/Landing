import React from 'react';
import './Diff.css';
import dglow from './dglow.png';

const Diff = () => {
    const features = [
        { name: "Gamification Learning", others: false, datasense: true},
        { name: "20000+ Practice Questions", others: false, datasense: true },
        { name: "Full Length Courses", others: true, datasense: true },
        { name: "Guided Format", others: false, datasense: true },
        { name: "Data Analystics Focused", others: true, datasense: true },
        { name: "Job Placements", others: false, datasense: true },
        { name: "Video Explanations", others: true, datasense: true },
        { name: "Mock Interviews", others: false, datasense: true },    
        { name: "All in One Platform", others: false, datasense: true },      
    ];

    return (
        <div className='vc'>
            <h1 className='te font-semibold'>Why us?</h1>
            <div className="comparison-table">
                <img src={dglow} alt=""  className='dglow'/>
            <div className='cdd'> 
            <h1 className='ot'> Others </h1>
            <h1 className='da'> Datasense</h1></div>
                {features.map((feature, index) => (
                    <div className="row" key={index}>
                        <div className="row-item">{feature.name}</div>
                        <div className="row-item">
                            <div className={`box ${feature.others ? 'green' : 'red'}`}>
                                {feature.others ? '✔' : '✖'}
                            </div>
                        </div>
                        <div className="row-item">
                            <div className={`box ${feature.datasense ? 'green' : 'red'}`}>
                                {feature.datasense ? '✔' : '✖'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Diff;
