import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { compose } from 'redux';
import WithSpinner from '../width-spinner/width-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToPros = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewcontainer = compose(
    connect(mapStateToPros),
    WithSpinner,
)(CollectionOverview);

export default CollectionOverviewcontainer;
