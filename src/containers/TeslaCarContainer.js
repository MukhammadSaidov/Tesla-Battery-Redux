import {
    connect
} from 'react-redux';
import TeslaCar from '../components/TeslaCar/TeslaCar';


const mapStateToProps = (state) => {
    return {
        wheelsize: state.config.wheels
    }
}

const TeslaCarContainer = connect(mapStateToProps, null)(TeslaCar)
export default TeslaCarContainer