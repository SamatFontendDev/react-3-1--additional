import React from 'react'
import './Show.css'
import { getShowInfo } from '../../api'

class Show extends React.Component{
    state = {
        data: null,
        id: undefined
    }
    
    async componentDidUpdate() {
        let { showId } = this.props;

        try{
            const data = await getShowInfo(showId)
            this.setState({
                data: data,
                id: showId
            })
            
        } catch(err) {
            console.log(err.message);
        }
    }

    render() {
        const { data } = this.state;
        return (
            data != null
            ?
            <div className="show">
                <img alt="" src={data.image.original} className="show-image"/>
            </div>
             :
             ''
        )
    }
}

export default Show