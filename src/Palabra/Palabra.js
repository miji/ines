import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Palabra extends Component {

    FotoClickHandler = () => {
        const x = document.getElementById('audio' + this.props.palabra);
        x.play();
    };


    render() {
        return (
            <div>
                <audio id={'audio' + this.props.palabra}>
                    <source
                        src={'audio/' + this.props.palabra + '.ogg'}
                        type="audio/ogg"
                    />
                </audio>
                <div className="card"
                     style={
                         {width: '18rem'}
                     }
                     onClick={this.FotoClickHandler}
                     onTouchStart={this.FotoClickHandler}>


                    <img src={'images/' + this.props.palabra + '.png'}
                         className="card-img-top"
                         alt={this.props.palabra}
                         style={{
                             objectFit: 'cover',
                             height: '18rem'
                         }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.palabra}</h5>
                    </div>
                </div>
                <br/>
            </div>

        );
    }
}

export default Palabra;
