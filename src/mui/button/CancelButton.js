import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import translate from '../../i18n/translate';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';


class CancelButton extends Component {
    render() {
        const {basePath, label = 'aor.action.cancel', raised = true, translate} = this.props;
        return raised
            ? <RaisedButton
                type="submit"
                label={label && translate(label)}
                containerElement={<Link to={basePath}/>}
                secondary
                style={{
                    margin: '10px',
                    position: 'relative',
                }}
            />
            : <FlatButton
                type="submit"
                label={label && translate(label)}
                containerElement={<Link to={basePath}/>}
                secondary
                style={{
                    position: 'relative',
                }}
            />
         ;
    }
}

CancelButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    raised: PropTypes.bool,
    translate: PropTypes.func.isRequired,
};

export default translate(CancelButton);