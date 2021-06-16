import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import WithSpinner from '../../components/width-spinner/width-spinner.component';
import CollectionPage from './collection.component';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;