import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, PreviewContainer, TitlePreviewContainer } from './collection-preview.styles';


const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <TitlePreviewContainer onClick={() => history.push(`${match.path}/${routeName}`)} >{title.toUpperCase()}</TitlePreviewContainer>
        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;